import { CC } from 'react';
import { cssClasses } from '@/utils/functions/misc/cssClasses';
import type { Polymorphic } from '@/utils/types/props/Polymorphic';
import type { Stylable } from '@/utils/types/props/Stylable';
import SelectOption from './components/SelectOption';
import SelectProvider from './contexts/SelectProvider';
import styles from './Select.module.css';

type ComposedProps = Polymorphic & Stylable;

/**
 * Prop types for the <{@link Select} /> component.
 */
export interface SelectProps extends ComposedProps {
	/**
	 * [Optional] The position of the form buttons.
	 * @defaultValue - `false`
	 */
	readonly prop?: boolean;
}

/**
 * Prop types for {@link Select}.
 */
export interface SelectParts {
	/**
	 * [Optional] The position of the form buttons.
	 * @defaultValue - `false`
	 */
	Option: typeof SelectOption;
}

/**
 * @TODO - A short description of the component here.
 */
export const Select: CC<SelectProps, SelectParts> = ({
	as: As = 'div',
	className = '',
	children,
	prop = false,
	...props
}) => {
	const css = cssClasses(styles.select, className);

	return (
		<SelectProvider value={{ prop }}>
			<As className={css} {...props}>
				{children}
			</As>
		</SelectProvider>
	);
};

Select.Option = SelectOption;

export default Select;
