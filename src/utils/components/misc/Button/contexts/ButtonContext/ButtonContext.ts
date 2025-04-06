import { createContext } from 'react';
import { isFunction } from '@/utils/functions/check/js/core/isFunction';
import { isObject } from '@/utils/functions/check/js/core/isObject';
import { isNonEmptyString } from '@/utils/functions/check/js/specialized/isNonEmptyString';
import { noop } from '@/utils/functions/misc/noop';
import { PressEventHandler } from '@/utils/types/handlers/PressEventHandler';

/**
 * A shared state for button groups.
 */
export interface ButtonContext {
	/**
	 * The ID of the currently active button or `null` if no button is active.
	 * @defaultValue - `null`
	 */
	readonly active: string | null;

	/**
	 * If `true`, the currently active button will be toggled when pressed.
	 * @defaultValue - `false`
	 */
	readonly toggle: boolean;

	/**
	 * Set or toggle the currently active button.
	 * @defaultValue - A no-op function.
	 */
	readonly activate: PressEventHandler;
}

/**
 * {@link ButtonContext} default values.
 */
export const INITIAL_BUTTON_CONTEXT: ButtonContext = Object.freeze({
	/**
	 * Default value of {@link ButtonContext['active']}.
	 */
	active: null,

	/**
	 * Default value of {@link ButtonContext['toggle']}.
	 */
	toggle: false,

	/**
	 * Default value of {@link ButtonContext['activate']}.
	 */
	activate: noop,
});

/**
 * Create {@link ButtonContext} with React `Provider` and `Consumer`.
 */
export const ButtonContext = createContext<ButtonContext>({
	...INITIAL_BUTTON_CONTEXT,
});

/**
 * Checks that an `unknown` value is a {@link ButtonContext}.
 *
 * Requirements:
 *   - `value` must be an object.
 *   - `value.active` is required and must be a non-empty string or `null`.
 *   - `value.activate()` is required and must be a function.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link ButtonContext}.
 */
export const isButtonContext = (value: unknown): value is ButtonContext =>
	/**
	 * value
	 */
	isObject(value) &&
	/**
	 * value.active
	 */
	'active' in value &&
	(isNonEmptyString(value.active) || value.active === null) &&
	/**
	 * value.activate()
	 */
	'activate' in value &&
	isFunction(value.activate);
