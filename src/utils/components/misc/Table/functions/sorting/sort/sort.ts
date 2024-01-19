import orderBy from 'lodash/orderBy';
import { SortOrder, SortType } from '../../../enums';
import { SortByOptions } from '../../../types';

/**
 * A description of `sort()`.
 *
 * @param firstParam - A brief description of firstParam.
 * @param secondParam - [Optional] A brief description of secondParam.
 * @defaultValue - `0`
 *
 * @returns A null value.
 */
export const sort = (
	_data: ReadonlyArray<unknown>,
	sortType = SortType.NONE,
	sortOrder = SortOrder.ASC,
	sortOptions: SortByOptions,
) => {
	let data = [..._data];

	if (data.length) {
		Object.keys(SortType)
			.filter((_sortType) => _sortType === sortType)
			.forEach((_sortType) => {
				const { sortBy, sortOrder: _sortOrder } =
					(sortOptions || {})[sortType] || {};

				if (sortBy) {
					data = orderBy(data, (_data) => sortBy(_data), sortOrder);
				}
			});
	}

	return data;
};
