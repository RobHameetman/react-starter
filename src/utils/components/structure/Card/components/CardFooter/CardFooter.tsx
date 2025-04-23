import { $FC } from 'react';
import { cssClasses } from '@/utils/functions/misc/cssClasses';
import { Polymorphic } from '@/utils/types/props/Polymorphic';
import type { Stylable } from '@/utils/types/props/Stylable';
import styles from './CardFooter.module.css';

/**
 * Compositional prop types for the {@link CardFooter} component.
 */
type ComposedProps = Polymorphic & Stylable;

/**
 * Prop types for the {@link CardFooter} component.
 */
export interface CardFooterProps extends ComposedProps {
	/**
	 * [Optional] Determines the alignment of the buttons.
	 * @defaultValue - `false`
	 */
	readonly vertical?: boolean;
}

/**
 * @TODO - A short description of the component here.
 */
export const CardFooter: $FC<CardFooterProps> = ({
	as: As = 'div',
	className = '',
	children,
	...props
}) => {
	const css = cssClasses(styles.cardFooter, className);

	return (
		<As className={css} {...props}>
			{children}
		</As>
	);
};
