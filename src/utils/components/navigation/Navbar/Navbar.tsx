import { prefersReducedMotion } from '@app/utils/functions/accessibility/prefersReducedMotion';
import { cssClasses } from '@app/utils/functions/misc/cssClasses';
import { useSemanticAsProp } from '@app/utils/hooks/react/useSemanticAsProp';
import type { Animatable } from '@app/utils/types/props/Animatable';
import type { Expansible } from '@app/utils/types/props/Expansible';
import type { Polymorphic } from '@app/utils/types/props/Polymorphic';
import type { Stylable } from '@app/utils/types/props/Stylable';
import { CC } from '@app/utils/types/react/CC';
import { NavbarBranding } from './components/NavbarBranding';
import { NavbarContent } from './components/NavbarContent';
import { NavbarDropdown } from './components/NavbarDropdown';
import { NavbarItem } from './components/NavbarItem';
import styles from './Navbar.module.css';

type ComposedProps = Animatable & Expansible & Polymorphic & Stylable;

/**
 * Prop types for {@link Navbar}.
 */
export interface NavbarProps extends ComposedProps {
	/**
	 * [Optional] The position of the form buttons.
	 * @defaultValue - `false`
	 */
	readonly blurred?: boolean;
}

export interface NavbarComponents {
	Branding: typeof NavbarBranding;
	Content: typeof NavbarContent;
	Dropdown: typeof NavbarDropdown;
	Item: typeof NavbarItem;
}

/**
 * @TODO - A short description of the component here.
 */
export const Navbar: CC<NavbarComponents, NavbarProps> = ({
	animated = !prefersReducedMotion(),
	as: _as = 'header',
	blurred = false,
	className = '',
	children,
	fullWidth = false,
	...props
}) => {
	const As = useSemanticAsProp({ as: _as });
	const css = cssClasses(styles.navbar, className);

	return (
		<As className={css} {...props}>
			{children}
		</As>
	);
};

Navbar.Branding = NavbarBranding;
Navbar.Content = NavbarContent;
Navbar.Dropdown = NavbarDropdown;
Navbar.Item = NavbarItem;
