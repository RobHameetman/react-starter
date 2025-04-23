import { forwardRef } from 'react';
import { cssClasses } from '@/utils/functions/misc/cssClasses';
import type { Polymorphic } from '@/utils/types/props/Polymorphic';
import type { Stylable } from '@/utils/types/props/Stylable';
import useMenu from '../../hooks/useMenu';
import styles from './MenuGroup.module.css';

type ComposedProps = Polymorphic & Stylable;

/**
 * Prop types for the <{@link MenuGroup} /> component.
 */
export interface MenuGroupProps extends ComposedProps {
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
export const MenuGroup = forwardRef<HTMLElement, MenuGroupProps>(({
	as: As = 'div',
	className = '',
	children,
	prop = false,
	...props
}, ref) => {
	const _sharedState = useMenu();
	const css = cssClasses(styles.MenuGroup, className);

	return (
		<As className={css} ref={ref} {...props}>
			{children}
		</As>
	);
});

export default MenuGroup;
