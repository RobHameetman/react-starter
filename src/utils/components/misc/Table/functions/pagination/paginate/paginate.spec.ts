import { faker } from '@faker-js/faker';
import { isPaginatedData } from '../../../types';
import { paginate } from './paginate';

describe('paginate()', () => {
	let result: ReadonlyArray<unknown> | null = null;
	let data: ReadonlyArray<unknown> | null = null;
	let rowsPerPage: number | null = null;
	let pages: number | null = null;

	beforeEach(() => {
		data = faker.lorem.paragraph().split(' ');
		rowsPerPage = [5, 10, 25][faker.number.int({ min: 0, max: 2 })];
		pages = Math.ceil((data as ReadonlyArray<string>).length / rowsPerPage);

		result = paginate((data as ReadonlyArray<string>), rowsPerPage);
	});

	afterEach(() => {
		data = null;
		rowsPerPage = -1;
		pages = -1;
	});

	it('should return paginated data given valid data', () => {
		expect(isPaginatedData(result)).toBe(true);
	});

	it('should have the expected number of pages given valid data', () => {
		expect(result).toHaveLength(pages as number);
	});
});
