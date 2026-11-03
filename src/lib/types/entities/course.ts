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
