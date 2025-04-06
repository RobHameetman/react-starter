import { isArray } from '@/utils/functions/check/js/core/isArray';

/**
 * Arrays of paginated table data which represent data per page. Each inner
 * array should have the same length which is equal to the page size (minus one
 * for zero-indexing.)
 */
export type PaginatedData = ReadonlyArray<ReadonlyArray<unknown>>;

/**
 * Checks that an `unknown` value is a set of {@link PaginatedData}.
 *
 * Requirements:
 *   - `value` must be an array of arrays.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a set of {@link PaginatedData}.
 */
export const isPaginatedData = (value: unknown): value is PaginatedData =>
	/**
	 * value
	 */
	isArray(value) && value.every((innerValue) => isArray(innerValue));
