import { $FC } from 'react';
import { cssClasses } from '@/utils/functions/misc/cssClasses';
import { Polymorphic } from '@/utils/types/props/Polymorphic';
import type { Stylable } from '@/utils/types/props/Stylable';
import styles from './CardBody.module.css';

/**
 * Compositional prop types for the {@link CardBody} component.
 */
type ComposedProps = Polymorphic & Stylable;

/**
 * Prop types for the {@link CardBody} component.
 */
export interface CardBodyProps extends ComposedProps {
	/**
	 * [Optional] Determines whether the card can be hovered by the user.
	 * @defaultValue - `false`
	 */
	readonly hoverable?: boolean;
}

/**
 * Wraps the primary content within a `<Card />` component.
 */
export const CardBody: $FC<CardBodyProps> = ({
	as: As = 'div',
	className = '',
	children,
	...props
}) => {
	const css = cssClasses(styles.cardBody, className);

	return (
		<As className={css} {...props}>
			{children}
		</As>
	);
};
