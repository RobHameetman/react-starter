/**
 * `jest-dom` adds custom Jest matchers for asserting on DOM nodes.
 * This allows you to do things like:
 *
 * ```
 * expect(element).toHaveTextContent(/hello/i);
 * ```
 *
 * @see https://github.com/testing-library/jest-dom
 */
import '@testing-library/jest-dom';
import { configure } from '@testing-library/react';
import { performance } from 'perf_hooks';
import '../matchers';

/* @ts-expect-error - Type 'Performance' is missing properties from type 'Performance' */
global.performance = performance;

/* @ts-expect-error - Type 'Performance' is missing properties from type 'Performance' */
window.performance = performance;

configure({
	testIdAttribute: 'data-test-id',
});

/**
 * We need to use a custom `PointerEvent` constructor because these events
 * aren't supported in jsdom yet and some props are not passed correctly by the
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

class $PointerEvent extends MouseEvent {
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

global.PointerEvent = $PointerEvent as typeof PointerEvent;
