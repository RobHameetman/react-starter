import { $FC } from 'react';
import { cssClasses } from '@app/utils/functions/misc/cssClasses';
import { useSemanticAsProp } from '@app/utils/hooks/react/useSemanticAsProp';
import { Polymorphic } from '@app/utils/types/props/Polymorphic';
import type { Stylable } from '@app/utils/types/props/Stylable';
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
	as: _as = 'div',
	className = '',
	children,
	...props
}) => {
	const As = useSemanticAsProp({ as: _as });
	const css = cssClasses(styles.cardBody, className);

	return (
		<As className={css} {...props}>
			{children}
		</As>
	);
};
