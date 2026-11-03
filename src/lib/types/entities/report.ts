import type { ITimeStamped } from "./common";

export enum EReportCreationReason { Profanity, InappropritateContent, Other };
export enum EReportClosureReason { Resolved, Spam, Other }
export interface IReport extends ITimeStamped {
    id: string;
    issuerId?: string;
    contentId: string
    closedById?: string;
    elevatedToId?: string;
    assignedToId: string;

    contentType?: string;
    description?: string;
    reason: EReportCreationReason;

    closedAt: Date;
    isClosed: boolean;
    closureReason?: EReportClosureReason;
    closureNote: string;
}
