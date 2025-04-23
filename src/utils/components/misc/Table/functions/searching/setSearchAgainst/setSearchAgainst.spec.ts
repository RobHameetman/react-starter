import { fakeTableState } from '../../../state/TableState/__test__';
import { setSearchAgainst } from './setSearchAgainst';

describe('setSearchAgainst()', () => {
	let result: unknown = null;

	beforeEach(() => {
		result = setSearchAgainst(jest.fn(), fakeTableState());
	});

	afterEach(() => {
		result = null;
	});

	it.skip('should return the expected output', () => {
		expect(result).not.toBeNull();
	});
});
