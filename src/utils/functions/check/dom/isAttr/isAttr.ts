import { DomNodeTypes } from '@app/utils/enums/DomNodeTypes';
import { isObject } from '@app/utils/functions/check/js/core/isObject';
import { isUndefined } from '@app/utils/functions/check/js/core/isUndefined';

/**
 * Checks that an `unknown` value is an {@link Attr} node.
 *
 * Requirements:
 *   - `value` must be an instance of `Attr` when the `window` object is defined or an object when `window` is `undefined`.
 *	 - `value.nodeType` must be an `ATTRIBUTE_NODE` type.
 *
 * @param value - An `unknown` value.
 * @param attrName - The name of type `K` to check for.
 * @param nodeValue - The name of type `V` to check for.
 *
 * @returns The determination that `value` is or is not an {@link Attr} node.
 */
export const isAttr = <K extends string = string, V extends string = string>(
	value: unknown,
	attrName = '' as K,
	attrValue = '' as V,
): value is Attr =>
	/**
	 * value
	 */
	(!isUndefined(window) && value instanceof Attr) ||
	(isObject(value) &&
		/**
		 * value.nodeType
		 */
		'nodeType' in value &&
		value.nodeType ===
			(!isUndefined(window)
				? Node.ATTRIBUTE_NODE
				: DomNodeTypes.ATTRIBUTE_NODE));
