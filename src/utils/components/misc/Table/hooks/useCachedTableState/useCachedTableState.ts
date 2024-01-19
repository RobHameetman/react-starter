import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { cacheTableState, getCache, startLoading } from '../../functions';
import { initializeTableState, setTableState } from '../../state';
import { SortByOptions, TableState } from '../../types';

export interface UseCachedTableStateInput {
	readonly initialData: ReadonlyArray<unknown> | null;
	readonly max: number | null;
	readonly name: string;
	readonly sortOptions: SortByOptions | null;
}

export const useCachedTableState = ({
	initialData = null,
	max = null,
	name,
	sortOptions,
}: UseCachedTableStateInput): [
	TableState,
	Dispatch<SetStateAction<TableState>>,
] => {
	const cache = getCache(name);

	const [state, setState] = useState<TableState>(
		startLoading(
			initializeTableState(name, initialData ?? [], {
				...(cache || {}),
				data: {
					...(cache || {}).filter,
					maxRows: max,
				},
				sort: {
					...(cache || {}).sort,
					options: sortOptions,
				},
			}),
		),
	);

	useEffect(() => {
		setState((_state) => ({
			..._state,
			filter: {
				..._state.filter,
				searchBy: cache?.filter.searchBy || '',
			},
			name,
			pagination: {
				..._state.pagination,
				currentPage: cache?.pagination.currentPage || 1,
			},
		}));
		/* eslint-disable-next-line react-hooks/exhaustive-deps */
	}, [name]);

	useEffect(() => {
		setTableState(state.name, state);
		cacheTableState(state);
		/* eslint-disable-next-line react-hooks/exhaustive-deps */
	}, [state]);

	return [state, setState];
};
