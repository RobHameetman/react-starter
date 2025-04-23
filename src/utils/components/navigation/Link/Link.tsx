import { $FC } from 'react';
import { cssClasses } from '@/utils/functions/misc/cssClasses';
import type { Polymorphic } from '@/utils/types/props/Polymorphic';
import type { Stylable } from '@/utils/types/props/Stylable';
import styles from './Link.module.css';

type ComposedProps = Polymorphic & Stylable;

/**
 * Prop types for {@link Link}.
 */
export interface LinkProps extends ComposedProps {
	/**
	 * [Optional] The position of the form buttons.
	 * @defaultValue - `false`
	 */
	readonly prop?: boolean;
}

/**
 * @TODO - A short description of the component here.
 */
export const Link: $FC<LinkProps> = ({
	as: As = 'a',
	className = '',
	children,
	prop = false,
	...props
}) => {
	const css = cssClasses(styles.Link, className);

	return (
		<As className={css} {...props}>
			{children}
		</As>
	);
};

export default Link;
