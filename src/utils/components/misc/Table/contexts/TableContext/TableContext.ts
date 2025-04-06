import { ChangeEventHandler, createContext } from 'react';
import { isFunction } from '@/utils/functions/check/js/core/isFunction';
import { isNonEmptyObject } from '@/utils/functions/check/js/specialized/isNonEmptyObject';
import { isNonEmptyString } from '@/utils/functions/check/js/specialized/isNonEmptyString';
import { noop } from '@/utils/functions/misc/noop';
import { SortOrder, SortType } from '../../enums';
import {
	ChangePageHandler,
	ChangeRowsPerPageHandler,
	OnFilterFn,
	SearchAgainstFn,
	TableState,
	isTableState,
} from '../../types';

/**
 * The {@link TableContext} is a shared state for the `<Table />` coumpound
 * component. Each `<Table />` wraps its contents in a `<TableProvider />`.
 * Child components can access this state with the `useTable()` hook.
 */
export interface TableContext {
	/**
	 * [Optional] The number of columns in the table.
	 */
	readonly columnCount?: number;

	/**
	 * The initial data to populate the table with.
	 */
	readonly initialData: ReadonlyArray<unknown> | null;

	/**
	 * The name of the table. This is used to generate the `id` attribute for the
	 * `<Table />` component.
	 */
	readonly name: string;

	/**
	 * The current state of the table.
	 */
	readonly state: TableState;

	/**
	 * A callback triggered when the user changes the filter.
	 */
	readonly handleChangeFilter: ChangeEventHandler<{ value: unknown }>;

	/**
	 * A callback triggered when the user changes the page.
	 */
	readonly handleChangePage: ChangePageHandler;

	/**
	 * A callback triggered when the user changes the maximum number of rows per
	 * page.
	 */
	readonly handleChangeRowsPerPage: ChangeRowsPerPageHandler;

	/**
	 * A callback triggered when the user changes the search input.
	 */
	readonly handleChangeSearchInput: ChangeEventHandler<HTMLInputElement>;

	/**
	 * A callback triggered when the user changes the sort order.
	 */
	readonly handleChangeSortOrder: (sortOrder: SortOrder) => void;

	/**
	 * A callback triggered when the user changes the sort type.
	 */
	readonly handleChangeSortType: (sortType: SortType) => void;

	/**
	 * Sets the number of columns in the table.
	 */
	readonly setColumnCount: (columnCount: number) => void;

	/**
	 * Sets the table to be filterable.
	 */
	readonly setFilterable: () => void;

	/**
	 * Sets the `onFilter()` callback.
	 */
	readonly setOnFilterFn: (onFilter: OnFilterFn) => void;

	/**
	 * Sets the table to be searchable.
	 */
	readonly setSearchable: () => void;

	/**
	 * Sets the `searchAgainst()` callback.
	 */
	readonly setSearchAgainstFn: (searchAgainst: SearchAgainstFn) => void;

	/**
	 * Sets the table to be paginated.
	 */
	readonly setPaginated: (virtual?: boolean) => void;
}

/**
 * Initial {@link TableContext} state.
 */
export const INITIAL_TABLE_CONTEXT: TableContext = Object.freeze({
	/**
	 * Default value of {@link TableContext.initialData}.
	 */
	initialData: null,

	/**
	 * Default value of {@link TableContext.name}.
	 */
	name: '',

	/**
	 * Default value of {@link TableContext.state}.
	 */
	state: {} as TableState,

	/**
	 * Default value of {@link TableContext.handleChangeFilter}().
	 */
	handleChangeFilter: noop,

	/**
	 * Default value of {@link TableContext.handleChangePage}().
	 */
	handleChangePage: noop,

	/**
	 * Default value of {@link TableContext.handleChangeRowsPerPage}().
	 */
	handleChangeRowsPerPage: noop,

	/**
	 * Default value of {@link TableContext.handleChangeSearchInput}().
	 */
	handleChangeSearchInput: noop,

	/**
	 * Default value of {@link TableContext.handleChangeSortOrder}().
	 */
	handleChangeSortOrder: noop,

	/**
	 * Default value of {@link TableContext.handleChangeSortType}().
	 */
	handleChangeSortType: noop,

	/**
	 * Default value of {@link TableContext.setColumnCount}().
	 */
	setColumnCount: noop,

	/**
	 * Default value of {@link TableContext.setFilterable}().
	 */
	setFilterable: noop,

	/**
	 * Default value of {@link TableContext.setOnFilterFn}().
	 */
	setOnFilterFn: noop,

	/**
	 * Default value of {@link TableContext.setPaginated}().
	 */
	setPaginated: noop,

	/**
	 * Default value of {@link TableContext.setSearchable}().
	 */
	setSearchable: noop,

	/**
	 * Default value of {@link TableContext.setSearchAgainstFn}().
	 */
	setSearchAgainstFn: noop,
});

/**
 * Creates our `TableContext` as accessible React components.
 */
export const TableContext = createContext<TableContext>({
	...INITIAL_TABLE_CONTEXT,
});

/**
 * Checks that an `unknown` value is a `TableContext`.
 *
 * Requirements:
 *   - `value` must be a non-empty object.
 *   - `value.initialData` is required and must be an array or `null`.
 *   - `value.name` is required and must be non-empty string.
 *   - `value.state` is required and must be a valid `TableState`.
 *   - `value.handleChangeFilter()` is required and must be a function.
 *   - `value.handleChangePage()` is required and must be a function.
 *   - `value.handleChangeRowsPerPage()` is required and must be a function.
 *   - `value.handleChangeSearchInput()` is required and must be a function.
 *   - `value.handleChangeSortOrder()` is required and must be a function.
 *   - `value.handleChangeSortType()` is required and must be a function.
 *   - `value.setColumnCount()` is required and must be a function.
 *   - `value.setFilterable()` is required and must be a function.
 *   - `value.setOnFilterFn()` is required and must be a function.
 *   - `value.setPaginated()` is required and must be a function.
 *   - `value.setSearchable()` is required and must be a function.
 *   - `value.setSearchAgainstFn()` is required and must be a function.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not an `TableContext`.
 */
export const isTableContext = (value: unknown): value is TableContext =>
	/**
	 * value
	 */
	isNonEmptyObject(value) &&
	/**
	 * value.initialData
	 */
	'initialData' in value &&
	(Array.isArray(value.initialData) || value.initialData === null) &&
	/**
	 * value.name
	 */
	'name' in value &&
	isNonEmptyString(value.name) &&
	/**
	 * value.state
	 */
	'state' in value &&
	isTableState(value.state) &&
	/**
	 * value.handleChangeFilter()
	 */
	'handleChangeFilter' in value &&
	isFunction(value.handleChangeFilter) &&
	/**
	 * value.handleChangePage()
	 */
	'handleChangePage' in value &&
	isFunction(value.handleChangePage) &&
	/**
	 * value.handleChangeRowsPerPage()
	 */
	'handleChangeRowsPerPage' in value &&
	isFunction(value.handleChangeRowsPerPage) &&
	/**
	 * value.handleChangeSearchInput()
	 */
	'handleChangeSearchInput' in value &&
	isFunction(value.handleChangeSearchInput) &&
	/**
	 * value.handleChangeSortOrder()
	 */
	'handleChangeSortOrder' in value &&
	isFunction(value.handleChangeSortOrder) &&
	/**
	 * value.handleChangeSortType()
	 */
	'handleChangeSortType' in value &&
	isFunction(value.handleChangeSortType) &&
	/**
	 * value.setColumnCount()
	 */
	'setColumnCount' in value &&
	isFunction(value.setColumnCount) &&
	/**
	 * value.setFilterable()
	 */
	'setFilterable' in value &&
	isFunction(value.setFilterable) &&
	/**
	 * value.setOnFilterFn()
	 */
	'setOnFilterFn' in value &&
	isFunction(value.setOnFilterFn) &&
	/**
	 * value.setPaginated()
	 */
	'setPaginated' in value &&
	isFunction(value.setPaginated) &&
	/**
	 * value.setSearchable()
	 */
	'setSearchable' in value &&
	isFunction(value.setSearchable) &&
	/**
	 * value.setSearchAgainstFn()
	 */
	'setSearchAgainstFn' in value &&
	isFunction(value.setSearchAgainstFn);
