import { $FC } from 'react';
import { GridContext } from '../GridContext'

/**
 * Prop types for the {@link GridProvider} component.
 */
export interface GridProviderProps {
	/**
	 * [Optional] @TODO
	 * @defaultValue - `{}`
	 */
	readonly value: unknown;
}

/**
 * Place all of your global/top-level providers in this component.
 *
 * @param props - An {@link GridProviderProps} object.
 *
 * @returns A rendered provider of application-level state for authorization and
 * analytics utilities.
 */
export const GridProvider: $FC<GridProviderProps> = ({ children, value = {} }) => (
	<GridContext.Provider value={value as GridContext}>
		{children}
	</GridContext.Provider>
);

export default GridProvider;
