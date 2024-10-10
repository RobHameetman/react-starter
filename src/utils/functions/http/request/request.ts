import { isObject } from '@/utils/functions/check/js/core/isObject';
import { noop } from '@/utils/functions/misc/noop';
import { Errors, areErrors } from '@/utils/types/misc/Errors';

/**
 * A type alias used to avoid line breaks on line 27.
 */
type RequestOptions = Partial<Omit<RequestInit, 'body' | 'text' | 'url'>>;

/**
 * Functional dependencies used in the {@link request()} function. This object
 * is provided in tests for mocking and spying.
 */
export interface RequestInputDependencies {
	/**
	 * [Optional] Make an HTTP request.
	 */
	readonly fetch?: typeof window.fetch;
}

/**
 * An input object provided to {@link request()} used for destructuring.
 *
 * @typeParam T - The data type returned in the response body on success.
 * @typeParam E - The error returned in the response body on fail.
 */
export interface RequestInput<T, E = Error | Errors> extends RequestOptions {
	/**
	 * The URL or API endpoint to request data from or send data to. If the value
	 * is an API endpoint, it should begin with '/'.
	 */
	readonly at: string;
	/**
	 * [Optional] The body of the request which will be sent to the server.
	 */
	readonly body?: Record<string, unknown> | BodyInit;
	/**
	 * [Optional] An object of query parameters to include in the request URL.
	 * @defaultValue - `{}`
	 */
	readonly queryParams?: Record<string, string>;
	/**
	 * [Optional] Specify whether or not the response will be text instead of JSON.
	 * @defaultValue - `false`
	 */
	readonly text?: boolean;
	/**
	 * [Optional] A callback function to execute when the request fails.
	 * @defaultValue - A no-op function.
	 */
	readonly onError?: (err: E) => void;
	/**
	 * [Optional] A callback function to execute when the request succeeds.
	 * @defaultValue - A no-op function.
	 */
	readonly onSuccess?: (data: T) => void;
	/**
	 * [Optional] Used in tests for mocking and spying.
	 * @defaultValue - `{}`
	 */
	readonly _dependencies?: RequestInputDependencies;
}

/**
 * Make an HTTP request.
 *
 * @typeParam T - The data type returned in the response body on success.
 * @typeParam E - The error returned in the response body on fail.
 *
 * @param input - A {@link RequestInput} object containing the request input data.
 *
 * @returns A Promise that resolves to the returned response.
 */
export const request = async <T, E = Error | Errors>({
	at,
	body,
	text = false,
	queryParams = {},
	onError = noop,
	onSuccess = noop,
	_dependencies = {},
	...requestOptions
}: RequestInput<T, E>): Promise<T | E> => {
	try {
		const { fetch = window.fetch } = _dependencies;

		/* Construct the URL for the request, including any query parameters */
		const isEndpoint = at.startsWith('/');
		let target = at;

		if (isEndpoint) {
			let backendEnv = process.env.APP_BACKEND_SERVICE || '';

			backendEnv = backendEnv.endsWith('/')
				? backendEnv.slice(0, -1)
				: backendEnv;

			target = `${backendEnv}${at}`;
		}

		target = /^http(s)?:\/\//.test(target) ? target : `https://${target}`;

		const url = new URL(target);

		if (queryParams) {
			Object.entries(queryParams).forEach(([key, value]) =>
				url.searchParams.set(key, value),
			);
		}

		/* Make the request with the fetch API */
		const response = await fetch(url.toString(), {
			...requestOptions,
			headers: {
				...(requestOptions.headers || {}),
				Origin: location.origin,
				Accept: text ? 'text/html' : 'application/json',
			},
			mode: isEndpoint ? 'same-origin' : 'cors',
			body: body ? JSON.stringify(body) : null,
		});

		/* Reject any 4XX or 5XX status codes */
		if (!response.ok) {
			throw new Error(response.statusText);
		}

		/* Parse the response */
		const data = (text ? await response.text() : await response.json()) as T;

		/**
		 * Handle any errors from the server which may have slipped through with a
		 * 200 status code.
		 */
		const hasError = isObject(data) && 'error' in data && Boolean(data.error);

		const hasErrors =
			isObject(data) &&
			'errors' in data &&
			areErrors<E>(data.errors) &&
			data.errors.length;

		if (hasError) {
			throw data.error;
		}

		if (hasErrors) {
			throw data.errors;
		}

		/* Return the response data */
		onSuccess(data);

		return Promise.resolve(data);
	} catch (err: unknown) {
		/* Return the error(s) */
		onError(err as E);

		return Promise.reject<E>(err);
	}
};
