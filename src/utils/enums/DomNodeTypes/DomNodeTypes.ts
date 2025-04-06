import { isString } from '@/utils/functions/check/js/core/isString';

/**
 * A list of all possible {@link DomNodeType} values.
 */
export enum DomNodeTypes {
	/**
	 * An {@link Element} node like `<p>` or `<div>`.
	 */
	ELEMENT_NODE = 1,

	/**
	 * An {@link Attribute} of an {@link Element}.
	 */
	ATTRIBUTE_NODE = 2,

	/**
	 * The actual {@link Text} inside an {@link Element} or {@link Attr}.
	 */
	TEXT_NODE = 3,

	/**
	 * A {@link CDATASection}, such as `<!CDATA[[ … ]]>`
	 */
	CDATA_SECTION_NODE = 4,

	/**
	 * @deprecated
	 */
	ENTITY_REFERENCE_NODE = 5,

	/**
	 * @deprecated
	 */
	ENTITY_NODE = 6,

	/**
	 * A {@link ProcessingInstruction} of an XML document, such as
	 * `<?xml-stylesheet … ?>`.
	 */
	PROCESSING_INSTRUCTION_NODE = 7,

	/**
	 * A {@link Comment} node, such as `<!-- … -->`.
	 */
	COMMENT_NODE = 8,

	/**
	 * A {@link Document} node.
	 */
	DOCUMENT_NODE = 9,

	/**
	 * A {@link DocumentType} node, such as `<!DOCTYPE html>`.
	 */
	DOCUMENT_TYPE_NODE = 10,

	/**
	 * A {@link DocumentFragment} node.
	 */
	DOCUMENT_FRAGMENT_NODE = 11,

	/**
	 * @deprecated
	 */
	NOTATION_NODE = 12,
}

/**
 * Any one of the above {@link DomNodeTypes}.
 */
export type DomNodeType = keyof typeof DomNodeTypes;

/**
 * A list of all {@link DomNodeType} values.
 */
export const DOM_NODE_TYPES = Object.freeze(
	Object.keys(DomNodeTypes).filter(
		(key) => isString(key) && isNaN(Number(key)),
	),
);

/**
 * Checks that an `unknown` value is a {@link DomNodeType}.
 *
 * Requirements:
 *   - `value` must be a non-empty string and must be included as a string key
 *     of {@link DomNodeTypes}.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link DomNodeType}.
 */
export const isDomNodeType = (value: unknown): value is DomNodeType =>
	/**
	 * value
	 */
	isString(value) && DOM_NODE_TYPES.includes(value);
