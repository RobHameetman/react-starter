import { INITIAL_TABLE_CONTEXT, TableContext } from '../../../contexts/TableContext';

export const MockTableProvider = jest.fn(({ children }) => (
	<TableContext.Provider value={INITIAL_TABLE_CONTEXT}>
		{children}
	</TableContext.Provider>
));
