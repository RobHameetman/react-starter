import {
	ChangeEvent,
	ChangeEventHandler,
	Dispatch,
	SetStateAction,
	useCallback,
} from 'react';
import {
	enableSearching,
	render,
	renderLoading,
	setSearchAgainst,
	updateSearchInput,
} from '../../functions';
import { SearchAgainstFn, TableState } from '../../types';
import { Hook } from '../../../../../types';

export interface UseSearchResult {
	readonly setSearchable: () => void;
	readonly handleChangeSearchInput: ChangeEventHandler<HTMLInputElement>;
	readonly setSearchAgainstFn: (searchAgainst: SearchAgainstFn) => void;
}

export const useSearch: Hook<
	UseSearchResult,
	Dispatch<SetStateAction<TableState>>
> = (setState = () => {}) => {
	const handleChangeSearchInput = useCallback(
		(e: ChangeEvent<HTMLInputElement>) =>
			setState((state) => render(updateSearchInput(e.target.value, state))),
		[setState],
	);

	const setSearchable = useCallback(
		() => setState((state) => renderLoading(enableSearching(state))),
		[setState],
	);

	const setSearchAgainstFn = useCallback(
		(searchAgainst: SearchAgainstFn) =>
			setState((state) =>
				renderLoading(setSearchAgainst(searchAgainst, state)),
			),
		[setState],
	);

	return {
		setSearchable,
		handleChangeSearchInput,
		setSearchAgainstFn,
	};
};
