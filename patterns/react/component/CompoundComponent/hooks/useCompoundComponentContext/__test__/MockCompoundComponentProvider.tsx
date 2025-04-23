import { INITIAL_COMPOUND_COMPONENT_CONTEXT, CompoundComponentContext } from '../../../contexts/CompoundComponentContext';

export const MockCompoundComponentProvider = jest.fn(({ children }) => (
	<CompoundComponentContext.Provider value={INITIAL_COMPOUND_COMPONENT_CONTEXT}>
		{children}
	</CompoundComponentContext.Provider>
));
