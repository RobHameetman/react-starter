import { FC, memo } from 'react';
import { uniqueId } from '@/utils/functions/misc/uniqueId';
import type { Stylable } from '@/utils/types/props/Stylable';

/**
 * Compositional prop types for the {@link FilterIcon} component.
 */
type ComposedProps = Stylable;

/**
 * Prop types for the {@link FilterIcon} component.
 */
export interface FilterIconProps extends ComposedProps {
	/**
	 * [Optional] The description of the icon used for accessibility.
	 * @defaultValue - `'An icon used in data tables for dropdowns which select the type of data to filter.'`
	 */
	readonly alt?: string;

	/**
	 * [Optional] The title of the icon used for accessibility.
	 * @defaultValue - `'Filter'`
	 */
	readonly title?: string;
}

/**
 * An icon used in data tables for dropdowns which select the type of data to
 * filter.
 */
export const FilterIcon: FC<FilterIconProps> = memo(
	({
		className = '',
		alt = 'An icon used in data tables for dropdowns which select the type of data to filter.',
		title = 'Filter',
		...props
	}) => {
		const titleId = uniqueId('filterIconTitle');
		const descId = uniqueId('filterIconDesc');

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
				<path d="M23.1,0H0.9C0.4,0,0,0.4,0,0.9v4.3c0,0.2,0.1,0.5,0.3,0.6l8.3,7.4v9.9C8.6,23.6,9,24,9.4,24 c0.1,0,0.3,0,0.4-0.1l5.1-2.6c0.3-0.1,0.5-0.4,0.5-0.8v-7.3l8.3-7.4C23.9,5.6,24,5.4,24,5.2V0.9C24,0.4,23.6,0,23.1,0L23.1,0z M22.3,4.8L14,12.2c-0.2,0.2-0.3,0.4-0.3,0.6V20l-3.4,1.7v-8.9c0-0.2-0.1-0.5-0.3-0.6L1.7,4.8v-3h20.5V4.8z" />
			</svg>
		);
	},
);

export default FilterIcon;
