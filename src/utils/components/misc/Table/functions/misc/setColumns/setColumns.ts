import { TableState } from '../../../types';

/**
 * A description of `setColumns()`.
 *
 * @param firstParam - A brief description of firstParam.
 * @param secondParam - [Optional] A brief description of secondParam.
 * @defaultValue - `0`
 *
 * @returns A null value.
 */
export const setColumns = (columns: number, state: TableState): TableState => {
	const { data, sort: _sort } = state;
	const { buffer } = data;

	if (buffer !== null) {
		return {
			...state,
			columns,
		};
	}

	return state;
};
