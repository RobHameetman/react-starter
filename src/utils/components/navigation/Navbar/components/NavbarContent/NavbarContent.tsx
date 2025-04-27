import { $FC } from 'react';
import { cssClasses } from '@/utils/functions/misc/cssClasses';
import { Polymorphic } from '@/utils/types/props/Polymorphic';
import type { Stylable } from '@/utils/types/props/Stylable';
import styles from './NavbarContent.module.css';

type ComposedProps = Polymorphic & Stylable;

/**
 * Prop types for {@link NavbarContent}.
 */
export interface NavbarContentProps extends ComposedProps {
	/**
	 * [Optional] The position of the form buttons.
	 * @defaultValue - `false`
	 */
	readonly prop?: boolean;
}

/**
 * @TODO - A short description of the component here.
 */
export const NavbarContent: $FC<NavbarContentProps> = ({
	as: As = 'div',
	className = '',
	children,
	prop = false,
	...props
}) => {
	const css = cssClasses(styles.navbarContent, className);

	return (
		<As className={css} {...props}>
			{children}
		</As>
	);
};
