import { forwardRef, memo, useRef } from 'react';
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
import type { Roundable } from '@app/utils/types/props/Roundable';
import type { Sizable } from '@app/utils/types/props/Sizable';
import type { Stylable } from '@app/utils/types/props/Stylable';
import type { Valuable } from '@app/utils/types/props/Valuable';
import { CC } from '@app/utils/types/react/CC';
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
		as: _as = 'div',
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
		onPressUp = noop,
		onPressUpCapture = noop,
		...extraProps
	}) => {
		const As = useSemanticAsProp({ as: _as });
		const inputRef = useRef(null);

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
			onPressUp,
			onPressUpCapture,
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
