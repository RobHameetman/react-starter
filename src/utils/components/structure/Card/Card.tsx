import { useRef } from 'react';
import { cssClasses } from '@/utils/functions/misc/cssClasses';
import { noop } from '@/utils/functions/misc/noop';
import { useSemanticAsProp } from '@/utils/hooks/react/useSemanticAsProp';
import { usePressEvents } from '@/utils/hooks/react/usePressEvents/usePressEvents';
import type { Expansible } from '@/utils/types/props/Expansible';
import type { Hoverable } from '@/utils/types/props/Hoverable';
import type { Identifiable } from '@/utils/types/props/Identifiable';
import type { Polymorphic } from '@/utils/types/props/Polymorphic';
import type { Pressable } from '@/utils/types/props/Pressable';
import type { Stylable } from '@/utils/types/props/Stylable';
import { CC } from '@/utils/types/react/CC';
import {
	CardBody,
	CardDivider,
	CardFooter,
	CardHeader,
	CardImage,
} from './components';
import { CardVariant, CardVariants } from './enums';
import { useButtonAnimations } from './hooks';
import styles from './Card.module.css';

/**
 * Compositional prop types for the {@link Card} component.
 */
type ComposedProps = Expansible &
	Hoverable &
	Identifiable &
	Polymorphic &
	Pressable &
	Stylable;

/**
 * Prop types for the {@link Card} component.
 */
export interface CardProps extends ComposedProps {
	/**
	 * [Optional] Determines whether the card can be hovered by the user.
	 * @defaultValue - `false`
	 */
	readonly hoverable?: boolean;

	/**
	 * [Optional] Determines whether the card can be pressed by the user.
	 * @defaultValue - `false`
	 */
	readonly pressable?: boolean;

	/**
	 * [Optional] The stylistic variant of the card.
	 * @defaultValue - `'bordered'`
	 */
	readonly variant?: CardVariant;
}

export interface CardComponents {
	Body: typeof CardBody;
	Divider: typeof CardDivider;
	Footer: typeof CardFooter;
	Header: typeof CardHeader;
	Image: typeof CardImage;
}

export const Card: CC<CardComponents, CardProps> = ({
	as: _as = 'div',
	className = '',
	children,
	fullWidth = false,
	hoverable = false,
	id = '',
	pressable = false,
	variant = CardVariants.bordered,
	onPress = noop,
	onPressCapture = noop,
	...props
}) => {
	const As = useSemanticAsProp({ as: _as });
	const ref = useRef<typeof As>(null);

	const { triggerAnimation } = useButtonAnimations({
		type: 'ripple',
	});

	const pressEvents = usePressEvents({
		disabled: !pressable,
		onPress: (e) => {
			triggerAnimation(e);
			onPress(e);
		},
		onPressCapture,
	});

	const css = cssClasses(
		styles.card,
		styles[variant],
		{ [styles.fullWidth]: fullWidth },
		className,
	);

	return (
		<As
			className={css}
			id={id}
			role="region"
			tabIndex={!pressable ? -1 : 0}
			ref={ref}
			{...pressEvents}
			{...props}
		>
			{children}
		</As>
	);
};

Card.Body = CardBody;
Card.Divider = CardDivider;
Card.Footer = CardFooter;
Card.Header = CardHeader;
Card.Image = CardImage;
