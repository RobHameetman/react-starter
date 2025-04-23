import { $FC } from 'react';
import { cssClasses } from '@/utils/functions/misc/cssClasses';
import { Polymorphic } from '@/utils/types/props/Polymorphic';
import type { Stylable } from '@/utils/types/props/Stylable';
import styles from './DropoverSection.module.css';

type ComposedProps = Polymorphic & Stylable;

/**
 * Prop types for {@link DropoverSection}.
 */
export interface DropoverSectionProps extends ComposedProps {
	/**
	 * [Optional] The position of the form buttons.
	 * @defaultValue - `false`
	 */
	readonly prop?: boolean;
}

/**
 * @TODO - A short description of the component here.
 */
export const DropoverSection: $FC<DropoverSectionProps> = ({
	as: As = 'div',
	className = '',
	children,
	prop = false,
	...props
}) => {
	const css = cssClasses(styles.dropoverSection, className);

	return (
		<As className={css} {...props}>
			{children}
		</As>
	);
};

export default DropoverSection;
