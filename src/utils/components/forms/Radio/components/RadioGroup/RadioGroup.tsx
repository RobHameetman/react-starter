import { $FC } from 'react';
import { prefersReducedMotion } from '@/utils/functions/accessibility/prefersReducedMotion';
import { isString } from '@/utils/functions/check/js/core/isString';
import { cssClasses } from '@/utils/functions/misc/cssClasses';
import { withId } from '@/utils/hocs/withId';
import { usePropsWithChildren } from '@/utils/hooks/react/usePropsWithChildren';
import type { Animatable } from '@/utils/types/props/Animatable';
import type { Changeable } from '@/utils/types/props/Changeable';
import type { Disablable } from '@/utils/types/props/Disablable';
import type { Identifiable } from '@/utils/types/props/Identifiable';
import type { Intentable } from '@/utils/types/props/Intentable';
import type { Labelable } from '@/utils/types/props/Labelable';
import type { Nameable } from '@/utils/types/props/Nameable';
import type { Polymorphic } from '@/utils/types/props/Polymorphic';
import type { Pressable } from '@/utils/types/props/Pressable';
import type { Roundable } from '@/utils/types/props/Roundable';
import type { Sizable } from '@/utils/types/props/Sizable';
import type { Stylable } from '@/utils/types/props/Stylable';
import type { Valuable } from '@/utils/types/props/Valuable';
import { handlerPropsOf } from '@/utils/types/react/HandlerPropsOf';
import { propsWithoutHandlers } from '@/utils/types/react/PropsWithoutHandlers';
import { RadioProvider } from '../../contexts/RadioProvider';
import type { RadioProps } from '../../Radio';
import styles from './RadioGroup.module.css';

/**
 * Compositional prop types for the {@link RadioGroup} component.
 */
type ComposedProps = Pick<RadioProps, 'label' | 'readonly'> &
	Animatable &
	Changeable &
	Disablable &
	Identifiable &
	Intentable &
	Labelable &
	Nameable &
	Pressable &
	Polymorphic &
	Roundable &
	Sizable &
	Stylable &
	Valuable;

/**
 * Prop types for the {@link RadioGroup} component.
 */
export interface RadioGroupProps extends ComposedProps {
	/**
	 * [Optional] If `true`, sets the styling of the radio group to be vertical.
	 * @defaultValue - `false`
	 */
	readonly vertical?: boolean;
}

/**
 * @TODO - A short description of the component here.
 */
export const RadioGroup: $FC<RadioGroupProps> = withId(
	({
		animated = !prefersReducedMotion(),
		as: As = 'fieldset',
		className = '',
		children: _children,
		disabled,
		id,
		intent,
		label = '',
		name = id,
		readonly,
		size,
		value,
		vertical = false,
		...remainingProps
	}) => {
		const css = cssClasses(
			'radioGroup',
			styles.radioGroup,
			{ vertical },
			className,
		);

		const labelCss = cssClasses(styles.label, styles[size || 'md']);

		const eventHandlers = handlerPropsOf(remainingProps);
		const props = propsWithoutHandlers(remainingProps);

		const children = usePropsWithChildren({
			children: _children,
			criteria: {
				checked: (childProps) => {
					const childValue =
						childProps.value ||
						(isString(childProps.children)
							? childProps.children
							: childProps.name);

					return value === childValue || null;
				},
			},
			props: {
				animated,
				checked: false,
				disabled,
				intent,
				readonly,
				size,
				...eventHandlers,
			},
		});

		return (
			<RadioProvider value={value}>
				<As className={css} id={id} name={name} role="radiogroup" {...props}>
					<legend id={`${id}-label`} className={labelCss}>
						{label}
					</legend>
					{children}
				</As>
			</RadioProvider>
		);
	},
);
