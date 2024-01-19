import { Dispatch, SetStateAction, useCallback } from 'react';
import { SortOrder, SortType } from '../../enums';
import { changeSortOrder, changeSortType, render } from '../../functions';
import { TableState } from '../../types';
import { Hook } from '../../../../../types';

export interface UseSortByResult {
	readonly handleChangeSortOrder: (sortOrder: SortOrder) => void;
	readonly handleChangeSortType: (sortType: SortType) => void;
}

export type SortOrderKeys = {
	readonly [T in SortType]?: string;
};

export const useSortBy: Hook<
	UseSortByResult,
	Dispatch<SetStateAction<TableState>>
> = (setState = () => {}) => {
	const handleChangeSortOrder = useCallback(
		(sortOrder: SortOrder) =>
			setState((state) => render(changeSortOrder(sortOrder, state))),
		[setState],
	);

	const handleChangeSortType = useCallback(
		(sortType: SortType) =>
			setState((state) => render(changeSortType(sortType, state))),
		[setState],
	);

	return {
		handleChangeSortOrder,
		handleChangeSortType,
	};
};
