import { INITIAL_NEW_CONTEXT, NewContext } from '@/path/to/NewContext';

export const MockNewProvider = jest.fn(({ children }) => (
	<NewContext.Provider value={INITIAL_NEW_CONTEXT}>
		{children}
	</NewContext.Provider>
));
