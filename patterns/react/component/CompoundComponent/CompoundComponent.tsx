import { CC } from 'react';
import { cssClasses } from '@/utils/functions/misc/cssClasses';
import type { Polymorphic } from '@/utils/types/props/Polymorphic';
import type { Stylable } from '@/utils/types/props/Stylable';
import CompoundComponentProvider from './contexts/CompoundComponentProvider';
import CompoundComponentSubcomponent from './components/CompoundComponentSubcomponent';
import styles from './CompoundComponent.module.css';

/**
 * Compositional prop types for the {@link CompoundComponent} component.
 */
type ComposedProps = Polymorphic & Stylable;

/**
 * Prop types for the <{@link CompoundComponent} /> component.
 */
export interface CompoundComponentProps extends ComposedProps {
	/**
	 * [Optional] The position of the form buttons.
	 * @defaultValue - `false`
	 */
	readonly prop?: boolean;
}

/**
 * Prop types for {@link CompoundComponent}.
 */
export interface CompoundComponentParts {
	/**
	 * [Optional] The position of the form buttons.
	 * @defaultValue - `false`
	 */
	Subcomponent: typeof CompoundComponentSubcomponent;
}

/**
 * @TODO - A short description of the component here.
 */
export const CompoundComponent: CC<CompoundComponentProps, CompoundComponentParts> = ({
	as: As = 'div',
	className = '',
	children,
	prop = false,
	...props
}) => {
	const css = cssClasses(styles.compoundComponent, className);

	return (
		<CompoundComponentProvider value={{ prop }}>
			<As className={css} {...props}>
				{children}
			</As>
		</CompoundComponentProvider>
	);
};

CompoundComponent.Subcomponent = CompoundComponentSubcomponent;

export default CompoundComponent;
