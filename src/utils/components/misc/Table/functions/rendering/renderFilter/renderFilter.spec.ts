import { fakeTableState } from '../../../state/TableState/__test__';
import { renderFilter } from './renderFilter';

describe('renderFilter()', () => {
	let result: unknown = null;

	beforeEach(() => {
		result = renderFilter(fakeTableState());
	});

	afterEach(() => {
		result = null;
	});

	it.skip('should return the expected output', () => {
		expect(result).not.toBeNull();
	});
});
