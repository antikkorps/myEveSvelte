import type { Actions } from './$types';

async function isUserAuthenticated(event) {
	// TODO: implémenter la logique d'authentification
	return false;
}

export const actions: Actions = {
	default: async (event) => {
		// TODO log the user in
		if (await isUserAuthenticated(event)) {
			return {
				status: 200,
				headers: {
					'content-type': 'application/json'
				},
				body: JSON.stringify({ message: 'Logged in' })
			};
		}
		return {
			status: 401,
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify({ message: 'Invalid credentials' })
		};
	}
};
