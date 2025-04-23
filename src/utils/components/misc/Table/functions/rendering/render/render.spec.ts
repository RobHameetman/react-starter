import { fakeTableState } from '../../../state/TableState/__test__';
import { render } from './render';

describe('render()', () => {
	let result: unknown = null;

	beforeEach(() => {
		result = render(fakeTableState());
	});

	afterEach(() => {
		result = null;
	});

	it.skip('should return the expected output', () => {
		expect(result).not.toBeNull();
	});
});
