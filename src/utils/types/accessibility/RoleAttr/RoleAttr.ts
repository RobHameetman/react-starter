import { Attr, isAttr } from '@app/utils/types/dom/Attr';

/**
 * Represents a "role" attribute on an HTML element as a DOM node.
 *
 * @typeParam V - The role that the element has as a string literal type.
 */
export type RoleAttr<V extends string = string> = Attr<'role', V>;

/**
 * Checks that an `unknown` value is a {@link RoleAttr}.
 *
 * Requirements:
 *   - `value` must be a valid {@link EscapeEvent} or {@link PressEvent}.
 *
 * @typeParam V - The role that the element has as a string literal type.
 *
 * @param value - An `unknown` value.
 * @param role - [Optional] The role to check for.
 *
 * @returns The determination that `value` is or is not a {@link RoleAttr}.
 */
export const isRoleAttr = <V extends string = string>(
	value: unknown,
	role?: V,
): value is RoleAttr<V> =>
	/**
	 * value
	 */
	isAttr(value, 'role', role);
