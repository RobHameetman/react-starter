import { $FC } from 'react';
import { cssClasses } from '@/utils/functions/misc/cssClasses';
import { As } from '@/utils/components/structure/As';
import type { Polymorphic } from '@/utils/types/props/Polymorphic';
import type { Stylable } from '@/utils/types/props/Stylable';
import styles from './CompoundComponentSubcomponent.module.css';

type ComposedProps = Polymorphic & Stylable;

/**
 * Prop types for the <{@link CompoundComponentSubcomponent} /> component.
 */
export interface CompoundComponentSubcomponentProps extends ComposedProps {
	/**
	 * [Optional] The position of the form buttons.
	 * @defaultValue - `false`
	 */
	readonly prop?: boolean;
}

/**
 * @TODO - A short description of the component here.
 */
export const CompoundComponentSubcomponent: $FC<CompoundComponentSubcomponentProps> = ({
	as: _as = 'div',
	className = '',
	children,
	prop = false,
	...props
}) => {
	const css = cssClasses(styles.CompoundComponentSubcomponent, className);

	return (
		<As element={_as} className={css} {...props}>
			{children}
		</As>
	);
};

export default CompoundComponentSubcomponent;
