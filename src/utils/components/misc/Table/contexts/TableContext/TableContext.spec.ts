import { isTableContext } from '../../../../../../modules';
import { fakeTableState } from '../../state/TableState/__test__';

describe('isTableContext()', (): void => {
	describe('given a valid TableContext', (): void => {
		let value: unknown;

		beforeEach((): void => {
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

		it('should return true', (): void => {
			expect(isTableContext(value)).toBe(true);
		});
	});

	describe('given an invalid TableContext', (): void => {
		let value: unknown;

		beforeEach((): void => {
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

		it('should return false', (): void => {
			expect(isTableContext(value)).toBe(false);
		});
	});
});
