import type { IEntity } from "./common";

export interface IAuditLog extends IEntity {
    actorId?: string;
    action: string;

    targetType: string;
    targetId: string;

    details?: string;
    timestamp: Date;
}
