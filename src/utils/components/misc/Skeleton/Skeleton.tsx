import { forwardRef } from 'react';
import { cssClasses } from '@/utils/functions/misc/cssClasses';
import type { Polymorphic } from '@/utils/types/props/Polymorphic';
import type { Stylable } from '@/utils/types/props/Stylable';
import styles from './Skeleton.module.css';

type ComposedProps = Polymorphic & Stylable;

/**
 * Prop types for {@link Skeleton}.
 */
export interface SkeletonProps extends ComposedProps {
	/**
	 * [Optional] The position of the form buttons.
	 * @defaultValue - `false`
	 */
	readonly prop?: boolean;
}

/**
 * @TODO - A short description of the component here.
 */
export const Skeleton = forwardRef<HTMLElement, SkeletonProps>(({
	as: As = 'div',
	className = '',
	children,
	prop = false,
	...props
}, ref) => {
	const css = cssClasses(styles.Skeleton, className);

	return (
		<As className={css} ref={ref} {...props}>
			{children}
		</As>
	);
});

export default Skeleton;
