import { renderFilter } from '../renderFilter';
import { renderSearch } from '../renderSearch';
import { renderSort } from '../renderSort';
import { renderPagination } from '../renderPagination';
import {
	applyMaxRows,
	cacheTableState,
	clearBuffer,
	initializeBuffer,
} from '../../misc';
import { TableState } from '../../../types';

/**
 * A description of `render()`.
 *
 * @param firstParam - A brief description of firstParam.
 * @param secondParam - [Optional] A brief description of secondParam.
 * @defaultValue - `0`
 *
 * @returns A null value.
 */
export const render = (state: TableState): TableState => {
	const initialized = initializeBuffer(state);

	const rendered = renderPagination(
		renderSort(renderFilter(renderSearch(initialized))),
	);

	const complete = clearBuffer(applyMaxRows(rendered));

	cacheTableState(complete);

	return complete;
};
