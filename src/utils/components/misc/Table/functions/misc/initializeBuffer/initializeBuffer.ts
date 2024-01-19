import { TableState } from '../../../types';

/**
 * A description of `initializeBuffer()`.
 *
 * @param firstParam - A brief description of firstParam.
 * @param secondParam - [Optional] A brief description of secondParam.
 * @defaultValue - `0`
 *
 * @returns A null value.
 */
export const initializeBuffer = (state: TableState): TableState => {
	const { data, sort: _sort } = state;
	const { buffer, initialData } = data;

	if (buffer === null) {
		return {
			...state,
			data: {
				...state.data,
				buffer: initialData,
			},
		};
	}

	return state;
};
