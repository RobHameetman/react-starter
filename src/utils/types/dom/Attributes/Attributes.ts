import { DomNodeTypes } from '@app/utils/enums/DomNodeTypes';
import { isNode } from '@app/utils/functions/check/dom/isNode';
import { isObject } from '@app/utils/functions/check/js/core/isObject';
import { isUndefined } from '@app/utils/functions/check/js/core/isUndefined';
import { Attr, isAttr } from '@app/utils/types/dom/Attr';

/**
 * Represents a list of {@link Attr} nodes, potentially with a particular
 * attribute.
 *
 * @typeParam K - [Optional] The name of the attribute as a string literal type.
 * Defaults to type `string`.
 *
 * @typeParam V - [Optional] The value of the attribute as a string literal
 * type. Defaults to type `string`.
 */
export type Attributes<
	K extends string = string,
	V extends string = string,
> = NamedNodeMap & {
	readonly [key: number]: Attr<K, V>;
} & {
	readonly [_K in K]: Attr<_K, V>;
};

/**
 * Checks that an `unknown` value is a list of {@link Attributes}.
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
 * @param attrName - The name of type `K` to check for.
 * @param nodeValue - The name of type `V` to check for.
 *
 * @returns The determination that `value` is or is not a list of {@link Attributes}.
 */
export const areAttributes = <
	K extends string = string,
	V extends string = string,
>(
	value: unknown,
	attrName = '' as K,
	attrValue = '' as V,
): value is Attributes<K, V> =>
	/**
	 * value
	 */
	((!isUndefined(window) && value instanceof NamedNodeMap) ||
		isObject(value)) &&
	/**
	 * value.localName
	 */
	(attrName
		? isAttr<K, V>(Object.values(value), attrName, attrValue) &&
		  /* @ts-expect-error - Type 'K' cannot be used to index type 'NamedNodeMap | Record<string, unknown>'. */
		  isAttr<K, V>(value[attrName], attrName, attrValue)
		: true);
