import { DomNodeTypes } from '@app/utils/enums/DomNodeTypes';
import { isNode } from '@app/utils/functions/check/dom/isNode';
import { isUndefined } from '@app/utils/functions/check/js/core/isUndefined';

/**
 * Checks that an `unknown` value is an {@link Element}.
 *
 * Requirements:
 *   - `value` must be an instance of {@link Element}.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not an {@link Element}.
 */
export const isElement = (value: unknown): value is Element =>
	/**
	 * value
	 */
	(!isUndefined(window) && value instanceof Element) ||
	isNode(value, DomNodeTypes.ELEMENT_NODE);
