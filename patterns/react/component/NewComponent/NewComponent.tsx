import { $FC } from 'react';
import { As } from '@/utils/components/structure/As';
import { cssClasses } from '@/utils/functions/misc/cssClasses';
import type { Polymorphic } from '@/utils/types/props/Polymorphic';
import type { Stylable } from '@/utils/types/props/Stylable';
import styles from './NewComponent.module.css';

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
	as: _as = 'div',
	className = '',
	children,
	prop = false,
	...props
}) => {
	const css = cssClasses(styles.newComponent, className);

	return (
		<As element={_as} className={css} {...props}>
			{children}
		</As>
	);
};

export default NewComponent;
