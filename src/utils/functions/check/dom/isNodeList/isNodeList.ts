import { isNode } from '@app/utils/functions/check/dom/isNode';
import { isObject } from '@app/utils/functions/check/js/core/isObject';
import { isUndefined } from '@app/utils/functions/check/js/core/isUndefined';

/**
 * Checks that an `unknown` value is a {@link NodeList}.
 *
 * Requirements:
 *   - `value` must be a valid instance of `NodeList` or an object whose values are `Node`s.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link NodeList}.
 */
export const isNodeList = (value: unknown): value is NodeList =>
	/**
	 * value
	 */
	(!isUndefined(window) && value instanceof NodeList) ||
	(isObject(value) && Object.values(value).every((node) => isNode(node)));
