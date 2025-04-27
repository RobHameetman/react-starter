import { $FC } from 'react';
import { cssClasses } from '@/utils/functions/misc/cssClasses';
import type { Polymorphic } from '@/utils/types/props/Polymorphic';
import type { Stylable } from '@/utils/types/props/Stylable';
import styles from './GridItem.module.css';

type ComposedProps = Polymorphic & Stylable;

/**
 * Prop types for the <{@link GridItem} /> component.
 */
export interface GridItemProps extends ComposedProps {
	/**
	 * [Optional] The position of the form buttons.
	 * @defaultValue - `false`
	 */
	readonly prop?: boolean;
}

/**
 * @TODO - A short description of the component here.
 */
export const GridItem: $FC<GridItemProps> = ({
	as: As = 'div',
	className = '',
	children,
	prop = false,
	...props
}) => {
	const css = cssClasses(styles.gridItem, className);

	return (
		<As className={css} {...props}>
			{children}
		</As>
	);
};

export default GridItem;
