import { FC, memo } from 'react';
import { uniqueId } from '@/utils/functions/misc/uniqueId';
import type { Stylable } from '@/utils/types/props/Stylable';

/**
 * Compositional prop types for the {@link LinkedinIcon} component.
 */
type ComposedProps = Stylable;

/**
 * Prop types for the {@link LinkedinIcon} component.
 */
export interface LinkedinIconProps extends ComposedProps {
	/**
	 * [Optional] The description of the icon used for accessibility.
	 * @defaultValue - `'An icon of the LinkedIn logo used for authentication.'`
	 */
	readonly alt?: string;

	/**
	 * [Optional] The title of the icon used for accessibility.
	 * @defaultValue - `'LinkedIn'`
	 */
	readonly title?: string;
}

/**
 * An icon of the LinkedIn logo used for authentication.
 */
export const LinkedinIcon: FC<LinkedinIconProps> = memo(
	({
		className = '',
		alt = 'An icon of the LinkedIn logo used for authentication.',
		title = 'LinkedIn',
		...props
	}) => {
		const titleId = uniqueId('linkedinIconTitle');
		const descId = uniqueId('linkedinIconDesc');

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
				<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
			</svg>
		);
	},
);

export default LinkedinIcon;
