import { SortOrder, SortType } from '../../enums';
import {
	TableCachePagination,
	TableState,
	TableStateData,
	TableStateFeatures,
	TableStateFilter,
	TableStateSort,
} from '../../types';

type TableStates = Readonly<Record<string, TableState>>;

type PartialData = Partial<TableStateData>;
type PartialFeatures = Partial<TableStateFeatures>;
type PartialFilter = Partial<TableStateFilter>;
type PartialSort = Partial<TableStateSort>;
type PartialPagination = Partial<TableCachePagination>;

/**
 * The collection of table states in memory. This object is considered private
 * and should never be imported/exported directly.
 */
let __TABLES__: TableStates = Object.freeze({});

/**
 * Retrieve the current table state.
 *
 * @returns The state for the table with the provided name.
 */
export const initializeTableState = (
	name: string,
	data: ReadonlyArray<unknown>,
	initialState?: Record<string, unknown>,
): TableState => {
	const currentState = getTableState(name);

	if (currentState === undefined) {
		const state = {
			loading: false,
			...initialState,
			columns: 0,
			data: {
				buffer: null,
				displayedData: [],
				initialData: [...data],
				maxRows: null,
				paginatedData: null,
				...(((initialState || {}).data || {}) as PartialData),
			},
			features: {
				filterable: false,
				paginated: false,
				searchable: false,
				virtual: false,
				...(((initialState || {}).features || {}) as PartialFeatures),
			},
			filter: {
				filterBy: [],
				searchBy: '',
				onFilter: null,
				searchAgainst: null,
				...(((initialState || {}).filter || {}) as PartialFilter),
			},
			name,
			sort: {
				active: SortType.NONE,
				direction: SortOrder.ASC,
				options: {},
				...(((initialState || {}).sort || {}) as PartialSort),
			},
			pagination: {
				count: 0,
				currentPage: 1,
				pageSize: 10,
				...(((initialState || {}).pagination || {}) as PartialPagination),
			},
		};

		setTableState(name, state);

		return state;
	}

	return currentState;
};

/**
 * Retrieve the current table state.
 *
 * @returns The state for the table with the provided name.
 */
export const getTableState = (name: string): TableState | undefined =>
	__TABLES__[name];

/**
 * Update the collection of table states in memory.
 */
export const setTableState = (name: string, state: TableState): void => {
	if (state !== __TABLES__[name]) {
		__TABLES__ = Object.freeze({
			...__TABLES__,
			[name]: state,
		});
	}
};

/**
 * Clear all table states in memory.
 */
export const clearTableStates = (): void => {
	__TABLES__ = Object.freeze({});
};
