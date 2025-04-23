import { fakeTableState } from '../../../state/TableState/__test__';
import { renderSort } from './renderSort';

describe('renderSort()', () => {
	let result: unknown = null;

	beforeEach(() => {
		result = renderSort(fakeTableState());
	});

	afterEach(() => {
		result = null;
	});

	it.skip('should return the expected output', () => {
		expect(result).not.toBeNull();
	});
});
