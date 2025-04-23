import { faker } from '@faker-js/faker';
import { SearchAgainstFn } from '../../../types/SearchAgainstFn';
import { search } from './search';

interface FakeData {
	readonly city: string;
}

describe('search()', () => {
	let result: ReadonlyArray<unknown> | null = null;

	describe('given valid data', () => {
		let data: ReadonlyArray<unknown> | null = null;
		let searchAgainst: SearchAgainstFn | null = null;

		beforeEach(() => {
			data = Array.from(
				{ length: faker.number.int({ min: 2, max: 100 }) },
				() => ({ city: faker.address.city() }),
			);

			searchAgainst = (data: unknown) => (data as FakeData).city;
		});

		afterEach(() => {
			data = null;
			searchAgainst = null;
		});

		it('should return the matched data when the search is a match', () => {
			expect(search(data ?? [], (data?.[
				faker.number.int({ min: 0, max: data.length - 1 })
			] as FakeData).city.slice(0, 2), searchAgainst ?? jest.fn()).length).toBeGreaterThanOrEqual(1);
		});

		it('should return no data when the search is not a match', () => {
			expect(search(data ?? [], faker.lorem.word(), searchAgainst ?? jest.fn())).toHaveLength(0);
		});

		it('should return all data when no input is provided', () => {
			expect(search(data ?? [], '', searchAgainst ?? jest.fn())).toHaveLength(data?.length || -1);
		});
	});
});
