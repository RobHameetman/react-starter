import { fakeTableState } from '../../../state/TableState/__test__';
import { applyMaxRows } from './applyMaxRows';

describe('applyMaxRows()', () => {
	let result: unknown = null;

	beforeEach(() => {
		result = applyMaxRows(fakeTableState());
	});

	afterEach(() => {
		result = null;
	});

	it.skip('should return the expected output', () => {
		expect(result).not.toBeNull();
	});
});
