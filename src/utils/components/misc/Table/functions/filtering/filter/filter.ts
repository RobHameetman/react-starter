import isEqual from 'lodash/isEqual';
import { OnFilterFn } from '../../../types';

/**
 * Filter a set of data for the given filters by a provided filter function.
 *
 * @param data - An array of data to be filtered.
 * @param filters - An array of filters to be used.
 * @param onFilter - A provided filter function which returns a boolean value.
 *
 * @returns A filtered set of data.
 */
export const filter = (
	data: ReadonlyArray<unknown>,
	filters: ReadonlyArray<string>,
	onFilter: OnFilterFn,
): ReadonlyArray<unknown> => {
	let filteredData = [...data];

	if (data.length && filters.length) {
		filteredData = filters
			.map((filter) =>
				data.filter((_data, index, array) =>
					onFilter(_data, filter, index, array),
				),
			)
			.reduce((matchingData, currentMatches) => {
				return [
					...matchingData,
					...currentMatches.filter(
						(match) => !matchingData.some((_data) => isEqual(_data, match)),
						[],
					),
				];
			}, []);
	}

	return filteredData;
};
