import faker from 'faker';
import { filter } from './filter';
import { OnFilterFn } from '../../../types';

interface FakeData {
	readonly city: string;
}

describe('filter()', (): void => {
	let result: ReadonlyArray<unknown> = [];

	describe('given valid data', (): void => {
		let data: ReadonlyArray<unknown> = [];
		let onFilter: OnFilterFn = () => false;

		beforeEach((): void => {
			const cities = ['Chicago', 'Los Angeles', 'New York'];

			data = Array.from(
				{ length: faker.datatype.number({ min: 2, max: 100 }) },
				(_, index) => ({ city: cities[index % 3] }),
			);

			onFilter = (data: unknown, currentFilter) =>
				currentFilter ? (data as FakeData).city === currentFilter : true;
		});

		afterEach((): void => {
			data = [];
			onFilter = () => false;
		});

		describe('when the filtering matching items', (): void => {
			let filters: ReadonlyArray<string> = [];

			beforeEach((): void => {
				filters = ['Chicago', 'New York'];
				result = filter(data, filters, onFilter);
			});

			afterEach((): void => {
				filters = [];
			});

			it('should return the matched data', (): void => {
				expect(result.length).toBeGreaterThanOrEqual(1);
			});
		});

		describe('when the filtering no matching items', (): void => {
			let filters: ReadonlyArray<string> = [];

			beforeEach((): void => {
				filters = ['Baltimore'];
				result = filter(data, filters, onFilter);
			});

			afterEach((): void => {
				filters = [];
			});

			it('should return no data', (): void => {
				expect(result).toHaveLength(0);
			});
		});

		describe('when no input is provided', (): void => {
			let filters: ReadonlyArray<string> = [];

			beforeEach((): void => {
				result = filter(data, filters, onFilter);
			});

			afterEach((): void => {
				filters = [];
			});

			it('should return all data', (): void => {
				expect(result).toHaveLength(data.length);
			});
		});
	});
});
