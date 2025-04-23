import { randomSortType } from '../../../enums/SortType/__test__';
import { fakeTableState } from '../../../state/TableState/__test__';
import { changeSortType } from './changeSortType';

describe('changeSortType()', () => {
	let result: unknown = null;

	beforeEach(() => {
		result = changeSortType(randomSortType(), fakeTableState());
	});

	afterEach(() => {
		result = null;
	});

	it.skip('should return the expected output', () => {
		expect(result).not.toBeNull();
	});
});
