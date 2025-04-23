import { randomSortOrder } from '../../../enums/SortOrder/__test__';
import { fakeTableState } from '../../../state/TableState/__test__';
import { changeSortOrder } from './changeSortOrder';

describe('changeSortOrder()', () => {
	let result: unknown = null;

	beforeEach(() => {
		result = changeSortOrder(randomSortOrder(), fakeTableState());
	});

	afterEach(() => {
		result = null;
	});

	it.skip('should return the expected output', () => {
		expect(result).not.toBeNull();
	});
});
