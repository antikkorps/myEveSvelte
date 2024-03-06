import apiConfig from '../configs/apiConfig';
import { goto } from '$app/navigation';

// Function to check if the user is authenticated
export function isAuthenticated(token: string): boolean {
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
			goto('/dashboard');
			return data.token;
		}
	}

	return false;
}

// Function to handle user logout
export async function logout(): Promise<void> {
	document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
}
