import { fakeTableState } from '../../../state/TableState/__test__';
import { renderSearch } from './renderSearch';

describe('renderSearch()', () => {
	let result: unknown = null;

	beforeEach(() => {
		result = renderSearch(fakeTableState());
	});

	afterEach(() => {
		result = null;
	});

	it.skip('should return the expected output', () => {
		expect(result).not.toBeNull();
	});
});
