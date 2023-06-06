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
 * @remarks
 * We currently use this function to recalculate the position of the chat button
 * if/when the size of the viewport changes to prevent it from blocking parts of
 * the footer. That said, this function is abstract enough to be used for any
 * purpose. It's use of `Promises` is why it's included, though you may not ever
 * need this, in which case feel encouraged to delete this function and use
 * `_.debounce()` from `lodash` instead.
 *
 * @param fn - The debounced function called after the most recent delay.
 * @param delay - The debounce duration in milliseconds.
 *
 * @returns An async function which kicks off the debounce process when invoked.
 * This function returns a Promise, and may be used with `async`/`await`.
 */
export const debounce = <T>(
	fn: (...args: Array<unknown>) => T,
	delay: number,
) => {
	let timeoutId: NodeJS.Timeout;

	return async (...args: Array<unknown>) => {
		return new Promise<T>((resolve, reject) => {
			if (timeoutId) {
				clearTimeout(timeoutId);
			}

			timeoutId = setTimeout(() => {
				try {
					resolve(fn(...args) as T);
				} catch (err) {
					reject(err);
				}
			}, delay);
		});
	};
};
