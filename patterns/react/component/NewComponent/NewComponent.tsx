import { $FC } from 'react';
import { cssClasses } from '@/utils/functions/misc/cssClasses';
import type { Polymorphic } from '@/utils/types/props/Polymorphic';
import type { Stylable } from '@/utils/types/props/Stylable';
import styles from './NewComponent.module.css';

/**
 * Compositional prop types for the {@link NewComponent} component.
 */
type ComposedProps = Polymorphic & Stylable;

/**
 * Prop types for {@link NewComponent}.
 */
export interface NewComponentProps extends ComposedProps {
	/**
	 * [Optional] The position of the form buttons.
	 * @defaultValue - `false`
	 */
	readonly prop?: boolean;
}

/**
 * @TODO - A short description of the component here.
 */
export const NewComponent: $FC<NewComponentProps> = ({
	as: As = 'div',
	className = '',
	children,
	prop = false,
	...props
}) => {
	const css = cssClasses(styles.newComponent, className);

	return (
		<As className={css} {...props}>
			{children}
		</As>
	);
};

export default NewComponent;
