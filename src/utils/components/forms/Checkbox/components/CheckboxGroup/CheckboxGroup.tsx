import { $FC } from 'react';
import { prefersReducedMotion } from '@/utils/functions/accessibility/prefersReducedMotion';
import { isString } from '@/utils/functions/check/js/core/isString';
import { cssClasses } from '@/utils/functions/misc/cssClasses';
import { uniqueId } from '@/utils/functions/misc/uniqueId';
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
import type { Sizable } from '@/utils/types/props/Sizable';
import type { Stylable } from '@/utils/types/props/Stylable';
import type { Valuable } from '@/utils/types/props/Valuable';
import { handlerPropsOf } from '@/utils/types/react/HandlerPropsOf';
import { propsWithoutHandlers } from '@/utils/types/react/PropsWithoutHandlers';
import { CheckboxProvider } from '../../contexts/CheckboxProvider';
import type { CheckboxProps } from '../../Checkbox';
import styles from './CheckboxGroup.module.css';

/**
 * Compositional prop types for the {@link CheckboxGroup} component.
 */
type ComposedProps = Pick<
	CheckboxProps,
	'checked' | 'label' | 'readonly' | 'strikethrough'
> &
	Animatable &
	Changeable &
	Disablable &
	Identifiable &
	Intentable &
	Labelable &
	Nameable &
	Polymorphic &
	Sizable &
	Stylable &
	Valuable<ReadonlyArray<string>>;

/**
 * Prop types for the {@link CheckboxGroup} component.
 */
export interface CheckboxGroupProps extends ComposedProps {
	/**
	 * [Optional] Set the delimiter for the checkbox group values.
	 * @defaultValue - `','`
	 */
	readonly delimiter?: string;

	/**
	 * [Optional] If `true`, sets the styling of the checkbox group to be vertical.
	 * @defaultValue - `false`
	 */
	readonly vertical?: boolean;
}

/**
 * @TODO - A short description of the component here.
 */
export const CheckboxGroup: $FC<CheckboxGroupProps> = withId(
	({
		animated = !prefersReducedMotion(),
		as: As = 'fieldset',
		checked,
		className = '',
		children: _children,
		delimiter = ',',
		disabled,
		id = uniqueId('checkboxGroup'),
		intent,
		label = '',
		name = id,
		readonly,
		size,
		strikethrough,
		value,
		vertical = false,
		...remainingProps
	}) => {
		const css = cssClasses(
			'checkboxGroup',
			styles.checkboxGroup,
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

					return checked || value?.includes(childValue as string) || null;
				},
			},
			props: {
				animated,
				checked,
				disabled,
				intent,
				readonly,
				size,
				strikethrough,
				...eventHandlers,
			},
		});

		return (
			<CheckboxProvider delimiter={delimiter} value={value}>
				<As className={css} id={id} name={name} role="group" {...props}>
					<legend id={`${id}-label`} className={labelCss}>
						{label}
					</legend>
					{children}
				</As>
			</CheckboxProvider>
		);
	},
);
