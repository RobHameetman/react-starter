import faker from 'faker';
import { sort } from './sort';
import { SortOrder, SortType } from '../../../enums';
import { SortByOptions } from '../../../types';

interface FakeData {
	readonly quantity: number;
}

describe('sort()', (): void => {
	let result: ReadonlyArray<unknown> = [];

	describe('given valid data', (): void => {
		let data: ReadonlyArray<unknown> = [];
		let sortOptions: SortByOptions = {};

		beforeEach((): void => {
			data = Array.from(
				{ length: faker.datatype.number({ min: 2, max: 100 }) },
				() => ({
					quantity: faker.datatype.number({ min: 100, max: 10000 }),
				}),
			);

			sortOptions = {
				[SortType.QUANTITY]: {
					sortBy: ({ quantity }: FakeData) => quantity,
				},
			};
		});

		afterEach((): void => {
			data = [];
			sortOptions = {};
		});

		describe('when the current SortType is matching', (): void => {
			let sortType = SortType.NONE;

			beforeEach((): void => {
				sortType = SortType.QUANTITY;
				result = sort(data, sortType, SortOrder.ASC, sortOptions);
			});

			afterEach((): void => {
				sortType = SortType.NONE;
			});

			it('should return the same amount of data', (): void => {
				expect(result).toHaveLength(data.length);
			});

			it('should return sorted data', (): void => {
				expect(result[0]).not.toEqual(data[0]);
			});
		});

		describe('when the current SortType is not matching', (): void => {
			let sortType = SortType.NONE;

			beforeEach((): void => {
				sortType = SortType.DATE;
				result = sort(data, sortType, SortOrder.ASC, sortOptions);
			});

			afterEach((): void => {
				sortType = SortType.NONE;
			});

			it('should return the same amount of data', (): void => {
				expect(result).toHaveLength(data.length);
			});

			it('should return unsorted data', (): void => {
				expect(result[0]).toEqual(data[0]);
			});
		});

		describe('when no SortType is provided', (): void => {
			let sortType = SortType.NONE;

			beforeEach((): void => {
				sortType = SortType.NONE;
				result = sort(data, sortType, SortOrder.ASC, sortOptions);
			});

			afterEach((): void => {
				sortType = SortType.NONE;
			});

			it('should return the same amount of data', (): void => {
				expect(result).toHaveLength(data.length);
			});

			it('should return unsorted data', (): void => {
				expect(result[0]).toEqual(data[0]);
			});
		});
	});
});
