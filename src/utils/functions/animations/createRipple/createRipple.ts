import { PressEvent } from '@/utils/types/events/PressEvent';

/**
 * Destructured arguments provided to the {@link createRipple()} function.
 */
export interface CreateRippleInput {
	/**
	 * The event representing a user interaction.
	 */
	readonly event: PressEvent;

	/**
	 * [Optional] The `x` coordinate of the pointer position where the ripple
	 * occurs.
	 * @defaultValue - `0`
	 */
	readonly x?: number;

	/**
	 * [Optional] The `y` coordinate of the pointer position where the ripple
	 * occurs.
	 * @defaultValue - `0`
	 */
	readonly y?: number;
}

/**
 * Create a ripple effect on an element provided by an event representing a user
 * interaction. We manipulate the DOM directly for this animation rather than
 * using JSX both as a matter of performance and also because we want the ripple
 * to occur on the element that was pressed, not on the element that was
 * rendered.
 *
 * @param input - A {@link CreateRippleInput} object used for destructuring.
 */
export const createRipple = ({ event: e, x = 0, y = 0 }: CreateRippleInput) => {
	const $target = e.currentTarget;
	const $ripple = document.createElement('span');

	$ripple.style.setProperty('left', `${x}px`);
	$ripple.style.setProperty('top', `${y}px`);
	$ripple.classList.add('ripple');

	$target.appendChild($ripple);

	setTimeout(() => {
		$target.removeChild($ripple);
	}, 500);
};
