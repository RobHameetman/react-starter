import { fakeTableState } from '../../../state/TableState/__test__';
import { resetSearchInput } from './resetSearchInput';

describe('resetSearchInput()', () => {
	let result: unknown = null;

	beforeEach(() => {
		result = resetSearchInput(fakeTableState());
	});

	afterEach(() => {
		result = null;
	});

	it.skip('should return the expected output', () => {
		expect(result).not.toBeNull();
	});
});
