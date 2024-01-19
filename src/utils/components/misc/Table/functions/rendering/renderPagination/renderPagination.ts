import flatten from 'lodash/flatten';
import { isPaginated, isVirtual, paginate } from '../../pagination/';
import { TableState } from '../../../types';

/**
 * A description of `renderPagination()`.
 *
 * @param firstParam - A brief description of firstParam.
 * @param secondParam - [Optional] A brief description of secondParam.
 * @defaultValue - `0`
 *
 * @returns A null value.
 */
export const renderPagination = (state: TableState): TableState => {
	if (isPaginated(state)) {
		const { data, pagination } = state;
		const { buffer } = data;

		if (buffer !== null) {
			const { currentPage, pageSize } = pagination;

			const paginatedData = paginate(buffer, pageSize);

			const renderedData = isVirtual(state)
				? flatten(paginatedData.slice(0, currentPage - 1))
				: paginatedData[currentPage - 1];

			return {
				...state,
				data: {
					...state.data,
					buffer: renderedData,
					paginatedData,
				},
				pagination: {
					...state.pagination,
					count: buffer.length,
				},
			};
		}
	}

	return state;
};
