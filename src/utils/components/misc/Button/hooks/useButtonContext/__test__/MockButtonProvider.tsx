import {
	INITIAL_BUTTON_CONTEXT,
	ButtonContext,
} from '../../../contexts/ButtonContext';

export const MockButtonProvider = jest.fn(({ children }) => (
	<ButtonContext.Provider value={INITIAL_BUTTON_CONTEXT}>
		{children}
	</ButtonContext.Provider>
));
