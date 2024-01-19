import {
	INITIAL_RADIO_CONTEXT,
	RadioContext,
} from '../../../contexts/RadioContext';

export const MockRadioProvider = jest.fn(({ children }) => (
	<RadioContext.Provider value={INITIAL_RADIO_CONTEXT}>
		{children}
	</RadioContext.Provider>
));
