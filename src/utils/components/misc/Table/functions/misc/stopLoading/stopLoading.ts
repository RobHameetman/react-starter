import { TableState } from '../../../types';

/**
 * A description of `stopLoading()`.
 *
 * @param firstParam - A brief description of firstParam.
 * @param secondParam - [Optional] A brief description of secondParam.
 * @defaultValue - `0`
 *
 * @returns A null value.
 */
export const stopLoading = (state: TableState): TableState => {
	const { loading } = state;

	if (loading) {
		return {
			...state,
			loading: false,
		};
	}

	return state;
};
