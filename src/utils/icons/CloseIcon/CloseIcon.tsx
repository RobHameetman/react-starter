import { FC, memo } from 'react';
import { uniqueId } from '@/utils/functions/misc/uniqueId';
import type { Stylable } from '@/utils/types/props/Stylable';

/**
 * Compositional prop types for the {@link CloseIcon} component.
 */
type ComposedProps = Stylable;

/**
 * Prop types for the {@link CloseIcon} component.
 */
export interface CloseIconProps extends ComposedProps {
	/**
	 * [Optional] The description of the icon used for accessibility.
	 * @defaultValue - `'An icon used for close buttons.'`
	 */
	readonly alt?: string;

	/**
	 * [Optional] The title of the icon used for accessibility.
	 * @defaultValue - `'Close'`
	 */
	readonly title?: string;
}

/**
 * An icon used for close buttons.
 */
export const CloseIcon: FC<CloseIconProps> = memo(
	({
		className = '',
		alt = 'An icon used for close buttons.',
		title = 'close',
		...props
	}) => {
		const titleId = uniqueId('closeIconTitle');
		const descId = uniqueId('closeIconDesc');

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
				<path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
			</svg>
		);
	},
);

export default CloseIcon;
