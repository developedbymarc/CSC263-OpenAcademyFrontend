import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
	API_BASE_URL: {
		description: 'Base URL of the OpenAcademy backend',
		schema: (value) => value ?? 'https://localhost:7034'
	}
});
