import { History } from 'history';
import { APP_BASENAME } from '../../../nav';

type AppState = Record<string, unknown>;

/**
 * Create the callback used to handle Auth0 redirects in the browser. This
 * function is curried because we receive the {@link History} instance as an
 * argument of `<AppProvider />` and not ahead of time.
 *
 * @param history - The browser {@link History} instance used to manage routing.
 *
 * @returns The callback used to handled Auth0 redirects provided to
 * `<AuthProvider />`.
 */
export const createAuthRedirectCallback =
	(history: History) =>
	/**
	 * The callback used to handle Auth0 redirects in the browser.
	 *
	 * @param appState - An object used to deliver the target URL as application
	 * state whenever the route changes.
	 */
	(appState: AppState = {}) => {
		if (
			appState?.targetUrl &&
			appState.targetUrl !== history.location.pathname
		) {
			/* @ts-expect-error - Property 'replace' does not exist on type '{}'. */
			const target = appState.targetUrl?.replace(APP_BASENAME, '');

			history.push(target);
		}
	};
