import { isString } from '@app/utils/functions/check/js/core/isString';
import { isNonEmptyString } from '@app/utils/functions/check/js/specialized/isNonEmptyString';

/**
 * A list of all possible {@link DomNodeNamespace} values.
 */
export enum DomNodeNamespaces {
	HTML = 'http://www.w3.org/1999/xhtml',
	SVG = 'http://www.w3.org/2000/svg',
	MATHML = 'http://www.w3.org/1998/Math/MathML',
	DEFAULT = HTML,
}

/**
 * Any one of the above {@link DomNodeNamespaces}.
 */
export type DomNodeNamespace = `${DomNodeNamespaces}`;

/**
 * A list of all {@link DomNodeNamespace} values.
 */
export const DOM_NODE_NAMESPACES = Object.freeze(
	Object.values(DomNodeNamespaces).filter(isString),
);

/**
 * Checks that an `unknown` value is a {@link DomNodeNamespace}.
 *
 * Requirements:
 *   - `value` must be a non-empty string and must be included as a string key
 *     of {@link DomNodeNamespaces}.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link DomNodeNamespace}.
 */
export const isDomNodeNamespace = (value: unknown): value is DomNodeNamespace =>
	/**
	 * value
	 */
	DOM_NODE_NAMESPACES.includes(value as DomNodeNamespaces);
