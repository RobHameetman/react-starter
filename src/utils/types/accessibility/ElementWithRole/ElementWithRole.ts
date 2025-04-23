import { isHtmlElement } from '@/utils/functions/check/html/isHtmlElement';
import { Attributes } from '@/utils/types/dom/Attributes';

/**
 * Represents an HTML element that has a specific role.
 *
 * @typeParam T - The role that the element has as a string literal type.
 */
export interface ElementWithRole<R extends string> extends Element {
	readonly attributes: Attributes<'role', R>;
	readonly role: R;
}

/**
 * Checks that an `unknown` value is an {@link ElementWithRole}.
 *
 * Requirements:
 *   - `value` must be a valid {@link HTMLElement} with a `role` of type {@link R}.
 *
 * @typeParam R - The string literal type for the role.
 *
 * @param value - An `unknown` value.
 * @param role - The role to check for.
 *
 * @returns The determination that `value` is or is not an {@link ElementWithRole}.
 */
export const isElementWithRole = <R extends string>(
	value: unknown,
	role: R,
): value is ElementWithRole<R> =>
	/**
	 * value
	 */
	isHtmlElement(value) && value.getAttribute('role') === role;
