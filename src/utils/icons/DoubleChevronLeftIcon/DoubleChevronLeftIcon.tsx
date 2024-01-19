import { FC, memo } from 'react';
import { uniqueId } from '@app/utils/functions/misc/uniqueId';
import type { Stylable } from '@app/utils/types/props/Stylable';

/**
 * Compositional prop types for the {@link DoubleChevronLeftIcon} component.
 */
type ComposedProps = Stylable;

/**
 * Prop types for the {@link DoubleChevronLeftIcon} component.
 */
export interface DoubleChevronLeftIconProps extends ComposedProps {
	/**
	 * [Optional] The description of the icon used for accessibility.
	 * @defaultValue - `'An icon used for expanding and collapsing the sidebar.'`
	 */
	readonly alt?: string;

	/**
	 * [Optional] The title of the icon used for accessibility.
	 * @defaultValue - `'Double Chevron Right'`
	 */
	readonly title?: string;
}

/**
 * An icon used for expanding and collapsing the sidebar.
 */
export const DoubleChevronLeftIcon: FC<DoubleChevronLeftIconProps> = memo(
	({
		className = '',
		alt = 'An icon used for expanding and collapsing the sidebar.',
		title = 'Double Chevron Right',
		...props
	}) => {
		const titleId = uniqueId('doubleChevronLeftIconTitle');
		const descId = uniqueId('doubleChevronLeftIconDesc');

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
				<path d="M17.59 18 19 16.59 14.42 12 19 7.41 17.59 6l-6 6z" />
				<path d="m11 18 1.41-1.41L7.83 12l4.58-4.59L11 6l-6 6z" />
			</svg>
		);
	},
);

export default DoubleChevronLeftIcon;
