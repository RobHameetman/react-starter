import { isObject } from '@app/utils/functions/check/js/core/isObject';
import { isString } from '@app/utils/functions/check/js/core/isString';

/**
 * @TODO
 */
export interface User {
	/**
	 * The user's email address.
	 */
	readonly email: string;

	/**
	 * Determines whether the user has confirmed their account via email.
	 */
	readonly verified: boolean;
}

/**
 * Checks that an `unknown` value is a {@link User}.
 *
 * Requirements:
 *   - `value` must be an object.
 *   - `value.optional` is optional and must be a string if provided.
 *   - `value.verified` is required and must be a boolean.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link User}.
 */
export const isUser = (value: unknown): value is User => {
	return (
		/**
		 * value
		 */
		isObject(value) &&
		/**
		 * value.optional
		 */
		('optional' in value ? isString(value.optional) : true) &&
		/**
		 * value.required
		 */
		'required' in value &&
		isString(value.required) &&
		/**
		 * value.method()
		 */
		'method' in value &&
		typeof value.method === 'function' &&
		isString(value.method())
	);
};
