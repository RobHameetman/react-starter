import { forwardRef } from 'react';
import { cssClasses } from '@/utils/functions/misc/cssClasses';
import type { Polymorphic } from '@/utils/types/props/Polymorphic';
import type { Stylable } from '@/utils/types/props/Stylable';
import MenuGroup from './components/MenuGroup';
import MenuItem from './components/MenuItem';
import MenuTitle from './components/MenuTitle';
import styles from './Menu.module.css';
import MenuProvider from './contexts/MenuProvider/MenuProvider';

type ComposedProps = Polymorphic & Stylable;

/**
 * Prop types for the <{@link Menu} /> component.
 */
export interface MenuProps extends ComposedProps {
	/**
	 * [Optional] The position of the form buttons.
	 * @defaultValue - `false`
	 */
	readonly prop?: boolean;
}

/**
 * Prop types for {@link Menu}.
 */
export interface MenuParts {
	/**
	 * [Optional] The position of the form buttons.
	 * @defaultValue - `false`
	 */
	Group: typeof MenuGroup;

	/**
	 * [Optional] The position of the form buttons.
	 * @defaultValue - `false`
	 */
	Item: typeof MenuItem;

	/**
	 * [Optional] The position of the form buttons.
	 * @defaultValue - `false`
	 */
	Title: typeof MenuTitle;
}

/**
 * @TODO - A short description of the component here.
 */
export const Menu = forwardRef<HTMLElement, MenuProps, MenuParts>(({
	as: As = 'div',
	className = '',
	children,
	prop = false,
	...props
}, ref) => {
	const css = cssClasses(styles.menu, className);

	return (
		<MenuProvider value={{ prop }}>
			<As className={css} ref={ref} {...props}>
				{children}
			</As>
		</MenuProvider>
	);
});

Menu.Group = MenuGroup;
Menu.Item = MenuItem;
Menu.Title = MenuTitle;

export default Menu;
