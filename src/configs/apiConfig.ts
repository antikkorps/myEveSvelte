const PUBLIC_BASE_URL = import.meta.env.VITE_PUBLIC_BASE_URL;
const PUBLIC_API_PREFIX = import.meta.env.VITE_PUBLIC_API_PREFIX;

const apiConfig = {
	// API configuration properties here
	loginUrl: `${PUBLIC_BASE_URL}${PUBLIC_API_PREFIX}/auth/login`
};

export default apiConfig;
