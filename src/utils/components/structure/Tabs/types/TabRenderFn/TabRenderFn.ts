import { ReactElement } from 'react';
import { isFunction } from '@/utils/functions/check/js/core/isFunction';
import { isReactElement } from '@/utils/functions/check/react/isReactElement';

/**
 * A function provided to the `renderTab` prop of the `<Tab />` component. This
 * can be used to specialize how tabs are rendered, for instance when using a
 * different component library.
 *
 * @param name - The name of the tab to render.
 * @param selected - Whether the tab is currently selected or not.
 *
 * @returns The tab rendered by React.
 */
export type TabRenderFn = (name: string, selected: boolean) => ReactElement;

/**
 * Checks that an `unknown` value is a {@link TabRenderFn}.
 *
 * Requirements:
 *   - `value` must be a function which returns a {@link ReactElement} or `null`.
 *
 * @param value - An `unknown` value.
 * @param args - Arguments provided if the value is a function.
 *
 * @returns The determination that `value` is or is not a {@link TabRenderFn}.
 */
export const isTabRenderFn = (
	value: unknown,
	args: [string, boolean],
): value is TabRenderFn =>
	/**
	 * value
	 */
	isFunction(value) &&
	/**
	 * value(...args)
	 */
	isReactElement(value(...args));
