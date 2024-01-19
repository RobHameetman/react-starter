import { isMouseEvent } from '@app/utils/functions/check/react/isMouseEvent';
import { PressEvent } from '@app/utils/types/events/PressEvent';

/**
 * Returns the X position of a user interaction from a given event.
 *
 * @param input - A {@link PressEvent} triggered by a user interaction.
 *
 * @returns The X position of the user interaction.
 */
export const getPressPositionX = (e: PressEvent) => {
	const $target = e.currentTarget;
	let x = $target.clientWidth / 2;

	if (isMouseEvent(e)) {
		const { left } = $target.getBoundingClientRect();

		x = e.clientX - left;

		if (x < 0) {
			x = e.nativeEvent.offsetX;
		}
	}

	return x;
};
