import { sort } from '../../sorting';
import { TableState } from '../../../types';

/**
 * A description of `renderSort()`.
 *
 * @param firstParam - A brief description of firstParam.
 * @param secondParam - [Optional] A brief description of secondParam.
 * @defaultValue - `0`
 *
 * @returns A null value.
 */
export const renderSort = (state: TableState): TableState => {
	const { data, sort: _sort } = state;
	const { buffer } = data;

	if (buffer !== null) {
		const { active, direction, options } = _sort;

		return {
			...state,
			data: {
				...state.data,
				buffer: sort(buffer, active, direction, options),
			},
		};
	}

	return state;
};
