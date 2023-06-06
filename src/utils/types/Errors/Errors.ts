import isArray from 'lodash/isArray';

/**
 * A list of errors which may be returned from an HTTP request deceptively using
 * a 200 OK status code.
 *
 * @typeParam E - The type of error. Override this if a specific API has explicit
 * error types.
 */
export type Errors<E = Error> = ReadonlyArray<E>;

/**
 * A predicate function that determines if a value is an error.
 */
type ErrorPredicate = <E = Error>(value: unknown) => value is E;

/**
 * The default error predicate function which checks that the value is an
 * instance of {@link Error}.
 */
const DEFAULT_ERROR_PREDICATE: ErrorPredicate = <E = Error>(
	value: unknown,
): value is E => value instanceof Error;

/**
 * Checks that an `unknown` value are {@link Errors}.
 *
 * Requirements:
 *   - `value` must be an array of errors.
 *
 * @typeParam E - The type of error.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` are or are not {@link Errors}.
 */
export const areErrors = <E = Error>(
	value: unknown,
	isError: ErrorPredicate = DEFAULT_ERROR_PREDICATE,
): value is Errors<E> =>
	/**
	 * value
	 */
	isArray(value) && value.every(isError);
