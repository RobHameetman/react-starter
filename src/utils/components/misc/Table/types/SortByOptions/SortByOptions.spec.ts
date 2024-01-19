import {
	SortOrder,
	SortType,
	isSortByOptions,
} from '../../../../../../modules';

describe('isSortByOptions', (): void => {
	describe('given a valid SortByOptions', (): void => {
		let value: unknown;

		beforeEach((): void => {
			value = {
				[SortType.DATE]: {
					sortBy: ({ date }: Record<string, string>) => new Date(date),
					sortOrder: SortOrder.ASC,
				},
			};
		});

		it('should return true', (): void => {
			expect(isSortByOptions(value)).toBe(true);
		});
	});

	describe('given an invalid SortByOptions', (): void => {
		let value: unknown;

		beforeEach((): void => {
			value = {
				newest: {
					sortBy: ({ date }: Record<string, string>) => new Date(date),
					sortOrder: SortOrder.ASC,
				},
			};
		});

		it('should return false', (): void => {
			expect(isSortByOptions(value)).toBe(false);
		});
	});
});
