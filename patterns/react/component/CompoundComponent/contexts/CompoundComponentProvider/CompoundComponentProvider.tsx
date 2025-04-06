import { $FC } from 'react';
import { History } from 'history';
import { CompoundComponentContext } from '../CompoundComponentContext'

/**
 * Prop types for the {@link CompoundComponentProvider} component.
 */
export interface CompoundComponentProviderProps {
	/**
	 * [Optional] @TODO
	 * @defaultValue - `{}`
	 */
	readonly value: unknown;
}

/**
 * Place all of your global/top-level providers in this component.
 *
 * @param props - An {@link CompoundComponentProviderProps} object.
 *
 * @returns A rendered provider of application-level state for authorization and
 * analytics utilities.
 */
export const CompoundComponentProvider: $FC<CompoundComponentProviderProps> = ({ children, value = {} }) => (
	<CompoundComponentContext.Provider value={value}>
		{children}
	</CompoundComponentContext.Provider>
);

export default CompoundComponentProvider;
