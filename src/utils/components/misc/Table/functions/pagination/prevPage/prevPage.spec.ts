import { fakeTableState } from '../../../state/TableState/__test__';
import { prevPage } from './prevPage';

describe('prevPage()', () => {
	let result: unknown = null;

	beforeEach(() => {
		result = prevPage(fakeTableState());
	});

	afterEach(() => {
		result = null;
	});

	it.skip('should return the expected output', () => {
		expect(result).not.toBeNull();
	});
});
