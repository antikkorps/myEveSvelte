import { parse } from 'cookie';

export async function handle({ request, resolve }) {
	const cookies = parse(request.headers.get('cookie') || '');
	const token = cookies['token'];

	request.locals.token = token;

	const response = await resolve(request);

	return {
		...response,
		headers: {
			...response.headers,
			'set-cookie': `token=${token}; Path=/; HttpOnly`
		}
	};
}

export function getSession(request) {
	return {
		user: request.locals.token
			? { authenticated: true, token: request.locals.token }
			: { authenticated: false }
	};
}
