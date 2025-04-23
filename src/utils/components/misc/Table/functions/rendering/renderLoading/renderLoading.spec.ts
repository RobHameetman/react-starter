import { fakeTableState } from '../../../state/TableState/__test__';
import { renderLoading } from './renderLoading';

describe('renderLoading()', () => {
	let result: unknown = null;

	beforeEach(() => {
		result = renderLoading(fakeTableState());
	});

	afterEach(() => {
		result = null;
	});

	it.skip('should return the expected output', () => {
		expect(result).not.toBeNull();
	});
});
