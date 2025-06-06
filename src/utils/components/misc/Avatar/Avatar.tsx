import { ReactElement } from 'react';
import { Sizes } from '@/theme/enums/Sizes';
import { isUndefined } from '@/utils/functions/check/js/core/isUndefined';
import { isReactElement } from '@/utils/functions/check/react/isReactElement';
import { cssClasses } from '@/utils/functions/misc/cssClasses';
import { useControlProp } from '@/utils/hooks/react/useControlProp';
import { useFocusEvents } from '@/utils/hooks/react/useFocusEvents';
import { useHoverEvents } from '@/utils/hooks/react/useHoverEvents';
import { usePressEvents } from '@/utils/hooks/react/usePressEvents';
import { PersonIcon } from '@/utils/icons/PersonIcon';
import type { Accessible } from '@/utils/types/props/Accessible';
import type { Disablable } from '@/utils/types/props/Disablable';
import type { Focusable } from '@/utils/types/props/Focusable';
import type { Hoverable } from '@/utils/types/props/Hoverable';
import type { Identifiable } from '@/utils/types/props/Identifiable';
import type { Nameable } from '@/utils/types/props/Nameable';
import type { Pressable } from '@/utils/types/props/Pressable';
import type { Polymorphic } from '@/utils/types/props/Polymorphic';
import type { Sizable } from '@/utils/types/props/Sizable';
import type { Stylable } from '@/utils/types/props/Stylable';
import type { CC } from '@/utils/types/react/CC';
import { AvatarGroup } from './components';
import styles from './Avatar.module.css';
import { getInitials } from './functions';

type ComposedProps = Accessible &
	Disablable &
	Focusable &
	Hoverable &
	Identifiable &
	Nameable &
	Polymorphic &
	Pressable &
	Sizable &
	Stylable;

/**
 * Prop types for {@link Avatar}.
 */
export interface AvatarProps extends ComposedProps {
	/**
	 * [Optional] Accessible text for the image.
	 * @defaultValue - `false` unless "src" is `undefined`
	 */
	readonly alt?: string;

	/**
	 * [Optional] The fallback content to render if the image fails to load. May
	 * also be a boolean to force or disable the fallback content.
	 * @defaultValue - `false` unless "src" is `undefined`
	 */
	readonly fallback?: boolean | ReactElement;

	/**
	 * [Optional] An icon to display instead of text.
	 * @defaultValue - `<PersonIcon />`
	 */
	readonly icon?: ReactElement | null;

	/**
	 * [Optional] The position of the form buttons.
	 * @defaultValue - `false`
	 */
	readonly src?: string;
}

export interface AvatarComponents {
	Group: typeof AvatarGroup;
}

/**
 * @TODO - A short description of the component here.
 */
export const Avatar: CC<AvatarComponents, AvatarProps> = ({
	id,
	src,
	as: As = 'span',
	className = '',
	disabled: _disabled = false,
	fallback: _fallback = isUndefined(src),
	icon = <PersonIcon />,
	name,
	alt = name || id,
	size = Sizes.md,
	...extraProps
}) => {
	const [disabled] = useControlProp<AvatarProps['disabled']>(_disabled);
	const [fallback] = useControlProp<AvatarProps['fallback']>(_fallback);

	const pressEvents = usePressEvents({
		disabled,
		onPress: (e) => {
			e.preventDefault();
			console.log(e);
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
		styles.avatar,
		styles[size],
		{ [styles.disabled]: disabled, [styles.fallback]: Boolean(fallback) },
		className,
	);

	if (fallback === false && !src) {
		console.warn('<Avatar />: "src" is required when "fallback" is `false`.');
	}

	return (
		<As
			className={css}
			id={id}
			role="img"
			aria-label={alt}
			{...extraProps}
			{...pressEvents}
			{...focusEvents}
			{...hoverEvents}
		>
			{!fallback ? <img src={src} alt={alt} tabIndex={-1} /> : null}
			{isReactElement(fallback) ? fallback : getInitials(name) || icon}
		</As>
	);
};

Avatar.Group = AvatarGroup;
