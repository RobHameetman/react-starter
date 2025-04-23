import { INITIAL_SELECT_CONTEXT, SelectContext } from '../../../contexts/SelectContext';

export const MockSelectProvider = jest.fn(({ children }) => (
	<SelectContext.Provider value={INITIAL_SELECT_CONTEXT}>
		{children}
	</SelectContext.Provider>
));
