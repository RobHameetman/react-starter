import { $FC, useCallback, useState } from 'react';
import { PressEventHandler } from '@app/utils/types/handlers/PressEventHandler';
import { ButtonContext } from '../ButtonContext';

/**
 * Prop types for the {@link ButtonProvider} component.
 */
export interface ButtonProviderProps {
	/**
	 * [Optional] If `true`, the currently active button will be toggled when
	 * pressed.
	 * @defaultValue - `false`
	 */
	readonly toggle?: boolean;
}

/**
 * Provides state management for button groups.
 *
 * @example
 * ```
 * <ButtonProvider>
 *   {...}
 *   <Button>My Button</Button>
 * </ButtonProvider>
 * ```
 */
export const ButtonProvider: $FC<ButtonProviderProps> = ({
	children,
	toggle = false,
}) => {
	const [active, setActive] = useState<ButtonContext['active']>(null);

	const activate = useCallback<PressEventHandler>(
		(e) => {
			if (toggle) {
				const { id } = e.currentTarget;

				setActive((currentlyActive) => (currentlyActive === id ? null : id));
			}
		},
		[setActive],
	);

	return (
		<ButtonContext.Provider
			value={{
				active,
				toggle,
				activate,
			}}
		>
			{children}
		</ButtonContext.Provider>
	);
};
