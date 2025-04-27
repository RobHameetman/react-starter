import { isAnchorElement } from '@/utils/functions/check/html';
import { isElementWithRole } from '@/utils/types/accessibility/ElementWithRole';

type RoleOf<T> = T extends Element ? T['role'] : never;
type HasLinkRole<T> = RoleOf<T> extends 'link' ? T : never;

interface ElementWithRole<R extends string = string> extends Element {
	readonly role: R;
}

/**
 * A compositional event type for React components that allow you to trigger an
 * action when the component is closed.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 */
export type Link = HTMLAnchorElement | ElementWithRole<'link'>;

/**
 * Checks that an `unknown` value is a {@link Link}.
 *
 * Requirements:
 *   - `value` must be a valid {@link HTMLAnchorElement} or {@link ElementWithRole<'link'>}.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link Link}.
 */
export const isLink = <T = Element>(
	value: unknown,
): value is Link =>
	/**
	 * value
	 */
	isAnchorElement(value) || isElementWithRole(value, 'link');
