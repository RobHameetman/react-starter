import { isArray } from '@app/utils/functions/check/js/core/isArray';
import { isNonEmptyObject } from '@app/utils/functions/check/js/specialized/isNonEmptyObject';

/**
 * An interface which describes any object which has data contained in a `data`
 * property as an immutable array or `null`. The nullability of this property
 * makes it easier to determine whether or not the data has been loaded.
 */
export interface HasData extends Readonly<Record<string, unknown>> {
	/**
	 * The data contained in the object.
	 */
	readonly data: ReadonlyArray<unknown> | null;
}

/**
 * Checks that an `unknown` value is a `HasData`.
 *
 * Requirements:
 *   - `value` must be a non-empty object.
 *   - `value.data` is required and must be an array or `null`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not an `HasData`.
 */
export const isHasData = (value: unknown): value is HasData =>
	/**
	 * value
	 */
	isNonEmptyObject(value) &&
	/**
	 * value.data
	 */
	'data' in value &&
	(isArray(value.data) || value.data === null);
