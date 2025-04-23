import { fakeTableState } from '../../../state/TableState/__test__';
import { nextPage } from './nextPage';

describe('nextPage()', () => {
	let result: unknown = null;

	beforeEach(() => {
		result = nextPage(fakeTableState());
	});

	afterEach(() => {
		result = null;
	});

	it.skip('should return the expected output', () => {
		expect(result).not.toBeNull();
	});
});
