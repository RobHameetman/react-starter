import { FC, memo } from 'react';
import { uniqueId } from '@/utils/functions/misc/uniqueId';
import type { Stylable } from '@/utils/types/props/Stylable';

/**
 * Compositional prop types for the {@link SuccessIcon} component.
 */
type ComposedProps = Stylable;

/**
 * Prop types for the {@link SuccessIcon} component.
 */
export interface SuccessIconProps extends ComposedProps {
	/**
	 * [Optional] The description of the icon used for accessibility.
	 * @defaultValue - `'An icon used for "success" type data displays.'`
	 */
	readonly alt?: string;

	/**
	 * [Optional] The title of the icon used for accessibility.
	 * @defaultValue - `'Success'`
	 */
	readonly title?: string;
}

/**
 * An icon used for "success" type data displays.
 */
export const SuccessIcon: FC<SuccessIconProps> = memo(
	({
		className = '',
		alt = 'An icon used for "success" type data displays.',
		title = 'Success',
		...props
	}) => {
		const titleId = uniqueId('successIconTitle');
		const descId = uniqueId('successIconDesc');

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
				<path d="M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z" />
			</svg>
		);
	},
);

export default SuccessIcon;
