/**
 * Remove the value in `LocalStorage` for the given encrypted key.
 *
 * @param key - The key used to store the value in `LocalStorage`.
 */
export const removeItem = (key: string) =>
	localStorage.removeItem(btoa(String(key)));
