import type { DOMAttributes } from 'react';
import { isFunction } from '@/utils/functions/check/js/core/isFunction';
import { capitalize } from '@/utils/functions/string/capitalize';

/**
 * The type of event target used in the {@link dispatchReactEvent()} function.
 */
type Target = HTMLElement & EventTarget;

/**
 * Functional dependencies used in the {@link dispatchReactEvent()} function.
 * This object is provided in tests for mocking and spying.
 */
export type DispatchReactEventDependencies = Record<string, never>;

/**
 * Destructured arguments provided to the {@link dispatchReactEvent()} function.
 *
 * @typeParam `E` - [Optional] The type of event to dispatch.
 * @typeParam `T` - [Optional] The type of event target.
 */
export interface DispatchReactEventInput<
	E extends Event = Event,
	T extends Target = Target,
> {
	/**
	 * The event to dispatch.
	 */
	readonly event: E;

	/**
	 * [Optional] The name of the event handler to dispatch the event to. By
	 * default, the event handler is inferred from the event type. In some cases,
	 * this may not work as expected (e.g. the handler for an event with type
	 * `'touchstart'` would be inferred as `'onTouchstart'` instead of
	 * `'onTouchStart'`).
	 */
	readonly handler?: `on${string}`;

	/**
	 * [Optional] The event target on which the event is dispatched.
	 */
	readonly target?: T;

	/**
	 * [Optional] Used in tests for mocking and spying.
	 * @defaultValue - `{}`
	 */
	readonly _dependencies?: DispatchReactEventDependencies;
}

/**
 * Forcibly dispatch a React event to a target element. This is useful for
 * checkboxes and radio buttons where the `checked` and `indeterminate` states
 * are managed by React but the `change` event is not.
 *
 * @typeParam `E` - [Optional] The type of event to dispatch.
 * @typeParam `T` - [Optional] The type of event target.
 *
 * @param input - A {@link DispatchReactEventInput} object used for destructuring.
 */
export const dispatchReactEvent = <
	E extends Event = Event,
	T extends Target = Target,
>({
	event,
	handler,
	target = document.documentElement as T,
}: DispatchReactEventInput<E, T>) => {
	const __reactProps = (Object.keys(target).find((key) =>
		key.startsWith('__reactProps'),
	) || '') as keyof T;

	if (!__reactProps) {
		throw new Error('No key "__reactProps" found on target.');
	}

	const reactProps = target[__reactProps] as DOMAttributes<T>;

	if (!reactProps) {
		throw new Error('No React props found on target.');
	}

	const methodName = (handler ||
		`on${capitalize(event.type)}`) as keyof DOMAttributes<T>;

	if (!methodName) {
		throw new Error(
			`No method name found for ${
				handler ? `"${handler}"` : `event of type "${event.type}"`
			}`,
		);
	}

	const dispatch = reactProps[methodName];

	if (isFunction(dispatch)) {
		dispatch(event);
	} else {
		throw new Error(`Could not dispatch event to "${methodName}".`);
	}
};
