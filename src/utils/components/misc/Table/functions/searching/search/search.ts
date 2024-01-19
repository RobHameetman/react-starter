import { DEFAULT_SEARCH_AGAINST } from '../../../constants';

/**
 * A description of `search()`.
 *
 * @param firstParam - A brief description of firstParam.
 * @param secondParam - [Optional] A brief description of secondParam.
 * @defaultValue - `0`
 *
 * @returns A null value.
 */
export const search = <T>(
	_data: ReadonlyArray<T>,
	searchInput = '',
	searchAgainst = DEFAULT_SEARCH_AGAINST,
): ReadonlyArray<T> => {
	let data = [..._data];

	if (data.length) {
		data = searchInput
			? data.filter((item) => {
					return (
						typeof searchAgainst === 'function' &&
						searchAgainst(item)
							.toLowerCase()
							.includes(searchInput.toLowerCase())
					);
			  }) || null
			: data;
	}

	return data;
};
