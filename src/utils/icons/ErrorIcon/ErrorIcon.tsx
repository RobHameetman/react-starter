import { FC, memo } from 'react';
import { uniqueId } from '@app/utils/functions/misc/uniqueId';
import type { Stylable } from '@app/utils/types/props/Stylable';

/**
 * Compositional prop types for the {@link ErrorIcon} component.
 */
type ComposedProps = Stylable;

/**
 * Prop types for the {@link ErrorIcon} component.
 */
export interface ErrorIconProps extends ComposedProps {
	/**
	 * [Optional] The description of the icon used for accessibility.
	 * @defaultValue - `'An icon used for "error" type data displays.'`
	 */
	readonly alt?: string;

	/**
	 * [Optional] The title of the icon used for accessibility.
	 * @defaultValue - `'Error'`
	 */
	readonly title?: string;
}

/**
 * An icon used for "error" type data displays.
 */
export const ErrorIcon: FC<ErrorIconProps> = memo(
	({
		className = '',
		alt = 'An icon used for "error" type data displays.',
		title = 'Error',
		...props
	}) => {
		const titleId = uniqueId('errorIconTitle');
		const descId = uniqueId('errorIconDesc');

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
				<path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
			</svg>
		);
	},
);

export default ErrorIcon;
