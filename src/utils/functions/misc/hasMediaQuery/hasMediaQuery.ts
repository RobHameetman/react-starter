/**
 * Checks if the current viewport matches a media query.
 *
 * @param query - The media query to match (e.g. `'(min-width: 768px)'`).
 *
 * @returns A boolean which is `true` if the media query matches or `false`.
 */
export const hasMediaQuery = (query: string) =>
	typeof window !== 'undefined' && window.matchMedia(query).matches;
