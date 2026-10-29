import type { IEntity, ITimeStamped } from "./common";

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

    // categories: Category[];
    // modules: Module[];
    // enrollments: Enrollment[];
};