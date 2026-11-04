import type { IAuditLog } from "./admin";
import type { IEntity, ITimeStamped } from "./common";
import type { ICourse } from "./course";
import type { IEnrollment } from "./enrollment";
import type { IReport } from "./report";
import type { IRefreshToken } from "./token";


export enum EUserRole {
    Student = "student",
    Teacher = "teacher",
    Admin = "admin",
    Moderator = "moderator"
};
export enum EAccountStatus { Active, Inactive, Disabled };
export interface IUser extends IEntity, ITimeStamped {
    firstName: string;
    lastName: string;

    status: EAccountStatus;
    statusUpdatedAt?: Date;
    statusUpdateReason?: string;

    studentProfile?: IStudentProfile;
    instructorProfile?: IInstructorProfile;
    moderatorProfile?: IModeratorProfile;
    adminProfile?: IAdminProfile;

    refreshTokens: IRefreshToken[];

    issuedReports: IReport[];
    closedReports: IReport[];
    auditLogs: IAuditLog[];
}

export interface IStudentProfile {
    userId: string;
    enrollments: IEnrollment[];
}

export interface IInstructorProfile {
    headline?: string;
    bio?: string;
    expertise?: string;

    courses: ICourse[];
}

export interface IModeratorProfile extends ITimeStamped {
    assignedReports: IReport[];
}

export interface IAdminProfile extends ITimeStamped {
    elevatedReports: IReport[];
}
