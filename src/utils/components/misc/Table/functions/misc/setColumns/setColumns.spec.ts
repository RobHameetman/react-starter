import { fakeTableState } from '../../../state/TableState/__test__';
import { setColumns } from './setColumns';

describe('setColumns()', () => {
	let result: unknown = null;

	beforeEach(() => {
		result = setColumns(0, fakeTableState());
	});

	afterEach(() => {
		result = null;
	});

	it.skip('should return the expected output', () => {
		expect(result).not.toBeNull();
	});
});
