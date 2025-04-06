import { isMouseEvent } from '@/utils/functions/check/react/isMouseEvent';
import { PressEvent } from '@/utils/types/events/PressEvent';

/**
 * Returns the Y position of a user interaction from a given event.
 *
 * @param input - A {@link PressEvent} triggered by a user interaction.
 *
 * @returns The Y position of the user interaction.
 */
export const getPressPositionY = (e: PressEvent) => {
	const $target = e.currentTarget;
	let y = $target.clientHeight / 2;

	if (isMouseEvent(e)) {
		const { top } = $target.getBoundingClientRect();

		y = e.clientY - top;

		if (y < 0) {
			y = e.nativeEvent.offsetY;
		}
	}

	return y;
};
