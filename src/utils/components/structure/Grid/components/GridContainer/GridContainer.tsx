import { $FC } from 'react';
import { cssClasses } from '@/utils/functions/misc/cssClasses';
import { As } from '@/utils/components/structure/As';
import type { Polymorphic } from '@/utils/types/props/Polymorphic';
import type { Stylable } from '@/utils/types/props/Stylable';
import styles from './GridContainer.module.css';

type ComposedProps = Polymorphic & Stylable;

/**
 * Prop types for the <{@link GridContainer} /> component.
 */
export interface GridContainerProps extends ComposedProps {
	/**
	 * [Optional] The position of the form buttons.
	 * @defaultValue - `false`
	 */
	readonly prop?: boolean;
}

/**
 * @TODO - A short description of the component here.
 */
export const GridContainer: $FC<GridContainerProps> = ({
	as: _as = 'div',
	className = '',
	children,
	prop = false,
	...props
}) => {
	const css = cssClasses(styles.gridContainer, className);

	return (
		<As element={_as} className={css} {...props}>
			{children}
		</As>
	);
};

export default GridContainer;
