import { useCallback } from 'react';
import { createRipple as _createRipple } from '@/utils/functions/animations/createRipple';
import { getPressPosition as _getPressPosition } from '@/utils/functions/events/press/getPressPosition';
import { noop } from '@/utils/functions/misc/noop';
import type { PressEvent } from '@/utils/types/events/PressEvent';

/**
 * Functional dependencies used in the {@link useButtonAnimations()} hook. This
 * object is provided in tests for mocking and spying.
 */
export interface UseButtonAnimationsDependencies {
	/**
	 * @TODO
	 */
	readonly createRipple?: typeof _createRipple;

	/**
	 * Returns the position of a user interaction from a given event.
	 */
	readonly getPressPosition?: typeof _getPressPosition;
}

/**
 * Destructured arguments provided to the {@link useButtonAnimations()} hook.
 */
export interface UseButtonAnimationsInput {
	/**
	 * [Optional] The button animation type (e.g. 'ripple', 'glow', etc.)
	 * @defaultValue - `'ripple'`
	 */
	readonly type?: string;

	/**
	 * [Optional] Used in tests for mocking and spying.
	 * @defaultValue - `{}`
	 */
	readonly _dependencies?: UseButtonAnimationsDependencies;
}

/**
 * @TODO
 *
 * @param input - A {@link UseButtonAnimationsInput} object used for destructuring.
 */
export const useButtonAnimations = ({
	type = 'ripple',
	_dependencies = {},
}: UseButtonAnimationsInput) => {
	const { createRipple = _createRipple, getPressPosition = _getPressPosition } =
		_dependencies;

	let animate = noop;

	switch (type) {
		case 'ripple':
			animate = createRipple as typeof noop;

			break;
		default:
			break;
	}

	const triggerAnimation = useCallback((e: PressEvent<Element>) => {
		if (Animation) {
			const { x, y } = getPressPosition(e as PressEvent);

			animate({ event: e, x, y });
		}
	}, []);

	return { triggerAnimation };
};
