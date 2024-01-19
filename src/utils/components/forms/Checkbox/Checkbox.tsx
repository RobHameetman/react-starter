import { useRef, useState } from 'react';
import { Intents } from '@app/theme/enums/Intents';
import { Sizes } from '@app/theme/enums/Sizes';
import { prefersReducedMotion } from '@app/utils/functions/accessibility/prefersReducedMotion';
import { isString } from '@app/utils/functions/check/js/core/isString';
import { cssClasses } from '@app/utils/functions/misc/cssClasses';
import { noop } from '@app/utils/functions/misc/noop';
import { withId } from '@app/utils/hocs/withId';
import { useControlProp } from '@app/utils/hooks/react/useControlProp';
import { useSemanticAsProp } from '@app/utils/hooks/react/useSemanticAsProp';
import { useFocusEvents } from '@app/utils/hooks/react/useFocusEvents';
import { useHoverEvents } from '@app/utils/hooks/react/useHoverEvents';
import { usePressEvents } from '@app/utils/hooks/react/usePressEvents';
import type { Accessible } from '@app/utils/types/props/Accessible';
import type { Animatable } from '@app/utils/types/props/Animatable';
import type { Changeable } from '@app/utils/types/props/Changeable';
import type { Disablable } from '@app/utils/types/props/Disablable';
import type { Focusable } from '@app/utils/types/props/Focusable';
import type { Hoverable } from '@app/utils/types/props/Hoverable';
import type { Identifiable } from '@app/utils/types/props/Identifiable';
import type { Intentable } from '@app/utils/types/props/Intentable';
import type { Nameable } from '@app/utils/types/props/Nameable';
import type { Polymorphic } from '@app/utils/types/props/Polymorphic';
import type { Pressable } from '@app/utils/types/props/Pressable';
import type { Requirable } from '@app/utils/types/props/Requirable';
import type { Sizable } from '@app/utils/types/props/Sizable';
import type { Stylable } from '@app/utils/types/props/Stylable';
import type { Valuable } from '@app/utils/types/props/Valuable';
import { CC } from '@app/utils/types/react/CC';
import { CheckboxGroup } from './components';
import {
	useCheckboxContext,
	useCheckboxInputHandlers,
	useSyncToGroupState,
} from './hooks';
import styles from './Checkbox.module.css';

/**
 * Compositional prop types for the {@link Checkbox} component.
 */
type ComposedProps = Accessible &
	Animatable &
	Changeable &
	Disablable &
	Focusable &
	Hoverable &
	Identifiable &
	Intentable &
	Nameable &
	Polymorphic &
	Pressable &
	Requirable &
	Sizable &
	Stylable &
	Valuable;

/**
 * Prop types for the {@link Checkbox} component.
 */
export interface CheckboxProps extends ComposedProps {
	/**
	 * [Optional] Manage the checkbox state externally.
	 * @defaultValue - `false`
	 */
	readonly checked?: boolean;

	/**
	 * [Optional] Displays a dash instead of a check to show an indeterminate
	 * state. An example of this might be a checkbox group where some but not all
	 * of the checkboxes are checked. If you had an "All" checkbox to check or
	 * uncheck the entire group, it would be indeterminate when some but not all
	 * of the checkboxes are checked.
	 * @defaultValue - `false`
	 */
	readonly indeterminate?: boolean;

	/**
	 * [Optional] The checkbox label which is displayed next to the checkbox.
	 * @defaultValue - `''`
	 */
	readonly label?: string;

	/**
	 * [Optional] Disallow changes in state from user interaction.
	 * @defaultValue - `false`
	 */
	readonly readonly?: boolean;

	/**
	 * [Optional] Displays a line through the checkbox label.
	 * @defaultValue - `false`
	 */
	readonly strikethrough?: boolean;
}

export interface CheckboxComponents {
	Group: typeof CheckboxGroup;
}

/**
 * @TODO - A short description of the component here.
 */
export const Checkbox: CC<CheckboxComponents, CheckboxProps> = withId(
	({
		as: _as = 'div',
		animated = !prefersReducedMotion(),
		checked: _checked = false,
		children,
		className = '',
		disabled: _disabled = false,
		id,
		indeterminate: _indeterminate = false,
		intent = Intents.none,
		label = '',
		name = id,
		readonly: _readonly = false,
		required: _required = false,
		size = Sizes.md,
		strikethrough: _strikethrough = false,
		tabIndex = 0,
		value: _value = isString(children) ? children : name,
		onClick = noop,
		onChange = noop,
		onChangeCapture = noop,
		onPress = noop,
		...extraProps
	}) => {
		const As = useSemanticAsProp({ as: _as });
		const inputRef = useRef<HTMLInputElement>(null);

		const { getGroupValue = () => null } = useCheckboxContext();

		const [checked, setChecked] = useControlProp(_checked);
		const [indeterminate, setIndeterminate] = useControlProp(_indeterminate);
		const [disabled] = useControlProp(_disabled);
		const [readonly] = useControlProp(_readonly);
		const [required] = useControlProp(_required);
		const [strikethrough] = useControlProp(_strikethrough);
		const [value] = useControlProp(getGroupValue() ?? _value);

		const { handleChange, handleInput } = useCheckboxInputHandlers({
			disabled: disabled || readonly,
			indeterminate,
			value: _value,
			onChange,
			setChecked,
			setIndeterminate,
		});

		const [rendering, setRendering] = useState(false);

		const pressEvents = usePressEvents({
			disabled: disabled || readonly,
			ignore: ['click'],
			onClick: (e) => {
				if (rendering) {
					setRendering(false);
				} else {
					onClick(e);
				}
			},
			onPress: (e) => {
				if (inputRef.current && !rendering) {
					inputRef.current.click();
					setRendering(true);
				}

				onPress(e);
			},
			...extraProps,
		});

		const focusEvents = useFocusEvents({
			disabled,
			...extraProps,
		});

		const hoverEvents = useHoverEvents({
			disabled,
			...extraProps,
		});

		const css = cssClasses(
			styles.checkbox,
			styles[size],
			styles[intent],
			{
				[styles.notAnimated]: !animated,
				[styles.disabled]: disabled,
			},
			className,
		);

		const labelCss = cssClasses(styles.label, {
			[styles.strikethrough]: checked && strikethrough,
		});

		useSyncToGroupState({
			checked,
			disabled: disabled || readonly,
			indeterminate,
			value: _value,
		});

		return (
			<As
				className={css}
				id={id}
				role="checkbox"
				aria-checked={checked}
				aria-disabled={disabled}
				tabIndex={disabled || tabIndex < 0 ? -1 : tabIndex}
				{...extraProps}
				{...focusEvents}
				{...hoverEvents}
				{...pressEvents}
			>
				<input
					type="checkbox"
					id={`${id}-input`}
					name={name}
					title={name}
					checked={checked}
					value={getGroupValue() !== null ? (getGroupValue() as string) : value}
					disabled={disabled}
					role="hidden"
					tabIndex={-1}
					onChange={handleChange}
					onChangeCapture={onChangeCapture}
					onInput={handleInput}
					ref={inputRef}
				/>
				<div className={styles.container} id={`${id}-container`}>
					<div className={styles.box} id={`${id}-box`} />
					<div className={styles.fill} id={`${id}-fill`} />
					{indeterminate ? (
						<div className={styles.dash} id={`${id}-dashmark`} />
					) : (
						<div className={styles.check} id={`${id}-checkmark`} />
					)}
				</div>
				<label className={labelCss} htmlFor={`${id}-label`}>
					{checked && strikethrough && (
						<div className={styles.strikethrough} id={`${id}-strikethrough`} />
					)}
					{label || children}
					{required && '*'}
				</label>
			</As>
		);
	},
);

Checkbox.Group = CheckboxGroup;
