import { $FC } from 'react';
import { prefersReducedMotion } from '@app/utils/functions/accessibility/prefersReducedMotion';
import { isFunction } from '@app/utils/functions/check/js/core/isFunction';
import { isString } from '@app/utils/functions/check/js/core/isString';
import { cssClasses } from '@app/utils/functions/misc/cssClasses';
import { noop } from '@app/utils/functions/misc/noop';
import { uniqueId } from '@app/utils/functions/misc/uniqueId';
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
import type { Sizable } from '@app/utils/types/props/Sizable';
import type { Stylable } from '@app/utils/types/props/Stylable';
import type { Valuable } from '@app/utils/types/props/Valuable';
import { handlerPropsOf } from '@app/utils/types/react/HandlerPropsOf';
import { propsWithoutHandlers } from '@app/utils/types/react/PropsWithoutHandlers';
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
		as: _as = 'fieldset',
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
		const As = useSemanticAsProp({ as: _as });

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
