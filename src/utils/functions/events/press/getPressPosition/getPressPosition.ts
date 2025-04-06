import { PressEvent } from '@/utils/types/events/PressEvent';
import { getPressPositionX } from '../getPressPositionX';
import { getPressPositionY } from '../getPressPositionY';

/**
 * Returns the position of a user interaction from a given event.
 *
 * @param input - A {@link PressEvent} triggered by a user interaction.
 *
 * @returns The position of the user interaction.
 */
export const getPressPosition = (e: PressEvent) => ({
	x: getPressPositionX(e),
	y: getPressPositionY(e),
});
