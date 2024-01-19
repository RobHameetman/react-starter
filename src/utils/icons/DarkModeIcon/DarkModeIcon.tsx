import { FC, memo } from 'react';
import { uniqueId } from '@app/utils/functions/misc/uniqueId';
import type { Stylable } from '@app/utils/types/props/Stylable';

/**
 * Compositional prop types for the {@link DarkModeIcon} component.
 */
type ComposedProps = Stylable;

/**
 * Prop types for the {@link DarkModeIcon} component.
 */
export interface DarkModeIconProps extends ComposedProps {
	/**
	 * [Optional] The description of the icon used for accessibility.
	 * @defaultValue - `'An icon used in settings for dark mode.'`
	 */
	readonly alt?: string;

	/**
	 * [Optional] The title of the icon used for accessibility.
	 * @defaultValue - `'Dark Mode'`
	 */
	readonly title?: string;
}

/**
 * An icon used in settings for dark mode.
 */
export const DarkModeIcon: FC<DarkModeIconProps> = memo(
	({
		className = '',
		alt = 'An icon used in settings for dark mode.',
		title = 'Dark Mode',
		...props
	}) => {
		const titleId = uniqueId('darkModeIconTitle');
		const descId = uniqueId('darkModeIconDesc');

		return (
			<svg
				className={className}
				viewBox="0 0 24 24"
				fill="currentColor"
				height="1em"
				width="1em"
				role="img"
				aria-labelledby={`${titleId} ${descId}`}
				tabIndex={-1}
				{...props}
			>
				<title id={titleId}>{title}</title>
				<desc id={descId}>{alt}</desc>
				<path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z" />
			</svg>
		);
	},
);

export default DarkModeIcon;
