import type { SyntheticEvent } from 'react';
import { isBoolean } from '@/utils/functions/check/js/core/isBoolean';
import { isFunction } from '@/utils/functions/check/js/core/isFunction';
import { isNumber } from '@/utils/functions/check/js/core/isNumber';
import { isString } from '@/utils/functions/check/js/core/isString';
import { isObject } from '@/utils/functions/check/js/core/isObject';

/**
 * Checks that an `unknown` value is a {@link SyntheticEvent}. This type guard is
 * used in other type guards to improve readability.
 *
 * Requirements:
 *   - `value` must be an object.
 *   - `value.bubbles` is required and must be a boolean.
 *   - `value.cancelable` is required and must be a boolean.
 *   - `value.currentTarget` is required and must be an object or `null`.
 *   - `value.defaultPrevented` is required and must be a boolean.
 *   - `value.eventPhase` is required and must be a number.
 *   - `value.isTrusted` is required and must be a boolean.
 *   - `value.nativeEvent` is required and must be an object.
 *   - `value.target` is required and must be an object or `null`.
 *   - `value.timestamp` is required and must be a string.
 *   - `value.type` is required and must be a string.
 *   - `value.isDefaultPrevented()` is required and must be a function.
 *   - `value.isPropagationStopped()` is required and must be a function.
 *   - `value.isPropagationStopped()` is required and must be a function.
 *   - `value.persist()` is required and must be a function.
 *   - `value.preventDefault()` is required and must be a function.
 *   - `value.stopPropagation()` is required and must be a function.
 *
 * @typeParam `T` - The type of HTML element that will be the target of the event.
 * @typeParam `E` - The type of event that will be triggered.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link SyntheticEvent}.
 */
export const isSyntheticEvent = <T = Element, E = Event>(
	value: unknown,
): value is SyntheticEvent<T, E> =>
	/**
	 * value
	 */
	isObject(value) &&
	/**
	 * value.bubbles
	 */
	'bubbles' in value &&
	isBoolean(value.bubbles) &&
	/**
	 * value.cancelable
	 */
	'cancelable' in value &&
	isBoolean(value.cancelable) &&
	/**
	 * value.currentTarget
	 */
	'currentTarget' in value &&
	(isObject(value.currentTarget) || value.currentTarget === null) &&
	/**
	 * value.defaultPrevented
	 */
	'defaultPrevented' in value &&
	isBoolean(value.defaultPrevented) &&
	/**
	 * value.eventPhase
	 */
	'eventPhase' in value &&
	isNumber(value.eventPhase) &&
	/**
	 * value.isTrusted
	 */
	'isTrusted' in value &&
	isBoolean(value.isTrusted) &&
	/**
	 * value.nativeEvent
	 */
	'nativeEvent' in value &&
	isObject(value.nativeEvent) &&
	/**
	 * value.target
	 */
	'target' in value &&
	(isObject(value.target) || value.target === null) &&
	/**
	 * value.timeStamp
	 */
	'timeStamp' in value &&
	isNumber(value.timeStamp) &&
	/**
	 * value.type
	 */
	'type' in value &&
	isString(value.type) &&
	/**
	 * value.isDefaultPrevented()
	 */
	'isDefaultPrevented' in value &&
	isFunction(value.isDefaultPrevented) &&
	/**
	 * value.isPropagationStopped()
	 */
	'isPropagationStopped' in value &&
	isFunction(value.isPropagationStopped) &&
	/**
	 * value.persist()
	 */
	'persist' in value &&
	isFunction(value.persist) &&
	/**
	 * value.preventDefault()
	 */
	'preventDefault' in value &&
	isFunction(value.preventDefault) &&
	/**
	 * value.stopPropagation()
	 */
	'stopPropagation' in value &&
	isFunction(value.stopPropagation);
