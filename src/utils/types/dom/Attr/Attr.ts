import { DomNodeTypes } from '@/utils/enums/DomNodeTypes';
import { isNode } from '@/utils/functions/check/dom/isNode';
import { isUndefined } from '@/utils/functions/check/js/core/isUndefined';

/**
 * Represents a "role" attribute on an HTML element as a DOM node.
 *
 * @typeParam K - [Optional] The name of the attribute as a string literal type.
 * Defaults to type `string`.
 *
 * @typeParam V - [Optional] The value of the attribute as a string literal
 * type. Defaults to type `string`.
 */
export interface Attr<K extends string = string, V extends string = string>
	extends globalThis.Attr {
	readonly localName: K;
	readonly name: K;
	readonly nodeName: K;
	readonly nodeValue: V;
	readonly textContent: V;
	value: V;
}

/**
 * Checks that an `unknown` value is an {@link HTMLAttribute}.
 *
 * Requirements:
 *   - `value` must be a valid {@link EscapeEvent} or {@link PressEvent}.
 *
 * @typeParam K - [Optional] The name of the attribute as a string literal type.
 * Defaults to type `string`.
 *
 * @typeParam V - [Optional] The value of the attribute as a string literal
 * type. Defaults to type `string`.
 *
 * @param value - An `unknown` value.
 * @param attrName - [Optional] The name of type `K` to check for.
 * @param nodeValue - [Optional] The name of type `V` to check for.
 *
 * @returns The determination that `value` is or is not an {@link HTMLAttribute}.
 */
export const isAttr = <K extends string = string, V extends string = string>(
	value: unknown,
	attrName = '' as K,
	attrValue = '' as V,
): value is Attr<K, V> =>
	/**
	 * value
	 */
	((!isUndefined(window) && value instanceof Attr) ||
		isNode<Attr>(value, DomNodeTypes.ATTRIBUTE_NODE)) &&
	/**
	 * value.localName
	 */
	(attrName ? value.localName === attrName : true) &&
	/**
	 * value.name
	 */
	(attrName ? value.name === attrName : true) &&
	/**
	 * value.nodeName
	 */
	(attrName ? value.nodeName === attrName : true) &&
	/**
	 * value.nodeValue
	 */
	(attrValue ? value.nodeValue === attrValue : true) &&
	/**
	 * value.textContent
	 */
	(attrValue ? value.textContent === attrValue : true) &&
	/**
	 * value.value
	 */
	(attrValue ? value.value === attrValue : true);
