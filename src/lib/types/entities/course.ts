import type { IEntity, ITimeStamped } from "./common";

export interface ICategory {
    name: string;
    slug: string;
    courses: ICourse[];
}

export enum ECourseStatus { Draft, Published };
export interface ICourse extends IEntity, ITimeStamped {
    id: string;
    instructorId: string;
    // instructorProfile: InstructorProfile;

    title: string;
    description: string;
    status: ECourseStatus;

    createdAt: Date;
    updatedAt: Date;

    categories: ICategory[];
    modules: IModule[];
    // enrollments: Enrollment[];
};

export interface IModule extends IEntity, ITimeStamped {
    courseId: string;
    title: string;
    description: string;
    order: number;
    lessons: ILesson[];
}

export enum EAssetType { Image, Video };
export enum EAssetStatus { Uploading, Ready, Failed };
export interface ILessonAsset extends IEntity, ITimeStamped {
    lessonId: string;
    blobPath: string;
    contentType: string;

    order: number;
    sizeBytes: number;
    durationSeconds?: number;

    assetType: EAssetType;
    assetStatus: EAssetStatus;
}

export interface ILesson extends IEntity, ITimeStamped {
    moduleId: string;
    title: string;
    description: string;
    content: string;
    order: number;

    lessonAssets: ILessonAsset[];
}

/** Result of creating a course through the API (ids needed to continue, e.g. uploading lesson assets). */
export interface ICourseCreated {
    courseId: string;
    lessons: { id: string, title: string }[];
}

// ---- API view models -------------------------------------------------------------------------------------
// The entity interfaces above mirror the database. What the backend actually returns is smaller (no timestamps,
// no nested modules on the catalogue), so pages are typed with these instead. Mapped in `$lib/server/courses.ts`.

export interface ICourseCategoryView { id: number; name: string; slug: string }

/** One row of the public catalogue (GET /Courses). */
export interface ICourseSummary {
    id: string;
    title: string;
    description: string;
    thumbnailUrl: string | null;
    categories: ICourseCategoryView[];
}

export interface ILessonAssetView {
    id: string;
    type: EAssetType;
    contentType: string;
    sizeBytes: number;
    durationSeconds: number | null;
    order: number;
    url: string;
}

export interface ILessonView {
    id: string;
    moduleId: string;
    title: string;
    description: string;
    content: string;
    order: number;
}

export interface IModuleView {
    id: string;
    courseId: string;
    title: string;
    description: string;
    order: number;
    lessons: ILessonView[];
}

/** A course with its full module/lesson tree. */
export interface ICourseDetail extends ICourseSummary {
    modules: IModuleView[];
    /**
     * True when the backend refused to list the modules/lessons for the current user (401/403, e.g. a student who
     * has not enrolled yet). Only set when the caller asked for `allowLockedContent`; `modules` is then empty.
     */
    contentLocked?: boolean;
}

export interface ICatalogPage {
    items: ICourseSummary[];
    page: number;
    pageSize: number;
    totalCount: number;
    totalPages: number;
}
