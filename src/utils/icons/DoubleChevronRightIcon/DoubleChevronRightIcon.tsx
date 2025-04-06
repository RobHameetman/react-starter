import { FC, memo } from 'react';
import { uniqueId } from '@/utils/functions/misc/uniqueId';
import type { Stylable } from '@/utils/types/props/Stylable';

/**
 * Compositional prop types for the {@link DoubleChevronRightIcon} component.
 */
type ComposedProps = Stylable;

/**
 * Prop types for the {@link DoubleChevronRightIcon} component.
 */
export interface DoubleChevronRightIconProps extends ComposedProps {
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
export const DoubleChevronRightIcon: FC<DoubleChevronRightIconProps> = memo(
	({
		className = '',
		alt = 'An icon used for expanding and collapsing the sidebar.',
		title = 'Double Chevron Right',
		...props
	}) => {
		const titleId = uniqueId('doubleChevronRightIconTitle');
		const descId = uniqueId('doubleChevronRightIconDesc');

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
				<path d="M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z" />
				<path d="m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z" />
			</svg>
		);
	},
);

export default DoubleChevronRightIcon;
