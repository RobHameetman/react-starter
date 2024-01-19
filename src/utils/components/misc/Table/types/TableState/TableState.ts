import { isBoolean } from '@app/utils/functions/check/js/core/isBoolean';
import { isNumberGreaterThanZero } from '@app/utils/functions/check/js/specialized/isNumberGreaterThanZero';
import { TableCache, isTableCache } from '../TableCache';
import { TableStateData, isTableStateData } from '../TableStateData';
import {
	TableStateFeatures,
	isTableStateFeatures,
} from '../TableStateFeatures';
import { TableStateFilter, isTableStateFilter } from '../TableStateFilter';
import { TableStateSort, isTableStateSort } from '../TableStateSort';

/**
 * A model for table state management and caching.
 */
export interface TableState extends TableCache {
	/**
	 * The number of columns in the table.
	 */
	readonly columns: number;

	/**
	 * The data models for the current state.
	 */
	readonly data: TableStateData;

	/**
	 * The table features currently enabled.
	 */
	readonly features: TableStateFeatures;

	/**
	 * The current loading state for the table.
	 */
	readonly loading: boolean;

	/**
	 * The table features currently enabled.
	 */
	readonly filter: TableStateFilter;

	/**
	 * The table features currently enabled.
	 */
	readonly sort: TableStateSort;
}

/**
 * Checks that an `unknown` value is a {@link TableState}.
 *
 * Requirements:
 *   - `value` must be a valid {@link TableCache}.
 *   - `value.columns` is required and must be a number greater than zero.
 *   - `value.data` is required and must be a valid {@link TableStateData}.
 *   - `value.features` is required and must be a valid {@link TableStateFeatures}.
 *   - `value.filter` is required and must be a valid {@link TableStateFilter}.
 *   - `value.loading` is required and must be a boolean.
 *   - `value.sort` is required and must be a valid {@link TableStateSort}.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link TableState}.
 */
export const isTableState = (value: unknown): value is TableState =>
	/**
	 * value
	 */
	isTableCache(value) &&
	/**
	 * value.columns
	 */
	'columns' in value &&
	isNumberGreaterThanZero(value.columns) &&
	/**
	 * value.data
	 */
	'data' in value &&
	isTableStateData(value.data) &&
	/**
	 * value.features
	 */
	'features' in value &&
	isTableStateFeatures(value.features) &&
	/**
	 * value.filter
	 */
	'filter' in value &&
	isTableStateFilter(value.filter) &&
	/**
	 * value.loading
	 */
	'loading' in value &&
	isBoolean(value.loading) &&
	/**
	 * value.sort
	 */
	'sort' in value &&
	isTableStateSort(value.sort);
