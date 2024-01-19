import { $FC } from 'react';
import { cssClasses } from '@app/utils/functions/misc/cssClasses';
import { useSemanticAsProp } from '@app/utils/hooks/react/useSemanticAsProp';
import type { Polymorphic } from '@app/utils/types/props/Polymorphic';
import type { Stylable } from '@app/utils/types/props/Stylable';
import styles from './NewComponent.module.css';

type ComposedProps = Polymorphic & Stylable;

/**
 * Prop types for {@link NewComponent}.
 */
export interface NewComponentProps extends ComposedProps {
	/**
	 * [Optional] The position of the form buttons.
	 * @defaultValue - `false`
	 */
	readonly prop?: boolean;
}

/**
 * @TODO - A short description of the component here.
 */
export const NewComponent: $FC<NewComponentProps> = ({
	as: _as = 'div',
	className = '',
	children,
	prop = false,
	...props
}) => {
	const As = useSemanticAsProp({ as: _as });
	const css = cssClasses(styles.newComponent, className);

	return (
		<As className={css} {...props}>
			{children}
		</As>
	);
};
