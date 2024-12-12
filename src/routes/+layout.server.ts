// src/routes/+layout.server.js
export const load = async ({ request, resolve }) => {
	const response = await resolve(request);

	// Add X-Robots-Tag header
	response.headers.set('X-Robots-Tag', 'noindex, nofollow');

	return response;
};
