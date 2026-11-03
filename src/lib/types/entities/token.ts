import type { IEntity } from "./common";

export interface IRefreshToken extends IEntity {
    familyId: string;
    replacedById: string;
    tokenHash: string;

    isPersistent: boolean;
    createdAt: Date;
    expiresAt: Date;
    revokedAt?: Date;

    isExpired: boolean;
    isRevoked: boolean;

    ip: string;
    userAgent: string;
}
