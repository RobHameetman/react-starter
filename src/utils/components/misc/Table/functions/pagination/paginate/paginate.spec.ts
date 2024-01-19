import faker from 'faker';
import { isPaginatedData } from '../../../types';
import { paginate } from './paginate';

describe('paginate()', (): void => {
	let result: ReadonlyArray<unknown> = [];

	describe('given valid data', (): void => {
		let data: ReadonlyArray<unknown> = [];
		let rowsPerPage: number = -1;
		let pages: number = -1;

		beforeEach((): void => {
			data = faker.lorem.paragraph().split(' ');
			rowsPerPage = [5, 10, 25][faker.datatype.number({ min: 0, max: 2 })];
			pages = Math.ceil(data.length / rowsPerPage);

			result = paginate(data, rowsPerPage);
		});

		afterEach((): void => {
			data = [];
			rowsPerPage = -1;
			pages = -1;
		});

		it('should return paginated data', (): void => {
			expect(isPaginatedData(result)).toBe(true);
		});

		it('should have the expected number of pages', (): void => {
			expect(result).toHaveLength(pages);
		});
	});
});
