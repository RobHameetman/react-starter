import { $FC } from 'react';
import { cssClasses } from '@/utils/functions/misc/cssClasses';
import { usePropsWithChildren } from '@/utils/hooks/react/usePropsWithChildren';
import { Disablable } from '@/utils/types/props/Disablable';
import { Intentable } from '@/utils/types/props/Intentable';
import { Polymorphic } from '@/utils/types/props/Polymorphic';
import { Sizable } from '@/utils/types/props/Sizable';
import type { Stylable } from '@/utils/types/props/Stylable';
import { ButtonProvider } from '../../contexts/ButtonProvider';
import type { ButtonProps } from '../../Button';
import styles from './ButtonGroup.module.css';

/**
 * Compositional prop types for the {@link ButtonGroup} component.
 */
type ComposedProps = Pick<ButtonProps, 'align' | 'auto' | 'fill'> &
	Disablable &
	Intentable &
	Polymorphic &
	Sizable &
	Stylable;

/**
 * Prop types for the {@link ButtonGroup} component.
 */
export interface ButtonGroupProps extends ComposedProps {
	/**
	 * [Optional] Determines the buttons in the group may be toggled between
	 * active and inactive states. If a group of buttons are toggleable, each
	 * `<Button />` must have a unique `id` prop for this feature to work.
	 * @defaultValue - `false`
	 */
	readonly toggleable?: boolean;

	/**
	 * [Optional] Determines the alignment of the buttons.
	 * @defaultValue - `false`
	 */
	readonly vertical?: boolean;
}

/**
 * @TODO - A short description of the component here.
 */
export const ButtonGroup: $FC<ButtonGroupProps> = ({
	align,
	auto,
	as: As = 'div',
	className = '',
	children: _children,
	disabled,
	fill,
	intent,
	size,
	toggleable = false,
	vertical = false,
	...props
}) => {
	const css = cssClasses(
		'buttonGroup',
		styles.buttonGroup,
		{ vertical },
		className,
	);

	const children = usePropsWithChildren({
		children: _children,
		props: { align, auto, disabled, fill, intent, size },
	});

	return (
		<ButtonProvider toggle={toggleable}>
			<As className={css} {...props}>
				{children}
			</As>
		</ButtonProvider>
	);
};
