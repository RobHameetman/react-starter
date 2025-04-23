import { forwardRef, memo, useRef } from 'react';
import { Intents } from '@/theme/enums/Intents';
import { Sizes } from '@/theme/enums/Sizes';
import { prefersReducedMotion } from '@/utils/functions/accessibility/prefersReducedMotion';
import { isString } from '@/utils/functions/check/js/core/isString';
import { cssClasses } from '@/utils/functions/misc/cssClasses';
import { noop } from '@/utils/functions/misc/noop';
import { withId } from '@/utils/hocs/withId';
import { useControlProp } from '@/utils/hooks/react/useControlProp';
import { useFocusEvents } from '@/utils/hooks/react/useFocusEvents';
import { useHoverEvents } from '@/utils/hooks/react/useHoverEvents';
import { usePressEvents } from '@/utils/hooks/react/usePressEvents';
import type { Accessible } from '@/utils/types/props/Accessible';
import type { Animatable } from '@/utils/types/props/Animatable';
import type { Changeable } from '@/utils/types/props/Changeable';
import type { Disablable } from '@/utils/types/props/Disablable';
import type { Focusable } from '@/utils/types/props/Focusable';
import type { Hoverable } from '@/utils/types/props/Hoverable';
import type { Identifiable } from '@/utils/types/props/Identifiable';
import type { Intentable } from '@/utils/types/props/Intentable';
import type { Nameable } from '@/utils/types/props/Nameable';
import type { Polymorphic } from '@/utils/types/props/Polymorphic';
import type { Pressable } from '@/utils/types/props/Pressable';
import type { Requirable } from '@/utils/types/props/Requirable';
import type { Roundable } from '@/utils/types/props/Roundable';
import type { Sizable } from '@/utils/types/props/Sizable';
import type { Stylable } from '@/utils/types/props/Stylable';
import type { Valuable } from '@/utils/types/props/Valuable';
import { CC } from '@/utils/types/react/CC';
import { RadioGroup } from './components';
import { useRadioContext, useRadioInputHandlers } from './hooks';
import styles from './Radio.module.css';

/**
 * Compositional prop types for the {@link Radio} component.
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
	Roundable &
	Sizable &
	Stylable &
	Valuable;

/**
 * Prop types for the {@link Radio} component.
 */
export interface RadioProps extends ComposedProps {
	/**
	 * [Optional] Manage the Radio state externally.
	 * @defaultValue - `false`
	 */
	readonly checked?: boolean;

	/**
	 * [Optional] The Radio label which is displayed next to the Radio.
	 * @defaultValue - `''`
	 */
	readonly label?: string;

	/**
	 * [Optional] Disallow changes in state from user interaction.
	 * @defaultValue - `false`
	 */
	readonly readonly?: boolean;
}

export interface RadioComponents {
	Group: typeof RadioGroup;
}

/**
 * @TODO - A short description of the component here.
 */
export const Radio = withId<CC<RadioComponents, RadioProps>>(
	({
		as: As = 'div',
		animated = !prefersReducedMotion(),
		checked: _checked = false,
		children,
		className = '',
		disabled: _disabled = false,
		id,
		intent = Intents.none,
		label = '',
		name = id,
		readonly: _readonly = false,
		required: _required = false,
		rounded = false,
		size = Sizes.md,
		tabIndex = 0,
		value: _value = isString(children) ? children : name,
		onChange = noop,
		onChangeCapture = noop,
		onPress = noop,
		onPressCapture = noop,
		onRelease = noop,
		onReleaseCapture = noop,
		...extraProps
	}) => {
		const inputRef = useRef<HTMLInputElement>(null);

		const { getGroupValue = () => null, groupValueIs = () => false } =
			useRadioContext();

		const [checked, setChecked] = useControlProp(
			_checked || groupValueIs(_value),
		);

		const [disabled] = useControlProp(_disabled);
		const [readonly] = useControlProp(_readonly);
		const [required] = useControlProp(_required);
		const [value] = useControlProp(getGroupValue() ?? _value);

		const { handleChange, handleInput } = useRadioInputHandlers({
			disabled: disabled || readonly,
			value: _value,
			onChange,
			setChecked,
		});

		const pressEvents = usePressEvents({
			disabled: disabled || readonly,
			onPress: (e) => {
				if (inputRef.current) {
					inputRef.current.click();
				}

				onPress(e);
			},
			onPressCapture,
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
			styles.radio,
			styles[size],
			styles[intent],
			{
				[styles.notAnimated]: !animated,
				[styles.disabled]: disabled,
				[styles.rounded]: rounded,
			},
			className,
		);

		return (
			<As
				className={css}
				id={id}
				role="radio"
				aria-checked={checked}
				aria-disabled={disabled}
				tabIndex={disabled || tabIndex < 0 ? -1 : tabIndex}
				{...extraProps}
				{...focusEvents}
				{...hoverEvents}
				{...pressEvents}
			>
				<input
					type="radio"
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
				</div>
				<label className={styles.label} htmlFor={`${id}-label`}>
					{label || children}
					{required && '*'}
				</label>
			</As>
		);
	},
);

Radio.Group = RadioGroup;
