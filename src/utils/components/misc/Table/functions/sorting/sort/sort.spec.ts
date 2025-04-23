import { faker } from '@faker-js/faker';
import { sort } from './sort';
import { SortOrder, SortType } from '../../../enums';
import { SortByOptions } from '../../../types';

interface FakeData {
	readonly quantity: number;
}

describe('sort()', () => {
	let result: ReadonlyArray<unknown> = [];

	describe('given valid data', () => {
		let data: ReadonlyArray<unknown> | null = null;
		let sortOptions: SortByOptions | null = null;

		beforeEach(() => {
			data = Array.from(
				{ length: faker.number.int({ min: 2, max: 100 }) },
				() => ({
					quantity: faker.number.int({ min: 100, max: 10000 }),
				}),
			);

			sortOptions = {
				[SortType.QUANTITY]: {
					/* @ts-expect-error - Type 'unknown' is not assignable to type 'FakeData'. */
					sortBy: ({ quantity }: FakeData) => quantity,
				},
			};
		});

		afterEach(() => {
			data = null;
			sortOptions = null;
		});

		describe('when the current SortType is matching', () => {
			let sortType = SortType.NONE;

			beforeEach(() => {
				sortType = SortType.QUANTITY;
				result = sort(data ?? [], sortType, SortOrder.ASC, sortOptions ?? {});
			});

			afterEach(() => {
				sortType = SortType.NONE;
			});

			it('should return the same amount of data', () => {
				expect(result).toHaveLength(data?.length || -1);
			});

			it('should return sorted data', () => {
				expect(result[0]).not.toEqual(data?.[0]);
			});
		});

		describe('when the current SortType is not matching', () => {
			let sortType = SortType.NONE;

			beforeEach(() => {
				sortType = SortType.DATE;
				result = sort(data ?? [], sortType, SortOrder.ASC, sortOptions ?? {});
			});

			afterEach(() => {
				sortType = SortType.NONE;
			});

			it('should return the same amount of data', () => {
				expect(result).toHaveLength(data?.length || -1);
			});

			it('should return unsorted data', () => {
				expect(result[0]).toEqual(data?.[0]);
			});
		});

		describe('when no SortType is provided', () => {
			let sortType = SortType.NONE;

			beforeEach(() => {
				sortType = SortType.NONE;
				result = sort(data ?? [], sortType, SortOrder.ASC, sortOptions ?? {});
			});

			afterEach(() => {
				sortType = SortType.NONE;
			});

			it('should return the same amount of data', () => {
				expect(result).toHaveLength(data?.length || -1);
			});

			it('should return unsorted data', () => {
				expect(result[0]).toEqual(data?.[0]);
			});
		});
	});
});
