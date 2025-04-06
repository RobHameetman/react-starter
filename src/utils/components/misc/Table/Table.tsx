import { CC } from '@/utils/types/react/CC';
import {
	TableBody,
	TableCell,
	TableColumn,
	TableColumns,
	TablePagination,
	TableRow,
	TableRows,
	TableToolbar,
} from './components';
import { TableProvider } from './contexts';
import { SortByOptions } from './types';
import { useCachedTableState } from './hooks/useCachedTableState';

/**
 * Prop types for `<Table />`.
 */
export interface TableProps {
	/**
	 * The initial raw set of data.
	 */
	readonly initialData: ReadonlyArray<unknown> | null;

	/**
	 * [Optional] The maximum number of rows to display.
	 */
	readonly max?: number;

	/**
	 * The name of the table used for caching.
	 */
	readonly name: string;

	/**
	 * Options required for sortable columns.
	 */
	readonly sortOptions: SortByOptions;
}

export interface TableComponents {
	Body: typeof TableBody;
	Cell: typeof TableCell;
	Column: typeof TableColumn;
	Columns: typeof TableColumns;
	Pagination: typeof TablePagination;
	Row: typeof TableRow;
	Rows: typeof TableRows;
	Toolbar: typeof TableToolbar;
}

/**
 * A table component with sorting, filtering, pagination, and search.
 */
export const Table: CC<TableComponents, TableProps> = ({
	children,
	initialData,
	max = null,
	name,
	sortOptions,
}) => {
	const [state, setState] = useCachedTableState({
		name,
		initialData,
		max,
		sortOptions,
	});

	return (
		<TableProvider
			name={name}
			initialData={initialData}
			state={state}
			setState={setState}
		>
			{children}
		</TableProvider>
	);
};

Table.Body = TableBody;
Table.Cell = TableCell;
Table.Column = TableColumn;
Table.Columns = TableColumns;
Table.Pagination = TablePagination;
Table.Row = TableRow;
Table.Rows = TableRows;
Table.Toolbar = TableToolbar;
