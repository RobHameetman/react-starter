import { FC, memo } from 'react';
import { uniqueId } from '@app/utils/functions/misc/uniqueId';
import type { Stylable } from '@app/utils/types/props/Stylable';

/**
 * Compositional prop types for the {@link CheckIcon} component.
 */
type ComposedProps = Stylable;

/**
 * Prop types for the {@link CheckIcon} component.
 */
export interface CheckIconProps extends ComposedProps {
	/**
	 * [Optional] The description of the icon used for accessibility.
	 * @defaultValue - `'An icon used in checkboxes, as confirmation of an action, and in other cases to indicate success or completion.'`
	 */
	readonly alt?: string;

	/**
	 * [Optional] The title of the icon used for accessibility.
	 * @defaultValue - `'Dark Mode'`
	 */
	readonly title?: string;
}

/**
 * An icon used in checkboxes, as confirmation of an action, and in other cases
 * to indicate success or completion.
 */
export const CheckIcon: FC<CheckIconProps> = memo(
	({
		className = '',
		alt = 'An icon used in checkboxes, as confirmation of an action, and in other cases to indicate success or completion.',
		title = 'Dark Mode',
		...props
	}) => {
		const titleId = uniqueId('checkIconTitle');
		const descId = uniqueId('checkIconDesc');

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
				<path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
			</svg>
		);
	},
);

export default CheckIcon;
