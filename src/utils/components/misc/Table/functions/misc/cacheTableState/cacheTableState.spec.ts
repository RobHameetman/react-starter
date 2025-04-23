import { fakeTableState } from '../../../state/TableState/__test__';
import { cacheTableState } from './cacheTableState';

describe('cacheTableState()', () => {
	let result: unknown = null;

	beforeEach(() => {
		result = cacheTableState(fakeTableState());
	});

	afterEach(() => {
		result = null;
	});

	it.skip('should return the expected output', () => {
		expect(result).not.toBeNull();
	});
});
