import { PaginatedData } from '../../../types';

/**
 * A description of `paginate()`.
 *
 * @param firstParam - A brief description of firstParam.
 * @param secondParam - [Optional] A brief description of secondParam.
 * @defaultValue - `0`
 *
 * @returns A null value.
 */
export const paginate = (
	_data: ReadonlyArray<unknown>,
	rowsPerPage = 10,
): PaginatedData => {
	let data = [..._data];

	if (data.length) {
		let pagesToGo = Math.ceil(data.length / rowsPerPage);
		let pages = [];

		let from: number | undefined;
		let to: number | undefined;

		while (pagesToGo) {
			from = pages.length * rowsPerPage;
			to = from + rowsPerPage;

			pages.push(data.slice(from, to));
			pagesToGo -= 1;
		}

		return pages;
	}

	return [data];
};
