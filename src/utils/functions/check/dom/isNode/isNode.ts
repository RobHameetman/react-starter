import { DomNodeTypes, isDomNodeType } from '@/utils/enums/DomNodeTypes';
import { isObject } from '@/utils/functions/check/js/core/isObject';
import { isUndefined } from '@/utils/functions/check/js/core/isUndefined';

/**
 * Checks that an `unknown` value is an {@link Node} node.
 *
 * Requirements:
 *   - `window` must be defined.
 *   - `value` must be an instance of `Node`.
 *
 * @param value - An `unknown` value.
 * @param type - [Optional] An `unknown` value.
 *
 * @returns The determination that `value` is or is not an {@link Node} node.
 */
export const isNode = <T extends Node = Node>(
	value: unknown,
	type?: DomNodeTypes,
): value is T =>
	/**
	 * value
	 */
	((!isUndefined(window) && value instanceof Node) ||
		(isObject(value) &&
			/**
			 * value.nodeType
			 */
			'nodeType' in value &&
			isDomNodeType(DomNodeTypes[value.nodeType as number]))) &&
	(type ? value.nodeType === type : true);
