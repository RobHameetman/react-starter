import {
	ChangeEventHandler,
	Dispatch,
	SetStateAction,
	useCallback,
} from 'react';
import {
	addFilter,
	enableFiltering,
	render,
	renderLoading,
	resetFilters,
	setOnFilter,
} from '../../functions';
import { OnFilterFn, TableState } from '../../types';
import noop from '@/utils/functions/misc/noop';

export const useFilterBy = (
	setState = noop as Dispatch<SetStateAction<TableState>>,
) => {
	const handleChangeFilter = useCallback<ChangeEventHandler<HTMLInputElement>>(
		(e) =>
			setState((state) =>
				render(addFilter(e.target.value, resetFilters(state))),
			),
		[setState],
	);

	const setFilterable = useCallback(
		() => setState((state) => renderLoading(enableFiltering(state))),
		[setState],
	);

	const setOnFilterFn = useCallback(
		(onFilter: OnFilterFn) =>
			setState((state) => renderLoading(setOnFilter(onFilter, state))),
		[setState],
	);

	return {
		handleChangeFilter,
		setFilterable,
		setOnFilterFn,
	} as const;
};
