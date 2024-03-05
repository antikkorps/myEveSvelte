import apiConfig from '../configs/apiConfig';
import { parse } from 'cookie';
import { goto } from '$app/navigation';

// Function to check if the user is authenticated
export function isAuthenticated(request: Request): boolean {
	const cookies = parse(request.headers.get('cookie') || '');
	const token = cookies['token'];
	return token !== undefined;
}

// Function to handle user login
export async function handleLogin(username: string, password: string): Promise<boolean> {
	const response = await fetch(apiConfig.loginUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ username, password })
	});

	if (response.ok) {
		const data = await response.json();
		if (data.token) {
			// Set the session cookie
			document.cookie = `session=${data.token}; path=/; HttpOnly`;
			goto('/dashboard');
			return true;
		}
	}

	return false;
}

// Function to handle user logout
export async function logout(): Promise<void> {
	const cookie = '';
	document.cookie = cookie;
}
