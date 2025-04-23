import { $FC } from 'react';
import { cssClasses } from '@/utils/functions/misc/cssClasses';
import { Polymorphic } from '@/utils/types/props/Polymorphic';
import type { Stylable } from '@/utils/types/props/Stylable';
import styles from './CardDivider.module.css';

/**
 * Compositional prop types for the {@link CardDivider} component.
 */
type ComposedProps = Polymorphic & Stylable;

/**
 * Prop types for the {@link CardDivider} component.
 */
export interface CardDividerProps extends ComposedProps {
	/**
	 * [Optional] Determines the alignment of the buttons.
	 * @defaultValue - `false`
	 */
	readonly vertical?: boolean;
}

/**
 * @TODO - A short description of the component here.
 */
export const CardDivider: $FC<CardDividerProps> = ({
	as: As = 'hr',
	className = '',
	children,
	...props
}) => {
	const css = cssClasses(styles.cardDivider, className);

	return (
		<As className={css} role="seperator" {...props}>
			{children}
		</As>
	);
};
