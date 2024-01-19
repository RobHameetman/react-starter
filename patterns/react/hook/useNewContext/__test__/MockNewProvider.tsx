import { INITIAL_NEW_CONTEXT, NewContext } from '@app/path/to/NewContext';

export const MockNewProvider = jest.fn(({ children }) => (
	<NewContext.Provider value={INITIAL_NEW_CONTEXT}>
		{children}
	</NewContext.Provider>
));
