/**
 * An async debounce function which runs a function once after a specific delay.
 * This delay is reset every time the function is invoked. E.g. if you have a
 * delay of 300ms, and your function is invoked again after 200ms, the call will
 * occur once after 500ms. Debounce functions are great for event-driven systems
 * where a discrete user event might be spread across multiple browser events,
 * such as sending an API request for a list of suggested dropdown items as the
 * user types in a form input field, where a debounce can help improve
 * performance by waiting until just after the user is done typing to make one
 * meaningful request instead of making a new, mostly redundant request after
 * every key press.
 *
 * @param fn - The debounced function called after the most recent delay.
 * @param delay - The debounce duration in milliseconds.
 *
 * @returns An async function which kicks off the debounce process when invoked.
 * This function returns a Promise, and may be used with `async`/`await`.
 */
export const debounce = <T, U>(fn: (...args: Array<T>) => U, delay: number) => {
	let timeoutId: NodeJS.Timeout;

	return async (...args: Array<T>) => {
		return new Promise<U>((resolve, reject) => {
			if (timeoutId) {
				clearTimeout(timeoutId);
			}

			timeoutId = setTimeout(() => {
				try {
					resolve(fn(...args) as U);
				} catch (err) {
					reject(err);
				}
			}, delay);
		});
	};
};
