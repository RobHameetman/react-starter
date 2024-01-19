export enum SortOrder {
	ASC = 'asc',
	DESC = 'desc',
}

export const SORT_ORDERS = Object.values(SortOrder);

export const isSortOrder = (value: unknown): value is SortOrder =>
	/**
	 * value
	 */
	Object.values<unknown>(SortOrder).includes(value);
