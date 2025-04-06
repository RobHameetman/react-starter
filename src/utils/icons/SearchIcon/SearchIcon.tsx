import { FC, memo } from 'react';
import { uniqueId } from '@/utils/functions/misc/uniqueId';
import type { Stylable } from '@/utils/types/props/Stylable';

/**
 * Compositional prop types for the {@link SearchIcon} component.
 */
type ComposedProps = Stylable;

/**
 * Prop types for the {@link SearchIcon} component.
 */
export interface SearchIconProps extends ComposedProps {
	/**
	 * [Optional] The description of the icon used for accessibility.
	 * @defaultValue - `'An icon used for search bars.'`
	 */
	readonly alt?: string;

	/**
	 * [Optional] The title of the icon used for accessibility.
	 * @defaultValue - `'Search'`
	 */
	readonly title?: string;
}

/**
 * An icon used for search bars.
 */
export const SearchIcon: FC<SearchIconProps> = memo(
	({
		className = '',
		alt = 'An icon used for search bars.',
		title = 'Search',
		...props
	}) => {
		const titleId = uniqueId('searchIconTitle');
		const descId = uniqueId('searchIconDesc');

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
				<path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
			</svg>
		);
	},
);

export default SearchIcon;
