import { ReactElement, ReactNode } from 'react';
import { isFunction } from '@/utils/functions/check/js/core/isFunction';
import { isObject } from '@/utils/functions/check/js/core/isObject';
import { ChangeTabHandler } from '../ChangeTabHandler';

/**
 * A function provided to the `renderTabs` prop of the `<Tabs />` component.
 * This can be used to specialize how tabs are rendered, for instance when using
 * a different component library.
 *
 * @param children - The children passed to the rendered tabs.
 * @param currentTab - The index of the current tab.
 * @param handleChangeTab - A function which changes the current tab.
 *
 * @returns The group of tabs rendered by React.
 */
export type TabsRenderFn = (
	children: ReactNode,
	currentTab: number,
	handleChangeTab: ChangeTabHandler,
) => ReactElement;

/**
 * Checks that an `unknown` value is a {@link TabsRenderFn}.
 *
 * Requirements:
 *   - `value` must be a function which returns a {@link ReactElement} or `null`.
 *
 * @param value - An `unknown` value.
 * @param args - Arguments provided if the value is a function.
 *
 * @returns The determination that `value` is or is not a {@link TabsRenderFn}.
 */
export const isTabsRenderFn = (
	value: unknown,
	args: [ReactNode, number, ChangeTabHandler],
): value is TabsRenderFn =>
	/**
	 * value
	 */
	isFunction(value) &&
	/**
	 * value(...args)
	 */
	isObject(value(...args)) &&
	'type' in (value(...args) as Record<string, unknown>) &&
	'props' in (value(...args) as Record<string, unknown>);
