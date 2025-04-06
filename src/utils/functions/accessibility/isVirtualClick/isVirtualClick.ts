import { MouseEvent, PointerEvent } from 'react';
import { isAndroid as _isAndroid } from '@/utils/functions/agent/device/isAndroid';

/**
 * Functional dependencies used in the {@link isVirtualClick()} function. This
 * object is provided in tests for mocking and spying.
 */
export interface IsVirtualClickDependencies {
	/**
	 * @TODO
	 */
	readonly isAndroid?: typeof _isAndroid;
}

/**
 * Destructured arguments provided to the {@link isVirtualClick()} function.
 */
export interface IsVirtualClickInput<T = Element> {
	/**
	 * [Optional] Used in tests for mocking and spying.
	 * @defaultValue - `{}`
	 */
	readonly event?:
		| MouseEvent<T>
		| globalThis.MouseEvent
		| PointerEvent<T>
		| globalThis.PointerEvent;

	/**
	 * [Optional] Used in tests for mocking and spying.
	 * @defaultValue - `{}`
	 */
	readonly _dependencies?: IsVirtualClickDependencies;
}

/**
 * This function infers "virtual" click events, or click events which are not
 * triggered by actual user interaction with a mouse or pointer.
 *
 * @param input - A {@link IsVirtualClickInput} object used for
 * destructuring.
 */
export const isVirtualClick = <T = Element>({
	event,
	_dependencies = {},
}: IsVirtualClickInput<T> = {}) => {
	const { isAndroid = _isAndroid } = _dependencies;

	if (!event) {
		throw new Error('Missing required argument: event');
	}

	if (
		'mozInputSource' in event &&
		event.mozInputSource === 0 &&
		event.isTrusted
	) {
		return true;
	}

	if (isAndroid() && 'pointerType' in event) {
		return event.type === 'click' && event.buttons === 1;
	}

	return event.detail === 0;
};
