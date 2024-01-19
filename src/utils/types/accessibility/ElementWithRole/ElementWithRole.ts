import { isHtmlElement } from '@app/utils/functions/check/html/isHtmlElement';
import { Attributes } from '@app/utils/types/dom/Attributes';

/**
 * Represents an HTML element that has a specific role.
 *
 * @typeParam T - The role that the element has as a string literal type.
 */
export interface ElementWithRole<T extends string> extends Element {
	readonly attributes: Attributes<'role', T>;
	readonly role: T;
}

/**
 * Checks that an `unknown` value is an {@link ElementWithRole}.
 *
 * Requirements:
 *   - `value` must be a valid {@link EscapeEvent} or {@link PressEvent}.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
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
