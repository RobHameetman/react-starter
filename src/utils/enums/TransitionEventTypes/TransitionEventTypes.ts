import { isString } from '@app/utils/functions/check/js/core/isString';

/**
 * A list of all possible {@link TransitionEventType} values.
 */
export enum TransitionEventTypes {
	/**
	 * The `transitioncancel` event is fired when a CSS transition is canceled.
	 */
	transitioncancel = 'transitioncancel',

	/**
	 * The `transitionend` event is fired when a CSS transition has completed. In
	 * the case where a transition is removed before completion, such as if the
	 * `transition-property` is removed or `display` is set to `none`, then the
	 * event will not be generated. The `transitionend` event is fired in both
	 * directions - as it finishes transitioning to the transitioned state, and
	 * when it fully reverts to the default or non-transitioned state. If there is
	 * no transition delay or duration, if both are 0s or neither is declared,
	 * there is no transition, and none of the transition events are fired. If the
	 * `transitioncancel` event is fired, the `transitionend` event will not fire.
	 */
	transitionend = 'transitionend',

	/**
	 * The `transitionrun` event is fired when a CSS transition is first created,
	 * i.e. before any `transition-delay` has begun. This event is not cancelable.
	 */
	transitionrun = 'transitionrun',

	/**
	 * The `transitionstart` event is fired when a CSS transition has actually
	 * started, i.e., after any `transition-delay` has ended. This event is not
	 * cancelable.
	 */
	transitionstart = 'transitionstart',
}

/**
 * Any one of the above {@link TransitionEventTypes}.
 */
export type TransitionEventType = keyof typeof TransitionEventTypes;

/**
 * A list of all {@link TransitionEventType} values.
 */
export const TRANSITION_EVENT_TYPES = Object.freeze(
	Object.keys(TransitionEventTypes).filter(isString),
);

/**
 * Checks that an `unknown` value is a {@link TransitionEventType}.
 *
 * Requirements:
 *   - `value` must be a non-empty string and must be included as a string key
 *     of {@link TransitionEventTypes}.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link TransitionEventType}.
 */
export const isTransitionEventType = (
	value: unknown,
): value is TransitionEventType =>
	/**
	 * value
	 */
	isString(value) && TRANSITION_EVENT_TYPES.includes(value);
