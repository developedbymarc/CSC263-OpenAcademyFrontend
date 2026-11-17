import type { Api } from '#lib/server/api.ts';
import type { WhoAmIDto } from '#lib/api/index.ts';

declare global {
	namespace App {
		interface Locals {
			api: Api;
			user: WhoAmIDto | null;
		}
	}
}

export {};
