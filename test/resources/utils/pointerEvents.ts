import { createEvent, fireEvent } from '@testing-library/react';

/**
 * We need to use a custom `PointerEvent` constructor because these events
 * aren't supported yet and some props are not passed correctly by the
 * `fireEvent` method as a result.
 *
 * @see https://github.com/testing-library/dom-testing-library/issues/558
 */
const pointerEventProps = [
	'coalescedEvents',
	'height',
	'isPrimary',
	'pointerId',
	'pointerType',
	'predictedEvents',
	'pressure',
	'tangentialPressure',
	'tiltX',
	'tiltY',
	'twist',
	'width',
];

class PointerEvent extends MouseEvent {
	constructor(type: string, props: PointerEventInit & Record<string, unknown>) {
		super(type, props);

		pointerEventProps.forEach((prop) => {
			Object.defineProperty(this, prop, {
				value: props[prop],
				writable: false,
			});
		});
	}
}

export const firePointerCancel = (
	$element: Element,
	opt: Record<string, unknown>,
) => {
	fireEvent($element, new PointerEvent('pointercancel', opt));
};

export const firePointerDown = (
	$element: Element,
	opt: Record<string, unknown>,
) => {
	const event = createEvent.pointerDown($element, opt);

	pointerEventProps.forEach((prop) => {
		Object.defineProperty(event, prop, {
			value: opt[prop],
			writable: false,
		});
	});

	fireEvent($element, event);
};

export const firePointerEnter = (
	$element: Element,
	opt: Record<string, unknown>,
) => {
	fireEvent($element, new PointerEvent('pointerenter', opt));
};

export const firePointerLeave = (
	$element: Element,
	opt: Record<string, unknown>,
) => {
	fireEvent($element, new PointerEvent('pointerleave', opt));
};

export const firePointerMove = (
	$element: Element,
	opt: Record<string, unknown>,
) => {
	fireEvent($element, new PointerEvent('pointermove', opt));
};

export const firePointerOut = (
	$element: Element,
	opt: Record<string, unknown>,
) => {
	fireEvent($element, new PointerEvent('pointerout', opt));
};

export const firePointerOver = (
	$element: Element,
	opt: Record<string, unknown>,
) => {
	fireEvent($element, new PointerEvent('pointerover', opt));
};

export const firePointerUp = (
	$element: Element,
	opt: Record<string, unknown>,
) => {
	fireEvent($element, new PointerEvent('pointerup', opt));
};
