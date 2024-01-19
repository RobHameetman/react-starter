import { cssClasses } from '@app/utils/functions/misc/cssClasses';
import { useSemanticAsProp } from '@app/utils/hooks/react/useSemanticAsProp';
import { Polymorphic } from '@app/utils/types/props/Polymorphic';
import type { Stylable } from '@app/utils/types/props/Stylable';
import { CC } from '@app/utils/types/react/CC';
import styles from './Dropover.module.css';

type ComposedProps = Polymorphic & Stylable;

/**
 * Prop types for {@link Dropover}.
 */
export interface DropoverProps extends ComposedProps {
	/**
	 * [Optional] The position of the form buttons.
	 * @defaultValue - `false`
	 */
	readonly prop?: boolean;
}

export interface DropoverComponents {
	Content: typeof DropoverContent;
	Item: typeof DropoverItem;
	Section: typeof DropoverSection;
	Trigger: typeof DropoverTrigger;
}

/**
 * @TODO - A short description of the component here.
 */
export const Dropover: CC<DropoverComponents, DropoverProps> = ({
	as: _as = 'div',
	className = '',
	children,
	prop = false,
	...props
}) => {
	const As = useSemanticAsProp({ as: _as });
	const css = cssClasses(styles.dropover, className);

	return (
		<As className={css} {...props}>
			{children}
		</As>
	);
};

Dropover.Content = DropoverContent;
Dropover.Item = DropoverItem;
Dropover.Section = DropoverSection;
Dropover.Trigger = DropoverTrigger;
