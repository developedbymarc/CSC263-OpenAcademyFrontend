import { call, fromInt, toInt, type Api, type CallResult } from '#lib/server/api.ts';
import type { CourseCatalogItemDto, LessonAssetDto, LessonDto, ModuleDto } from '#lib/api/index.ts';
import type {
	ICatalogPage,
	ICourseDetail,
	ICourseSummary,
	ILessonAssetView,
	ILessonView
} from '#lib/types/entities/course.ts';

// ---------- mappers (generated `{}` ints -> numbers) ----------

const toSummary = (c: CourseCatalogItemDto): ICourseSummary => ({
	id: c.id,
	title: c.title,
	description: c.description,
	thumbnailUrl: c.thumbnailUrl,
	categories: c.categories.map((x) => ({ id: fromInt(x.id), name: x.name, slug: x.slug }))
});

const toLesson = (l: LessonDto): ILessonView => ({
	id: l.id,
	moduleId: l.moduleId,
	title: l.title,
	description: l.description,
	content: l.content,
	order: fromInt(l.order)
});

const toAsset = (a: LessonAssetDto): ILessonAssetView => ({
	id: a.id,
	type: a.type,
	contentType: a.contentType,
	sizeBytes: fromInt(a.sizeBytes),
	durationSeconds: a.durationSeconds == null ? null : fromInt(a.durationSeconds),
	order: fromInt(a.order),
	url: a.url
});

const byOrder = <T extends { order: number }>(a: T, b: T) => a.order - b.order;

// ---------- catalogue ----------

export type CatalogQuery = { title?: string; category?: string; page?: number; pageSize?: number };

/** GET /Courses */
export async function searchCourses(
	api: Api,
	q: CatalogQuery = {}
): Promise<CallResult<ICatalogPage>> {
	const res = await call(() =>
		api.courses.coursesGet({
			title: q.title || undefined,
			category: q.category || undefined,
			page: q.page == null ? undefined : toInt(q.page),
			pageSize: q.pageSize == null ? undefined : toInt(q.pageSize)
		})
	);
	if (!res.ok) return res;
	const d = res.data.data;
	if (!d)
		return {
			ok: true,
			data: { items: [], page: 1, pageSize: q.pageSize ?? 12, totalCount: 0, totalPages: 1 }
		};
	const pageSize = fromInt(d.pageSize, q.pageSize ?? 12) || 12;
	const totalCount = fromInt(d.totalCount);
	return {
		ok: true,
		data: {
			items: d.items.map(toSummary),
			page: fromInt(d.page, 1),
			pageSize,
			totalCount,
			totalPages: Math.max(1, Math.ceil(totalCount / pageSize))
		}
	};
}

// ---------- single course ----------

/**
 * The backend has no GET /Courses/{id}, so the title/description are looked up in the catalogue
 * (scanned page by page, capped) and the module/lesson tree comes from the Modules + Lessons endpoints.
 * TODO: replace the catalogue scan with a real endpoint once the backend exposes one.
 */
async function findInCatalogue(api: Api, id: string): Promise<CallResult<ICourseSummary | null>> {
	const pageSize = 50;
	for (let page = 1; page <= 20; page++) {
		const res = await searchCourses(api, { page, pageSize });
		if (!res.ok) return res;
		const hit = res.data.items.find((c) => c.id === id);
		if (hit) return { ok: true, data: hit };
		if (page >= res.data.totalPages) break;
	}
	return { ok: true, data: null };
}

export type GetCourseOptions = {
	/**
	 * The module/lesson endpoints are not readable by everyone (a student who has not enrolled gets a 403).
	 * With this set, a 401/403 on them yields the course summary with `modules: []` and `contentLocked: true`
	 * instead of an error, which is what the public explore page needs.
	 */
	allowLockedContent?: boolean;
};

const isLockedStatus = (status: number) => status === 401 || status === 403;

export async function getCourse(
	api: Api,
	id: string,
	opts: GetCourseOptions = {}
): Promise<CallResult<ICourseDetail | null>> {
	const [summary, mods] = await Promise.all([
		findInCatalogue(api, id),
		call(() => api.modules.coursesCourseIdModulesGet({ courseId: id }))
	]);
	if (!summary.ok) return summary;

	const locked = (): CallResult<ICourseDetail> | null =>
		summary.data ? { ok: true, data: { ...summary.data, modules: [], contentLocked: true } } : null;

	if (!mods.ok) {
		if (mods.error.status === 404) return { ok: true, data: null };
		if (opts.allowLockedContent && isLockedStatus(mods.error.status)) {
			const result = locked();
			if (result) return result;
		}
		return mods;
	}
	if (!summary.data) return { ok: true, data: null };

	const moduleDtos: ModuleDto[] = mods.data.data ?? [];
	const moduleResults = await Promise.all(
		moduleDtos.map(async (m) => {
			const l = await call(() =>
				api.lessons.coursesCourseIdModulesModuleIdLessonsGet({ courseId: id, moduleId: m.id })
			);
			return l.ok
				? {
						ok: true as const,
						data: {
							id: m.id,
							courseId: m.courseId,
							title: m.title,
							description: m.description,
							order: fromInt(m.order),
							lessons: (l.data.data ?? []).map(toLesson).sort(byOrder)
						}
					}
				: l;
		})
	);
	const failedModule = moduleResults.find((result) => !result.ok);
	if (failedModule && !failedModule.ok) {
		if (opts.allowLockedContent && isLockedStatus(failedModule.error.status)) return locked()!;
		return failedModule;
	}
	const modules = moduleResults.flatMap((result) => (result.ok ? [result.data] : [])).sort(byOrder);
	return { ok: true, data: { ...summary.data, modules, contentLocked: false } };
}

/** GET .../Lessons/{lessonId}/Assets */
export async function getLessonAssets(
	api: Api,
	courseId: string,
	moduleId: string,
	lessonId: string
): Promise<CallResult<ILessonAssetView[]>> {
	const res = await call(() =>
		api.assets.coursesCourseIdModulesModuleIdLessonsLessonIdAssetsGet({
			courseId,
			moduleId,
			lessonId
		})
	);
	return res.ok ? { ok: true, data: (res.data.data ?? []).map(toAsset).sort(byOrder) } : res;
}
