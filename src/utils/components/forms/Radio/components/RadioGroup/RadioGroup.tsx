import { $FC } from 'react';
import { prefersReducedMotion } from '@app/utils/functions/accessibility/prefersReducedMotion';
import { isString } from '@app/utils/functions/check/js/core/isString';
import { cssClasses } from '@app/utils/functions/misc/cssClasses';
import { withId } from '@app/utils/hocs/withId';
import { usePropsWithChildren } from '@app/utils/hooks/react/usePropsWithChildren';
import { useSemanticAsProp } from '@app/utils/hooks/react/useSemanticAsProp';
import type { Animatable } from '@app/utils/types/props/Animatable';
import type { Changeable } from '@app/utils/types/props/Changeable';
import type { Disablable } from '@app/utils/types/props/Disablable';
import type { Identifiable } from '@app/utils/types/props/Identifiable';
import type { Intentable } from '@app/utils/types/props/Intentable';
import type { Labelable } from '@app/utils/types/props/Labelable';
import type { Nameable } from '@app/utils/types/props/Nameable';
import type { Polymorphic } from '@app/utils/types/props/Polymorphic';
import type { Pressable } from '@app/utils/types/props/Pressable';
import type { Roundable } from '@app/utils/types/props/Roundable';
import type { Sizable } from '@app/utils/types/props/Sizable';
import type { Stylable } from '@app/utils/types/props/Stylable';
import type { Valuable } from '@app/utils/types/props/Valuable';
import { handlerPropsOf } from '@app/utils/types/react/HandlerPropsOf';
import { propsWithoutHandlers } from '@app/utils/types/react/PropsWithoutHandlers';
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
		as: _as = 'fieldset',
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
		const As = useSemanticAsProp({ as: _as });

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
