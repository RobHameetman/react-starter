import { $FC } from 'react';
import { cssClasses } from '@/utils/functions/misc/cssClasses';
import type { Stylable } from '@/utils/types/props/Stylable';
import styles from './FormButtons.module.css';

/**
 * Compositional prop types for the {@link FormButtons} component.
 */
type ComposedProps = Stylable;

/**
 * Prop types for the {@link FormButtons} component.
 */
export interface FormButtonsProps extends ComposedProps {
	/**
	 * [Optional] The position of the form buttons.
	 * @defaultValue - `'start'`
	 */
	readonly position?: string;
}

/**
 * A short description of the component here.
 */
export const FormButtons: $FC<FormButtonsProps> = ({
	className = '',
	children,
	position = 'start',
}) => {
	const css = cssClasses(styles.formButtons, className);

	return <div className={css}>{children}</div>;
};
