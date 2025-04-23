import { isSortByOptions } from './SortByOptions';
import { SortOrder } from '../../enums/SortOrder';
import { SortType } from '../../enums/SortType';

describe('isSortByOptions()', () => {
	it('should return true given a valid SortByOptions', () => {
		expect(isSortByOptions({
			[SortType.DATE]: {
				sortBy: ({ date }: Record<string, string>) => new Date(date),
				sortOrder: SortOrder.ASC,
			},
		})).toBe(true);
	});

	it('should return false given an invalid SortByOptions', () => {
		expect(isSortByOptions({
			newest: {
				sortBy: ({ date }: Record<string, string>) => new Date(date),
				sortOrder: SortOrder.ASC,
			},
		})).toBe(false);
	});
});
