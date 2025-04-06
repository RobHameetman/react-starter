import { ReactElement, useId, useRef } from 'react';
import { Alignment, isAlignment } from '@/theme/enums/Alignments';
import { Intents } from '@/theme/enums/Intents';
import { Sizes } from '@/theme/enums/Sizes';
import { prefersReducedMotion } from '@/utils/functions/accessibility/prefersReducedMotion';
import { cssClasses } from '@/utils/functions/misc/cssClasses';
import { noop } from '@/utils/functions/misc/noop';
import { capitalize } from '@/utils/functions/string/capitalize';
import { useControlProp } from '@/utils/hooks/react/useControlProp';
import { useSemanticAsProp } from '@/utils/hooks/react/useSemanticAsProp';
import { useFocusEvents } from '@/utils/hooks/react/useFocusEvents';
import { usePressEvents } from '@/utils/hooks/react/usePressEvents';
import type { Accessible } from '@/utils/types/props/Accessible';
import type { Animatable } from '@/utils/types/props/Animatable';
import type { Disablable } from '@/utils/types/props/Disablable';
import type { Focusable } from '@/utils/types/props/Focusable';
import type { Expansible } from '@/utils/types/props/Expansible';
import type { Identifiable } from '@/utils/types/props/Identifiable';
import type { Intentable } from '@/utils/types/props/Intentable';
import type { Polymorphic } from '@/utils/types/props/Polymorphic';
import type { Pressable } from '@/utils/types/props/Pressable';
import type { Roundable } from '@/utils/types/props/Roundable';
import type { Sizable } from '@/utils/types/props/Sizable';
import type { Stylable } from '@/utils/types/props/Stylable';
import { CC } from '@/utils/types/react/CC';
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
	id,
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
	...props
}) => {
	const As = useSemanticAsProp({ as: _as });
	const ref = useRef<typeof As>(null);
	const defaultId = useId();

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
			id={id || defaultId}
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
