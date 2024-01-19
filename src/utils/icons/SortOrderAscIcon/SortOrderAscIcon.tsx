import { FC, memo } from 'react';
import { uniqueId } from '@app/utils/functions/misc/uniqueId';
import type { Stylable } from '@app/utils/types/props/Stylable';

/**
 * Compositional prop types for the {@link SortOrderAscIcon} component.
 */
type ComposedProps = Stylable;

/**
 * Prop types for the {@link SortOrderAscIcon} component.
 */
export interface SortOrderAscIconProps extends ComposedProps {
	/**
	 * [Optional] The description of the icon used for accessibility.
	 * @defaultValue - `'An icon used in data tables for sortable columns which sort in ascending order.'`
	 */
	readonly alt?: string;

	/**
	 * [Optional] The title of the icon used for accessibility.
	 * @defaultValue - `'Sort Order (Ascending)'`
	 */
	readonly title?: string;
}

/**
 * An icon used in data tables for sortable columns which sort in ascending
 * order.
 */
export const SortOrderAscIcon: FC<SortOrderAscIconProps> = memo(
	({
		className = '',
		alt = 'An icon used in data tables for sortable columns which sort in ascending order.',
		title = 'Sort Order (Ascending)',
		...props
	}) => {
		const titleId = uniqueId('sortOrderAscIconTitle');
		const descId = uniqueId('sortOrderAscIconDesc');

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
				<path d="M12.7,22c0-0.5-0.4-0.8-0.8-0.8H0.8C0.4,21.2,0,21.6,0,22v0.8c0,0.4,0.4,0.8,0.8,0.8h11.1c0.4,0,0.8-0.4,0.8-0.8V22L12.7,22z M23.7,6.6l-0.4,0.6c-0.2,0.1-0.4,0.2-0.6,0.2c-0.3,0-0.5-0.1-0.6-0.2l-2.7-2.7v17.9c0,0.4-0.4,0.8-0.8,0.8h-0.8c-0.4,0-0.8-0.4-0.8-0.8V4.5l-2.7,2.7c-0.2,0.1-0.4,0.2-0.6,0.2c-0.2,0-0.5-0.1-0.6-0.2l-0.6-0.6c-0.3-0.3-0.3-0.8,0-1.1l5-5c0.2-0.1,0.4-0.2,0.6-0.2s0.4,0,0.6,0.2l5,5C24,5.8,24,6.3,23.7,6.6L23.7,6.6z M5.9,3c0.5,0,0.8-0.4,0.8-0.8V1.4c0-0.4-0.4-0.8-0.8-0.8H0.8C0.4,0.6,0,1,0,1.4v0.8C0,2.6,0.4,3,0.8,3H5.9L5.9,3z M7.4,8c0.5,0,0.8-0.4,0.8-0.8V6.4c0-0.4-0.4-0.8-0.8-0.8H0.8C0.4,5.6,0,6,0,6.4v0.8C0,7.6,0.4,8,0.8,8H7.4L7.4,8z M8.9,13.6c0.5,0,0.8-0.4,0.8-0.8V12c0-0.4-0.4-0.8-0.8-0.8H0.8C0.4,11.2,0,11.6,0,12v0.8c0,0.4,0.4,0.8,0.8,0.8H8.9L8.9,13.6z M11.2,17.8V17c0-0.4-0.4-0.8-0.8-0.8H0.8C0.4,16.2,0,16.6,0,17v0.8c0,0.4,0.4,0.8,0.8,0.8h9.6C10.8,18.6,11.2,18.2,11.2,17.8z" />
			</svg>
		);
	},
);

export default SortOrderAscIcon;
