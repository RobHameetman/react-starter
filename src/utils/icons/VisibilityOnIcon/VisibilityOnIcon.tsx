import { FC, memo } from 'react';
import { uniqueId } from '@/utils/functions/misc/uniqueId';
import type { Stylable } from '@/utils/types/props/Stylable';

/**
 * Compositional prop types for the {@link VisibilityOnIcon} component.
 */
type ComposedProps = Stylable;

/**
 * Prop types for the {@link VisibilityOnIcon} component.
 */
export interface VisibilityOnIconProps extends ComposedProps {
	/**
	 * [Optional] The description of the icon used for accessibility.
	 * @defaultValue - `'An icon used for buttons revealing sensitive data.'`
	 */
	readonly alt?: string;

	/**
	 * [Optional] The title of the icon used for accessibility.
	 * @defaultValue - `'Visibility On'`
	 */
	readonly title?: string;
}

/**
 * An icon used for buttons revealing sensitive data.
 */
export const VisibilityOnIcon: FC<VisibilityOnIconProps> = memo(
	({
		className = '',
		alt = 'An icon used for buttons revealing sensitive data.',
		title = 'Visibility On',
		...props
	}) => {
		const titleId = uniqueId('visibilityOnIconTitle');
		const descId = uniqueId('visibilityOnIconDesc');

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
				<path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
			</svg>
		);
	},
);

export default VisibilityOnIcon;
