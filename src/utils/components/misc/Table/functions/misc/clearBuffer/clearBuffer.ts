import { TableState } from '../../../types';

/**
 * A description of `clearBuffer()`.
 *
 * @param firstParam - A brief description of firstParam.
 * @param secondParam - [Optional] A brief description of secondParam.
 * @defaultValue - `0`
 *
 * @returns A null value.
 */
export const clearBuffer = (state: TableState): TableState => {
	const { data, sort: _sort } = state;
	const { buffer } = data;

	if (buffer !== null) {
		return {
			...state,
			data: {
				...state.data,
				buffer: null,
				displayedData: buffer,
			},
		};
	}

	return state;
};
