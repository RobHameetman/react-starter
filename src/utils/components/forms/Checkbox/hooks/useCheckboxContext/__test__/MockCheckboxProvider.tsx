import {
	INITIAL_CHECKBOX_CONTEXT,
	CheckboxContext,
} from '../../../contexts/CheckboxContext';

export const MockCheckboxProvider = jest.fn(({ children }) => (
	<CheckboxContext.Provider value={INITIAL_CHECKBOX_CONTEXT}>
		{children}
	</CheckboxContext.Provider>
));
