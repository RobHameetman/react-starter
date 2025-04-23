import { fakeTableState } from '../../state/TableState/__test__';
import { isTableContext } from './TableContext';

describe('isTableContext()', () => {
	describe('given a valid TableContext', () => {
		let value: unknown;

		beforeEach(() => {
			value = {
				initialData: null,
				name: 'test',
				state: fakeTableState(),
				handleChangeFilter: () => {},
				handleChangePage: () => {},
				handleChangeRowsPerPage: () => {},
				handleChangeSearchInput: () => {},
				handleChangeSortOrder: () => {},
				handleChangeSortType: () => {},
				setColumnCount: () => {},
				setFilterable: () => {},
				setOnFilterFn: () => {},
				setPaginated: () => {},
				setSearchable: () => {},
				setSearchAgainstFn: () => {},
			};
		});

		it('should return true', () => {
			expect(isTableContext(value)).toBe(true);
		});
	});

	describe('given an invalid TableContext', () => {
		let value: unknown;

		beforeEach(() => {
			value = {
				initialData: null,
				name: '',
				state: {},
				handleChangeFilter: () => {},
				handleChangePage: () => {},
				handleChangeRowsPerPage: () => {},
				handleChangeSearchInput: () => {},
				handleChangeSortOrder: () => {},
				handleChangeSortType: () => {},
				setColumnCount: () => {},
				setFilterable: () => {},
				setOnFilterFn: () => {},
				setPaginated: () => {},
				setSearchable: () => {},
				setSearchAgainstFn: () => {},
			};
		});

		it('should return false', () => {
			expect(isTableContext(value)).toBe(false);
		});
	});
});
