import { $FC } from 'react';
import { cssClasses } from '@/utils/functions/misc/cssClasses';
import type { Polymorphic } from '@/utils/types/props/Polymorphic';
import type { Stylable } from '@/utils/types/props/Stylable';
import { useSelectContext } from '../../hooks';
import styles from './SelectOption.module.css';

type ComposedProps = Polymorphic & Stylable;

/**
 * Prop types for the <{@link SelectOption} /> component.
 */
export interface SelectOptionProps extends ComposedProps {
	/**
	 * [Optional] The position of the form buttons.
	 * @defaultValue - `false`
	 */
	readonly prop?: boolean;
}

/**
 * @TODO - A short description of the component here.
 */
export const SelectOption: $FC<SelectOptionProps> = ({
	as: As = 'div',
	className = '',
	children,
	prop = false,
	...props
}) => {
	const _sharedState = useSelectContext();
	const css = cssClasses(styles.selectOption, className);

	return (
		<As className={css} {...props}>
			{children}
		</As>
	);
};

export default SelectOption;
