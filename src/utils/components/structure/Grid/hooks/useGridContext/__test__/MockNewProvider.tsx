import { INITIAL_GRID_CONTEXT, GridContext } from '../../../contexts/GridContext';

export const MockNewProvider = jest.fn(({ children }) => (
	<GridContext.Provider value={INITIAL_GRID_CONTEXT}>
		{children}
	</GridContext.Provider>
));
