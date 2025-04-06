import { isNonEmptyObject } from '@/utils/functions/check/js/specialized/isNonEmptyObject';
import { isNonEmptyString } from '@/utils/functions/check/js/specialized/isNonEmptyString';
import { TableCacheFilter, isTableCacheFilter } from '../TableCacheFilter';
import {
	TableCachePagination,
	isTableCachePagination,
} from '../TableCachePagination';
import { TableCacheSort, isTableCacheSort } from '../TableCacheSort';

/**
 * A cached object used for persistent table state.
 */
export interface TableCache extends Record<string, unknown> {
	/**
	 * The total number of row items in the table.
	 */
	readonly filter: TableCacheFilter;

	/**
	 * The name of the current table.
	 */
	readonly name: string;

	/**
	 * The page currently selected.
	 */
	readonly sort: TableCacheSort;

	/**
	 * The total number of pages in the table after pagination.
	 */
	readonly pagination: TableCachePagination;
}

/**
 * Checks that an `unknown` value is a {@link TableCache}.
 *
 * Requirements:
 *   - `value` must be a non-empty object.
 *   - `value.filter` is required and must be a valid {@link TableCacheFilter}.
 *   - `value.sort` is required and must be a valid {@link TableCacheSort}.
 *   - `value.pagination` is required and must be a valid {@link TableCachePagination}.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link TableCache}.
 */
export const isTableCache = (value: unknown): value is TableCache =>
	/**
	 * value
	 */
	isNonEmptyObject(value) &&
	/**
	 * value.filter
	 */
	'filter' in value &&
	isTableCacheFilter(value.filter) &&
	/**
	 * value.name
	 */
	'name' in value &&
	isNonEmptyString(value.name) &&
	/**
	 * value.sort
	 */
	'sort' in value &&
	isTableCacheSort(value.sort) &&
	/**
	 * value.pagination
	 */
	'pagination' in value &&
	isTableCachePagination(value.pagination);
