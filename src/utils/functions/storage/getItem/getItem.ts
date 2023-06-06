/**
 * Get the value in `LocalStorage` for the given encrypted key.
 *
 * @param key - The key used to store the value in `LocalStorage`.
 *
 * @returns The value for the given encrypted key or `undefined`.
 */
export const getItem = (key: string) => {
	const version = localStorage.getItem(btoa(String(key)));

	return version ? atob(version) : undefined;
};
