import { ReactElement, useRef } from 'react';
import { Alignment, isAlignment } from '@app/theme/enums/Alignments';
import { Intents } from '@app/theme/enums/Intents';
import { Sizes } from '@app/theme/enums/Sizes';
import { prefersReducedMotion } from '@app/utils/functions/accessibility/prefersReducedMotion';
import { cssClasses } from '@app/utils/functions/misc/cssClasses';
import { noop } from '@app/utils/functions/misc/noop';
import { uniqueId } from '@app/utils/functions/misc/uniqueId';
import { capitalize } from '@app/utils/functions/string/capitalize';
import { useControlProp } from '@app/utils/hooks/react/useControlProp';
import { useSemanticAsProp } from '@app/utils/hooks/react/useSemanticAsProp';
import { useFocusEvents } from '@app/utils/hooks/react/useFocusEvents';
import { usePressEvents } from '@app/utils/hooks/react/usePressEvents';
import type { Accessible } from '@app/utils/types/props/Accessible';
import type { Animatable } from '@app/utils/types/props/Animatable';
import type { Disablable } from '@app/utils/types/props/Disablable';
import type { Focusable } from '@app/utils/types/props/Focusable';
import type { Expansible } from '@app/utils/types/props/Expansible';
import type { Identifiable } from '@app/utils/types/props/Identifiable';
import type { Intentable } from '@app/utils/types/props/Intentable';
import type { Polymorphic } from '@app/utils/types/props/Polymorphic';
import type { Pressable } from '@app/utils/types/props/Pressable';
import type { Roundable } from '@app/utils/types/props/Roundable';
import type { Sizable } from '@app/utils/types/props/Sizable';
import type { Stylable } from '@app/utils/types/props/Stylable';
import { CC } from '@app/utils/types/react/CC';
import { ButtonGroup } from './components';
import { ButtonFill, ButtonFills } from './enums';
import { useButtonAnimations, useButtonContext } from './hooks';
import styles from './Button.module.css';

/**
 * Compositional prop types for the {@link Button} component.
 */
type ComposedProps = Accessible &
	Animatable &
	Disablable &
	Focusable &
	Expansible &
	Identifiable &
	Intentable &
	Polymorphic &
	Pressable &
	Roundable &
	Sizable &
	Stylable;

/**
 * Prop types for the {@link Button} component.
 */
export interface ButtonProps extends ComposedProps {
	/**
	 * [Optional] Determines if the button will be in an active state.
	 * @defaultValue - `undefined`
	 */
	readonly active?: boolean;

	/**
	 * [Optional] The alignment of the button content.
	 * @defaultValue - `'center'`
	 */
	readonly align?: Alignment;

	/**
	 * [Optional] Auto-scale the button to the size of the content.
	 * @defaultValue - `false`
	 */
	readonly auto?: boolean;

	/**
	 * [Optional] The size of the box-shadow to display.
	 * @defaultValue - `0`
	 */
	readonly elevation?: number;

	/**
	 * [Optional] he stylized component variant to display.
	 * @defaultValue - `'filled'`
	 */
	readonly fill?: ButtonFills | ButtonFill;

	/**
	 * [Optional] An icon to display next to the text.
	 * @defaultValue - `null`
	 */
	readonly icon?: ReactElement | null;

	/**
	 * [Optional] Use the `type="submit"` attribute.
	 * @defaultValue - `false`
	 */
	readonly submit?: boolean;
}

export interface ButtonComponents {
	Group: typeof ButtonGroup;
}

export const Button: CC<ButtonComponents, ButtonProps> = ({
	active: _active,
	align = 'center',
	animated = !prefersReducedMotion(),
	auto = false,
	as: _as = 'button',
	className = '',
	children,
	disabled: _disabled = false,
	elevation = 0,
	fill = ButtonFills.filled,
	fullWidth = false,
	icon: _icon = null,
	id = uniqueId(),
	intent: _intent = Intents.none,
	rounded = false,
	submit = false,
	size = Sizes.md,
	tabIndex: _tabIndex = 0,
	onBlur = noop,
	onBlurCapture = noop,
	onFocus = noop,
	onFocusCapture = noop,
	onPress = noop,
	onPressCapture = noop,
	onPressChange = noop,
	onPressChangeCapture = noop,
	onPressEnd = noop,
	onPressEndCapture = noop,
	onPressStart = noop,
	onPressStartCapture = noop,
	onPressUp = noop,
	onPressUpCapture = noop,
	...props
}) => {
	const As = useSemanticAsProp({ as: _as });
	const ref = useRef<typeof As>(null);

	const { active = null, toggle = false, activate = noop } = useButtonContext();

	const [disabled] = useControlProp(_disabled);
	const [icon] = useControlProp(_icon);
	const [intent] = useControlProp(_intent);
	const [tabIndex] = useControlProp(_tabIndex);

	const { triggerAnimation } = useButtonAnimations({
		disabled: !animated,
		type: 'ripple',
	});

	const focusEvents = useFocusEvents({
		disabled,
		onBlur,
		onBlurCapture,
		onFocus,
		onFocusCapture,
	});

	const pressEvents = usePressEvents({
		disabled,
		onPress: (e) => {
			activate(e);
			triggerAnimation(e);
			onPress(e);
		},
		onPressCapture,
		onPressChange,
		onPressChangeCapture,
		onPressEnd,
		onPressEndCapture,
		onPressStart,
		onPressStartCapture,
		onPressUp,
		onPressUpCapture,
	});

	const css = cssClasses(
		styles.button,
		{
			[styles[`align${capitalize(align)}`]]:
				align !== 'center' && isAlignment(align),
			[styles[size]]: size !== 'md',
			[`shadow-${elevation}`]: elevation,
			[styles.auto]: auto || !children,
			[styles.rounded]: rounded,
			[styles.fullWidth]: fullWidth,
			active: _active || (toggle && active === id),
			disabled,
		},
		styles[intent],
		styles[fill],
		className,
	);

	const iconCss = cssClasses(styles.icon, {
		[styles.iconSpacing]: children,
	});

	return (
		<As
			className={css}
			id={id}
			role="button"
			disabled={disabled}
			type={submit ? 'submit' : 'button'}
			tabIndex={disabled || tabIndex < 0 ? -1 : tabIndex}
			aria-pressed={
				_active !== undefined || toggle ? _active || active === id : null
			}
			ref={ref}
			{...focusEvents}
			{...pressEvents}
			{...props}
		>
			{icon && <span className={iconCss}>{icon}</span>}
			<span className={styles.text}>{children}</span>
		</As>
	);
};

Button.Group = ButtonGroup;
