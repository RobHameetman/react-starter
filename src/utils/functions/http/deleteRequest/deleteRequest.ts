import { Errors } from '@app/utils/types/Errors';
import { RequestInput, request as _request } from '../request';

/**
 * A type alias used to avoid line breaks on line 29.
 */
type Input<T, E = Error | Errors> = Omit<
	RequestInput<T, E>,
	'body' | 'method' | '_dependencies'
>;

/**
 * Functional dependencies used in the {@link deleteRequest()} function. This
 * object is provided in tests for mocking and spying.
 */
export interface DeleteRequestInputDependencies {
	/**
	 * [Optional] Make an HTTP request.
	 */
	readonly request?: typeof _request;
}

/**
 * An input object provided to {@link deleteRequest()} used for destructuring.
 *
 * @typeParam T - The data type returned in the response body on success.
 * @typeParam E - The error returned in the response body on fail.
 */
export interface DeleteRequestInput<T, E = Error | Errors> extends Input<T, E> {
	/**
	 * [Optional] Used in tests for mocking and spying.
	 * @defaultValue `{}`
	 */
	readonly _dependencies?: DeleteRequestInputDependencies;
}

/**
 * Makes an HTTP DELETE request.
 *
 * @typeParam T - The data type returned in the response body on success.
 * @typeParam E - The error returned in the response body on fail.
 *
 * @param input - A {@link DeleteRequestInput} object used for destructuring.
 *
 * @returns A Promise that resolves to the returned response.
 */
export const deleteRequest = async <T, E = Error | Errors>({
	_dependencies = {},
	...requestOptions
}: DeleteRequestInput<T, E>): Promise<T | E> => {
	const { request = _request } = _dependencies;

	return request<T, E>({
		...requestOptions,
		method: 'DELETE',
	});
};
