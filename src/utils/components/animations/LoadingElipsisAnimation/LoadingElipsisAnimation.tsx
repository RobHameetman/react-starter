import { FC } from 'react';
import type { Stylable } from '@/utils/types/props/Stylable';
import styles from './LoadingElipsisAnimation.module.css';

/**
 * Prop types for the {@link LoadingElipsisAnimation} component.
 */
export type LoadingElipsisAnimationProps = Stylable;

/**
 * An animation of three dots that appear one after the other to indicate a
 * loading state.
 */
export const LoadingElipsisAnimation: FC<LoadingElipsisAnimationProps> = ({
	className = '',
	...props
}) => (
	<span className={`${styles.dots}${className}`} {...props}>
		<span className={`${styles.dot} ${styles.dot1}`}>.</span>
		<span className={`${styles.dot} ${styles.dot2}`}>.</span>
		<span className={`${styles.dot} ${styles.dot3}`}>.</span>
	</span>
);
