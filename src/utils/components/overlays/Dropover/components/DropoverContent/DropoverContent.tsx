import { $FC } from 'react';
import { cssClasses } from '@/utils/functions/misc/cssClasses';
import { useSemanticAsProp } from '@/utils/hooks/react/useSemanticAsProp';
import { Polymorphic } from '@/utils/types/props/Polymorphic';
import type { Stylable } from '@/utils/types/props/Stylable';
import styles from './DropoverContent.module.css';

type ComposedProps = Polymorphic & Stylable;

/**
 * Prop types for {@link DropoverContent}.
 */
export interface DropoverContentProps extends ComposedProps {
	/**
	 * [Optional] The position of the form buttons.
	 * @defaultValue - `false`
	 */
	readonly prop?: boolean;
}

/**
 * @TODO - A short description of the component here.
 */
export const DropoverContent: $FC<DropoverContentProps> = ({
	as: _as = 'div',
	className = '',
	children,
	prop = false,
	...props
}) => {
	const As = useSemanticAsProp({ as: _as });
	const css = cssClasses(styles.dropoverContent, className);

	return (
		<As className={css} {...props}>
			{children}
		</As>
	);
};
