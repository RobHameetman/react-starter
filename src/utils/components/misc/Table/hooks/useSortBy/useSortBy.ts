import { Dispatch, SetStateAction, useCallback } from 'react';
import { SortOrder, SortType } from '../../enums';
import { changeSortOrder, changeSortType, render } from '../../functions';
import { TableState } from '../../types';
import { noop } from '@/utils/functions/misc/noop';

export type SortOrderKeys = {
	readonly [T in SortType]?: string;
};

export const useSortBy = (setState = noop as Dispatch<SetStateAction<TableState>>) => {
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
