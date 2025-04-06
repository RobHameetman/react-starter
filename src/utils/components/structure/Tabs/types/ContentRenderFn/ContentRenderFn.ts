import { MutableRefObject, ReactElement } from 'react';
import { isFunction } from '@/utils/functions/check/js/core/isFunction';
import { isReactElement } from '@/utils/functions/check/react/isReactElement';

/**
 * A function provided to the `renderContent` prop of the `<Tabs />` component.
 *
 * @typeParam `T` - The type of the HTML element to be rendered. Defaults to
 * type {@link HTMLDivElement}.
 *
 * @param content - A React ref object which contains the content.
 *
 * @returns The content rendered by React.
 */
export type ContentRenderFn<T extends HTMLElement = HTMLDivElement> = (
	content: MutableRefObject<T | null>,
) => ReactElement | null;

/**
 * Checks that an `unknown` value is a {@link ContentRenderFn}.
 *
 * Requirements:
 *   - `value` must be a function which returns a {@link ReactElement} or `null`.
 *
 * @typeParam `T` - The type of the HTML element to be rendered. Defaults to
 * type {@link HTMLDivElement}.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link ContentRenderFn}.
 */
export const isContentRenderFn = <T extends HTMLElement = HTMLDivElement>(
	value: unknown,
	content: MutableRefObject<T | null>,
): value is ContentRenderFn<T> =>
	/**
	 * value
	 */
	isFunction(value) &&
	/**
	 * value(content)
	 */
	(isReactElement(value(content)) || value(content) === null);
