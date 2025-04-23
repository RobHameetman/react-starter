import { INITIAL_MENU_CONTEXT, MenuContext } from '../../../contexts/MenuContext';

export const MockMenuProvider = jest.fn(({ children }) => (
	<MenuContext.Provider value={INITIAL_MENU_CONTEXT}>
		{children}
	</MenuContext.Provider>
));
