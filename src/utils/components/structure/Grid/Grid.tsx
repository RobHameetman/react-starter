import { CC } from 'react';
import { cssClasses } from '@/utils/functions/misc/cssClasses';
import type { Polymorphic } from '@/utils/types/props/Polymorphic';
import type { Stylable } from '@/utils/types/props/Stylable';
import { GridContainer } from './components/GridContainer';
import { GridItem } from './components/GridItem';
import GridProvider from './contexts/GridProvider';
import styles from './Grid.module.css';

type ComposedProps = Polymorphic & Stylable;

/**
 * Prop types for the <{@link Grid} /> component.
 */
export interface GridProps extends ComposedProps {
	/**
	 * [Optional] The position of the form buttons.
	 * @defaultValue - `false`
	 */
	readonly prop?: boolean;
}

/**
 * Prop types for {@link Grid}.
 */
export interface GridParts {
	/**
	 * [Optional] The position of the form buttons.
	 * @defaultValue - `false`
	 */
	Container: typeof GridContainer;
	/**
	 * [Optional] The position of the form buttons.
	 * @defaultValue - `false`
	 */
	Item: typeof GridItem;
}

/**
 * @TODO - A short description of the component here.
 */
export const Grid: CC<GridProps, GridParts> = ({
	as: As = 'div',
	className = '',
	children,
	prop = false,
	...props
}) => {
	const css = cssClasses(styles.grid, className);

	return (
		<GridProvider value={{ prop }}>
			<As className={css} {...props}>
				{children}
			</As>
		</GridProvider>
	);
};

Grid.Container = GridContainer;
Grid.Item = GridItem;

export default Grid;
