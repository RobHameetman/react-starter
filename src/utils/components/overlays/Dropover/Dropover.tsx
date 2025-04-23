import { cssClasses } from '@/utils/functions/misc/cssClasses';
import { Polymorphic } from '@/utils/types/props/Polymorphic';
import type { Stylable } from '@/utils/types/props/Stylable';
import { CC } from '@/utils/types/react/CC';
import DropoverContent from './components/DropoverContent';
import DropoverItem from './components/DropoverItem';
import DropoverMenu from './components/DropoverMenu';
import DropoverSection from './components/DropoverSection';
import DropoverTrigger from './components/DropoverTrigger';
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
	Menu: typeof DropoverMenu;
	Section: typeof DropoverSection;
	Trigger: typeof DropoverTrigger;
}

/**
 * @TODO - A short description of the component here.
 */
export const Dropover: CC<DropoverComponents, DropoverProps> = ({
	as: As = 'div',
	className = '',
	children,
	prop = false,
	...props
}) => {
	const css = cssClasses(styles.dropover, className);

	return (
		<As className={css} {...props}>
			{children}
		</As>
	);
};

Dropover.Content = DropoverContent;
Dropover.Item = DropoverItem;
Dropover.Menu = DropoverMenu;
Dropover.Section = DropoverSection;
Dropover.Trigger = DropoverTrigger;
