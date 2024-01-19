import { isArray } from '@app/utils/functions/check/js/core/isArray';
import { isNonEmptyObject } from '@app/utils/functions/check/js/specialized/isNonEmptyObject';
import { isNumberGreaterThanZero } from '@app/utils/functions/check/js/specialized/isNumberGreaterThanZero';
import { PaginatedData, isPaginatedData } from '../PaginatedData';

/**
 * A model for table state management.
 */
export interface TableStateData {
	/**
	 * The data currently being rendered.
	 */
	readonly buffer: ReadonlyArray<unknown> | null;

	/**
	 * The data currently displayed after being rendered.
	 */
	readonly displayedData: ReadonlyArray<unknown>;

	/**
	 * The initial set of data before rendering occurred.
	 */
	readonly initialData: ReadonlyArray<unknown>;

	/**
	 * The maximum number of items allowed for displayed data.
	 */
	readonly maxRows: number | null;

	/**
	 * The paginated set of data if pagination is enabled.
	 */
	readonly paginatedData: PaginatedData | null;
}

/**
 * Checks that an `unknown` value is {@link TableStateData}.
 *
 * Requirements:
 *   - `value` must be a non-empty object.
 *   - `value.displayedData` is required and must be an array.
 *   - `value.initialData` is required and must be an array.
 *   - `value.maxRows` is required and must be a number greater than zero or `null`.
 *   - `value.paginatedData` is required and must be a valid {@link PaginatedData} or `null`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not {@link TableStateData}.
 */
export const isTableStateData = (value: unknown): value is TableStateData =>
	/**
	 * value
	 */
	isNonEmptyObject(value) &&
	/**
	 * value.buffer
	 */
	'buffer' in value &&
	(isArray(value.buffer) || value.buffer === null) &&
	/**
	 * value.displayedData
	 */
	'displayedData' in value &&
	isArray(value.displayedData) &&
	/**
	 * value.initialData
	 */
	'initialData' in value &&
	isArray(value.initialData) &&
	/**
	 * value.maxRows
	 */
	'maxRows' in value &&
	(isNumberGreaterThanZero(value.maxRows) || value.maxRows === null) &&
	/**
	 * value.paginatedData
	 */
	'paginatedData' in value &&
	(isPaginatedData(value.paginatedData) || value.paginatedData === null);
