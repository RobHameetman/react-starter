import { $FC, ForwardedRef, forwardRef } from 'react';
import { cssClasses } from '@/utils/functions/misc/cssClasses';
import type { Polymorphic } from '@/utils/types/props/Polymorphic';
import type { Stylable } from '@/utils/types/props/Stylable';
import useMenu from '../../hooks/useMenu';
import styles from './MenuTitle.module.css';

type ComposedProps = Polymorphic & Stylable;

/**
 * Prop types for the <{@link MenuTitle} /> component.
 */
export interface MenuTitleProps extends ComposedProps {
	/**
	 * [Optional] The position of the form buttons.
	 * @defaultValue - `false`
	 */
	readonly prop?: boolean;
}

/**
 * @TODO - A short description of the component here.
 *
 * @privateRemarks - Explicit props/ref annotations required for generic
 * override.
 */
export const MenuTitle = forwardRef<HTMLElement, MenuTitleProps>(({
	as: As = 'span',
	className = '',
	children,
	prop = false,
	...props
}, ref) => {
	const _sharedState = useMenu();
	const css = cssClasses(styles.MenuTitle, className);

	return (
		<As className={css} ref={ref} {...props}>
			{children}
		</As>
	);
});

export default MenuTitle;
