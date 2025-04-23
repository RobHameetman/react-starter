import { $FC } from 'react';
import { INITIAL_MENU_CONTEXT, MenuContext } from '../MenuContext'

/**
 * Prop types for the {@link MenuProvider} component.
 */
export interface MenuProviderProps {
	/**
	 * [Optional] @TODO
	 * @defaultValue - `{}`
	 */
	readonly value: unknown;
}

/**
 * Place all of your global/top-level providers in this component.
 *
 * @param props - An {@link MenuProviderProps} object.
 *
 * @returns A rendered provider of application-level state for authorization and
 * analytics utilities.
 */
export const MenuProvider: $FC<MenuProviderProps> = ({ children, value = {} }) => (
	<MenuContext.Provider value={{ ...INITIAL_MENU_CONTEXT, ...(value as MenuContext) }}>
		{children}
	</MenuContext.Provider>
);

export default MenuProvider;
