import { FC, memo } from 'react';
import { uniqueId } from '@app/utils/functions/misc/uniqueId';
import type { Stylable } from '@app/utils/types/props/Stylable';

/**
 * Compositional prop types for the {@link SortOrderDescIcon} component.
 */
type ComposedProps = Stylable;

/**
 * Prop types for the {@link SortOrderDescIcon} component.
 */
export interface SortOrderDescIconProps extends ComposedProps {
	/**
	 * [Optional] The description of the icon used for accessibility.
	 * @defaultValue - `'An icon used in data tables for sortable columns which sort in descending order.'`
	 */
	readonly alt?: string;

	/**
	 * [Optional] The title of the icon used for accessibility.
	 * @defaultValue - `'Sort Order (Descending)'`
	 */
	readonly title?: string;
}

/**
 * An icon used in data tables for sortable columns which sort in descending
 * order.
 */
export const SortOrderDescIcon: FC<SortOrderDescIconProps> = memo(
	({
		className = '',
		alt = 'An icon used in data tables for sortable columns which sort in descending order.',
		title = 'Sort Order (Descending)',
		...props
	}) => {
		const titleId = uniqueId('sortOrderDescIconTitle');
		const descId = uniqueId('sortOrderDescIconDesc');

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
				<path d="M12.7,1.9V1.1c0-0.4-0.4-0.8-0.8-0.8H0.8C0.4,0.3,0,0.7,0,1.1v0.8c0,0.4,0.4,0.8,0.8,0.8h11.1 C12.3,2.7,12.7,2.4,12.7,1.9L12.7,1.9z M23.7,17.3c0.3,0.3,0.3,0.8,0,1.1l-5,5c-0.2,0.2-0.4,0.2-0.6,0.2s-0.4-0.1-0.6-0.2l-5-5 c-0.3-0.3-0.3-0.8,0-1.1l0.6-0.6c0.1-0.1,0.4-0.2,0.6-0.2c0.2,0,0.4,0.1,0.6,0.2l2.7,2.7V1.5c0-0.4,0.4-0.8,0.8-0.8h0.8 c0.4,0,0.8,0.4,0.8,0.8v17.9l2.7-2.7c0.1-0.1,0.3-0.2,0.6-0.2c0.2,0,0.4,0.1,0.6,0.2L23.7,17.3L23.7,17.3z M5.9,20.9H0.8 c-0.4,0-0.8,0.4-0.8,0.8v0.8c0,0.4,0.4,0.8,0.8,0.8h5.1c0.4,0,0.8-0.4,0.8-0.8v-0.8C6.7,21.3,6.4,20.9,5.9,20.9L5.9,20.9z  M7.4,15.9H0.8c-0.4,0-0.8,0.4-0.8,0.8v0.8c0,0.4,0.4,0.8,0.8,0.8h6.6c0.4,0,0.8-0.4,0.8-0.8v-0.8C8.2,16.3,7.9,15.9,7.4,15.9 L7.4,15.9z M8.9,10.3H0.8c-0.4,0-0.8,0.4-0.8,0.8v0.8c0,0.4,0.4,0.8,0.8,0.8h8.1c0.4,0,0.8-0.4,0.8-0.8v-0.8 C9.7,10.7,9.4,10.3,8.9,10.3L8.9,10.3z M10.4,5.3H0.8C0.4,5.3,0,5.7,0,6.1v0.8c0,0.4,0.4,0.8,0.8,0.8h9.6c0.4,0,0.8-0.4,0.8-0.8 V6.1C11.2,5.7,10.8,5.3,10.4,5.3z" />
			</svg>
		);
	},
);

export default SortOrderDescIcon;
