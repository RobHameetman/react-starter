import {
	$FC,
	Dispatch,
	SetStateAction,
	useCallback,
	useLayoutEffect,
} from 'react';
import { TableContext } from '../TableContext';
import { isLoading, render, renderLoading, setColumns } from '../../functions';
import { usePagination, useSortBy, useSearch, useFilterBy } from '../../hooks';
import { TableState } from '../../types';

export interface TableProviderProps {
	/**
	 * [Optional] Pass in an array of initial data to be filtered,
	 * sorted, and paginated.
	 * @defaultValue - `null`
	 */
	readonly initialData?: ReadonlyArray<unknown> | null;

	/**
	 * [Optional] A control prop used to direct loading state.
	 * @defaultValue - `true`
	 */
	readonly loading?: boolean;
	/**
	 * A table name used for caching.
	 */
	readonly name: string;

	/**
	 * @param state - The current table state.
	 */
	readonly state: TableState;

	/**
	 * @param setState - A function for setting the current table state.
	 */
	readonly setState: Dispatch<SetStateAction<TableState>>;
}

/**
 * `<TableProvider>` is wrapped around `<Table />` content to provide a shared
 * state to the entire table.
 */
export const TableProvider: $FC<TableProviderProps> = ({
	children,
	initialData = null,
	loading: _loading = true,
	name,
	state,
	setState,
}) => {
	const { handleChangeSearchInput, setSearchable, setSearchAgainstFn } =
		useSearch(setState);

	const { handleChangeFilter, setFilterable, setOnFilterFn } =
		useFilterBy(setState);

	const { handleChangeSortOrder, handleChangeSortType } = useSortBy(setState);

	const { handleChangePage, handleChangeRowsPerPage, setPaginated } =
		usePagination(setState);

	const setColumnCount = useCallback(
		(columns: number) =>
			setState((state) => renderLoading(setColumns(columns, state))),
		[setState],
	);

	useLayoutEffect(() => {
		const { data } = state;

		if (!isLoading(state)) {
			setState(
				render({
					...state,
					data: {
						...data,
						initialData: initialData ?? [],
					},
				}),
			);
		}
	}, [initialData, state.loading]);

	return (
		<TableContext.Provider
			value={{
				initialData,
				name,
				state,
				handleChangeFilter,
				handleChangePage,
				handleChangeRowsPerPage,
				handleChangeSearchInput,
				handleChangeSortOrder,
				handleChangeSortType,
				setColumnCount,
				setOnFilterFn,
				setSearchable,
				setSearchAgainstFn,
				setFilterable,
				setPaginated,
			}}
		>
			{children}
		</TableContext.Provider>
	);
};
