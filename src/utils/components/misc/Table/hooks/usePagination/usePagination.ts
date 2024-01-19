import {
	ChangeEvent,
	Dispatch,
	MouseEvent,
	SetStateAction,
	useCallback,
} from 'react';
import {
	enablePagination,
	goToPage,
	render,
	renderLoading,
	setPageSize,
} from '../../functions';
import {
	ChangePageHandler,
	ChangeRowsPerPageHandler,
	TableState,
} from '../../types';
import { Hook } from '../../../../../types';

export interface UsePaginationResult {
	readonly handleChangeRowsPerPage: ChangeRowsPerPageHandler;
	readonly handleChangePage: ChangePageHandler;
	readonly setPaginated: (virtual?: boolean) => void;
}

export const usePagination: Hook<
	UsePaginationResult,
	Dispatch<SetStateAction<TableState>>
> = (setState = () => {}) => {
	const handleChangePage = useCallback(
		(_: MouseEvent<HTMLButtonElement> | null, page: number) =>
			setState((state) => render(goToPage(page + 1, state))),
		[setState],
	);

	const handleChangeRowsPerPage = useCallback(
		(e: ChangeEvent<HTMLInputElement>) =>
			setState((state) =>
				render(goToPage(1, setPageSize(Number(e.target.value), state))),
			),
		[setState],
	);

	const setPaginated = useCallback(
		(virtual = false) =>
			setState((state) => renderLoading(enablePagination(state, virtual))),
		[setState],
	);

	return {
		handleChangePage,
		handleChangeRowsPerPage,
		setPaginated,
	};
};
