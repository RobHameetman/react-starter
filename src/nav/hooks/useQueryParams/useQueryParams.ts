/**
 * Get the query params of the current url.
 *
 * @returns A set of key/value pairs for the query params.
 */
export const useQueryParams = () =>
	Object.fromEntries(new URLSearchParams(window.location.search));

export default useQueryParams;
