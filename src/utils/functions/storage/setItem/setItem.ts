/**
 * Set the given encrypted value in `LocalStorage` for the given encrypted key.
 *
 * @param key - The key used to store the value in `LocalStorage`.
 * @param value - The value to be stored in `LocalStorage`.
 */
export const setItem = (key: string, value: string) =>
	localStorage.setItem(btoa(String(key)), btoa(value));
