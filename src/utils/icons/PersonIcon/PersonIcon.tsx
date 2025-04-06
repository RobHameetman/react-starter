import { FC, memo } from 'react';
import { uniqueId } from '@/utils/functions/misc/uniqueId';
import type { Stylable } from '@/utils/types/props/Stylable';

/**
 * Compositional prop types for the {@link PersonIcon} component.
 */
type ComposedProps = Stylable;

/**
 * Prop types for the {@link PersonIcon} component.
 */
export interface PersonIconProps extends ComposedProps {
	/**
	 * [Optional] The description of the icon used for accessibility.
	 * @defaultValue - `'An icon used for avatar / profile image fallbacks.'`
	 */
	readonly alt?: string;

	/**
	 * [Optional] The title of the icon used for accessibility.
	 * @defaultValue - `'Search'`
	 */
	readonly title?: string;
}

/**
 * An icon used for avatar / profile image fallbacks.
 */
export const PersonIcon: FC<PersonIconProps> = memo(
	({
		className = '',
		alt = 'An icon used for avatar / profile image fallbacks.',
		title = 'Search',
		...props
	}) => {
		const titleId = uniqueId('personIconTitle');
		const descId = uniqueId('personIconDesc');

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
				<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
			</svg>
		);
	},
);

export default PersonIcon;
