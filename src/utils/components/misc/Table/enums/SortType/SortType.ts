export enum SortType {
	/**
	 * No value is currently selected. Used when initially rendering `<SortBy />`.
	 */
	NONE = '',

	/**
	 * The performance change in the current market.
	 */
	CHANGE = 'CHANGE',

	/**
	 * Date of the year.
	 */
	DATE = 'DATE',

	/**
	 * Number of orders filled. Used when sorting trade history.
	 */
	FILLED = 'FILLED',

	/**
	 * Last traded price. Used when sorting `MarketStat`s.
	 */
	LTP = 'LTP',

	/**
	 * Profit and loss. Used when sorting trade history.
	 */
	PL = 'PL',

	/**
	 * Profit and loss. Used when sorting order history.
	 */
	QUANTITY = 'QUANTITY',

	/**
	 * Time of day.
	 */
	TIME = 'TIME',

	/**
	 * Trade volume. Used when sorting `MarketStat`s.
	 */
	VOLUME = 'VOLUME',
}

export const SORT_TYPES = Object.values(SortType);

export const isSortType = (value: unknown): value is SortType =>
	/**
	 * value
	 */
	Object.values<unknown>(SortType).includes(value) || value === '';
