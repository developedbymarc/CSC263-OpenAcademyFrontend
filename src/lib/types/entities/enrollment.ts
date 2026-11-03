import type { IStudentProfile } from "./user";

export enum EEnrollmentStatus { Active, Withdrawn };
export interface IEnrollment {
    courseId: string;
    studentId: string;
    studentProfile: IStudentProfile;

    enrollmentDate: Date;
    enrollmentStatus: EEnrollmentStatus;
}
