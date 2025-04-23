import { faker } from '@faker-js/faker';
import { filter } from './filter';
import { OnFilterFn } from '../../../types';

interface FakeData {
	readonly city: string;
}

describe('filter()', () => {
	describe('given valid data', () => {
		let data: ReadonlyArray<unknown> | null = null;
		let onFilter: OnFilterFn | null = null;

		beforeEach(() => {
			const cities = ['Chicago', 'Los Angeles', 'New York'];

			data = Array.from(
				{ length: faker.number.int({ min: 2, max: 100 }) },
				(_, index) => ({ city: cities[index % 3] }),
			);

			onFilter = (data: unknown, currentFilter) =>
				currentFilter ? (data as FakeData).city === currentFilter : true;
		});

		afterEach(() => {
			data = null;
			onFilter = null;
		});

		it('should return the matched data when the filtering matching items', () => {
			expect(filter(data ?? [], ['Chicago', 'New York'], onFilter as OnFilterFn).length).toBeGreaterThanOrEqual(1);
		});

		it('should return no data when the filtering no matching items', () => {
			expect(filter(data ?? [], ['Baltimore'], onFilter as OnFilterFn)).toHaveLength(0);
		});

		it('should return all data when no input is provided', () => {
			expect(filter(data ?? [], [], onFilter as OnFilterFn)).toHaveLength(data?.length as number);
		});
	});
});
