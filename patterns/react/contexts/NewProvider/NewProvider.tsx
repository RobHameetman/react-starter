import { $FC } from 'react';
import { INITIAL_NEW_CONTEXT, NewContext } from '../NewContext'

/**
 * Prop types for the {@link NewProvider} component.
 */
export interface NewProviderProps {
	/**
	 * [Optional] @TODO
	 * @defaultValue - `{}`
	 */
	readonly value: unknown;
}

/**
 * Place all of your global/top-level providers in this component.
 *
 * @param props - An {@link NewProviderProps} object.
 *
 * @returns A rendered provider of application-level state for authorization and
 * analytics utilities.
 */
export const NewProvider: $FC<NewProviderProps> = ({ children, value = {} }) => (
	<NewContext.Provider value={{ ...INITIAL_NEW_CONTEXT, ...(value as NewContext) }}>
		{children}
	</NewContext.Provider>
);

export default NewProvider;
