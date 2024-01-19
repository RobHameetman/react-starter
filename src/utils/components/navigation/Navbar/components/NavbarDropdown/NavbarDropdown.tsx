import { $FC } from 'react';
import { cssClasses } from '@app/utils/functions/misc/cssClasses';
import { useSemanticAsProp } from '@app/utils/hooks/react/useSemanticAsProp';
import { Polymorphic } from '@app/utils/types/props/Polymorphic';
import type { Stylable } from '@app/utils/types/props/Stylable';
import styles from './NavbarDropdown.module.css';

type ComposedProps = Polymorphic & Stylable;

/**
 * Prop types for {@link NavbarDropdown}.
 */
export interface NavbarDropdownProps extends ComposedProps {
	/**
	 * [Optional] The position of the form buttons.
	 * @defaultValue - `false`
	 */
	readonly prop?: boolean;
}

/**
 * @TODO - A short description of the component here.
 */
export const NavbarDropdown: $FC<NavbarDropdownProps> = ({
	as: _as = 'div',
	className = '',
	children,
	prop = false,
	...props
}) => {
	const As = useSemanticAsProp({ as: _as });
	const css = cssClasses(styles.navbarDropdown, className);

	return (
		<As className={css} {...props}>
			{children}
		</As>
	);
};
