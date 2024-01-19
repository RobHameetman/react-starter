import { TableState } from '../../../types';

/**
 * A description of `applyMaxRows()`.
 *
 * @param firstParam - A brief description of firstParam.
 * @param secondParam - [Optional] A brief description of secondParam.
 * @defaultValue - `0`
 *
 * @returns An updated table state.
 */
export const applyMaxRows = (state: TableState): TableState => {
	const { data, sort: _sort } = state;
	const { buffer, maxRows } = data;

	if (buffer !== null && maxRows !== null && maxRows > 0) {
		return {
			...state,
			data: {
				...state.data,
				buffer: buffer.slice(0, maxRows),
			},
		};
	}

	return state;
};
