import { isBoolean } from '@app/utils/functions/check/js/core/isBoolean';
import { isNonEmptyObject } from '@app/utils/functions/check/js/specialized/isNonEmptyObject';

/**
 * Determines how the table state should render based on whether or not specific
 * features are enabled.
 */
export interface TableStateFeatures {
	/**
	 * The table has a dropdown filter, allowing the user to filter data by their
	 * selection(s).
	 */
	readonly filterable: boolean;

	/**
	 * The table has a search bar enable for easy filtering.
	 */
	readonly searchable: boolean;

	/**
	 * The table data is split into multiple pages for a better user experience.
	 */
	readonly paginated: boolean;

	/**
	 * The table data loads as the user scrolls to the bottom of the page.
	 */
	readonly virtual: boolean;
}

/**
 * Checks that an `unknown` value is a map of {@link TableStateFeatures}.
 *
 * Requirements:
 *   - `value` must be a non-empty object.
 *   - `value.filterable` is required and must be a boolean.
 *   - `value.searchable` is required and must be a boolean.
 *   - `value.paginated` is required and must be a boolean.
 *   - `value.virtual` is required and must be a boolean.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a map of {@link TableStateFeatures}.
 */
export const isTableStateFeatures = (
	value: unknown,
): value is TableStateFeatures =>
	/**
	 * value
	 */
	isNonEmptyObject(value) &&
	/**
	 * value.filterable
	 */
	'filterable' in value &&
	isBoolean(value.filterable) &&
	/**
	 * value.searchable
	 */
	'searchable' in value &&
	isBoolean(value.searchable) &&
	/**
	 * value.paginated
	 */
	'paginated' in value &&
	isBoolean(value.paginated) &&
	/**
	 * value.virtual
	 */
	'virtual' in value &&
	isBoolean(value.virtual);
