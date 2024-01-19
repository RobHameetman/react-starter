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
import { Hook } from '../../../../../types';

export interface UseFilterByResult {
	readonly handleChangeFilter: ChangeEventHandler<HTMLSelectElement>;
	readonly setFilterable: () => void;
	readonly setOnFilterFn: (onFilter: OnFilterFn) => void;
}

export const useFilterBy: Hook<
	UseFilterByResult,
	Dispatch<SetStateAction<TableState>>
> = (setState = () => {}) => {
	const handleChangeFilter = useCallback(
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
	};
};
