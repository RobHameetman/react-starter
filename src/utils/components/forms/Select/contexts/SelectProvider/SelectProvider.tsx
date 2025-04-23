import { $FC } from 'react';
import { INITIAL_SELECT_CONTEXT, SelectContext } from '../SelectContext';

/**
 * Prop types for the {@link SelectProvider} component.
 */
export interface SelectProviderProps {
	/**
	 * [Optional] @TODO
	 * @defaultValue - `{}`
	 */
	readonly value: unknown;
}

/**
 * Place all of your global/top-level providers in this component.
 *
 * @param props - An {@link SelectProviderProps} object.
 *
 * @returns A rendered provider of application-level state for authorization and
 * analytics utilities.
 */
export const SelectProvider: $FC<SelectProviderProps> = ({ children, value = {} }) => (
	<SelectContext.Provider value={{ ...INITIAL_SELECT_CONTEXT, ...(value as SelectContext) }}>
		{children}
	</SelectContext.Provider>
);

export default SelectProvider;
