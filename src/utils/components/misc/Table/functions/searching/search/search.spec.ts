import faker from 'faker';
import { SearchAgainstFn } from '../../../types';
import { search } from './search';

interface FakeData {
	readonly city: string;
}

describe('search()', (): void => {
	let result: ReadonlyArray<unknown> = [];

	describe('given valid data', (): void => {
		let data: ReadonlyArray<unknown> = [];
		let searchAgainst: SearchAgainstFn = () => '';

		beforeEach((): void => {
			data = Array.from(
				{ length: faker.datatype.number({ min: 2, max: 100 }) },
				() => ({ city: faker.address.city() }),
			);

			searchAgainst = (data: unknown) => (data as FakeData).city;
		});

		afterEach((): void => {
			data = [];
			searchAgainst = () => '';
		});

		describe('when the search is a match', (): void => {
			let searchInput: string = '';

			beforeEach((): void => {
				searchInput = (data[
					faker.datatype.number({ min: 0, max: data.length - 1 })
				] as FakeData).city.slice(0, 2);

				result = search(data, searchInput, searchAgainst);
			});

			afterEach((): void => {
				searchInput = '';
			});

			it('should return the matched data', (): void => {
				expect(result.length).toBeGreaterThanOrEqual(1);
			});
		});

		describe('when the search is not a match', (): void => {
			let searchInput: string = '';

			beforeEach((): void => {
				searchInput = faker.random.word();
				result = search(data, searchInput, searchAgainst);
			});

			afterEach((): void => {
				searchInput = '';
			});

			it('should return no data', (): void => {
				expect(result).toHaveLength(0);
			});
		});

		describe('when no input is provided', (): void => {
			let searchInput: string = '';

			beforeEach((): void => {
				searchInput = '';
				result = search(data, searchInput, searchAgainst);
			});

			afterEach((): void => {
				searchInput = '';
			});

			it('should return all data', (): void => {
				expect(result).toHaveLength(data.length);
			});
		});
	});
});
