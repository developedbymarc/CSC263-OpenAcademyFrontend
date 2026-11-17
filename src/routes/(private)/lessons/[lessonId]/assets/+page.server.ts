import { fail } from '@sveltejs/kit';
import { call } from '#lib/server/api.ts';

export const load = async ({ locals, params }) => {
	const res = await call(() => locals.api.assets.apiLessonsLessonIdAssetsGet({ lessonId: params.lessonId }));
	return {
		lessonId: params.lessonId,
		assets: res.ok ? (res.data.data ?? []) : [],
		loadError: res.ok ? null : res.error.message
	};
};

export const actions = {
	upload: async ({ request, locals, params }) => {
		const file = (await request.formData()).get('file');
		if (!(file instanceof File) || file.size === 0) return fail(400, { error: 'Choose a file first.' });

		const { assets } = locals.api;
		const lessonId = params.lessonId;
		if (!file.type.startsWith('image/') && !file.type.startsWith('video/')) return fail(400, { error: 'Only images and videos are supported.' });

		const res = await call(() =>
			file.type.startsWith('video/')
				? assets.apiLessonsLessonIdAssetsVideosPost({ lessonId, file })
				: assets.apiLessonsLessonIdAssetsImagesPost({ lessonId, file })
		);
		return res.ok ? { success: true } : fail(res.error.status || 400, { error: res.error.message });
	},

	delete: async ({ request, locals, params }) => {
		const assetId = String((await request.formData()).get('assetId') ?? '');
		const res = await call(() => locals.api.assets.apiLessonsLessonIdAssetsAssetIdDelete({ lessonId: params.lessonId, assetId }));
		return res.ok ? { success: true } : fail(res.error.status || 400, { error: res.error.message });
	}
};
