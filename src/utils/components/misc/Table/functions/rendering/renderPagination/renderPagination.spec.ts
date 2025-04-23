import { fakeTableState } from '../../../state/TableState/__test__';
import { renderPagination } from './renderPagination';

describe('renderPagination()', () => {
	let result: unknown = null;

	beforeEach(() => {
		result = renderPagination(fakeTableState());
	});

	afterEach(() => {
		result = null;
	});

	it.skip('should return the expected output', () => {
		expect(result).not.toBeNull();
	});
});
