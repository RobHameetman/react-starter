import { forwardRef, useEffect, useRef } from 'react';
import { Positionable } from '@/utils/types/props/Positionable';
import type { Stylable } from '@/utils/types/props/Stylable';
import styles from './RippleAnimation.module.css';

/**
 * Prop types for the {@link RippleAnimation} component.
 */
export type RippleAnimationProps = Positionable & Stylable;

/**
 * An animation of a circle that expands from a given pointer position and fades
 * in opacity as it expands.
 */
export const RippleAnimation = forwardRef<
	HTMLSpanElement,
	RippleAnimationProps
>(({ className = '', x = 0, y = 0, ...props }) => {
	const ref = useRef<HTMLSpanElement>(null);

	useEffect(() => {
		const { current: $ripple } = ref;

		if ($ripple) {
			/* @TODO: Add a timeout to remove the ripple after a certain amount of time. */
		}
	}, []);

	return (
		<span
			className={`${styles.ripple}${className}`}
			style={{ left: `${x}px`, top: `${y}px` }}
			ref={ref}
			{...props}
		/>
	);
});
