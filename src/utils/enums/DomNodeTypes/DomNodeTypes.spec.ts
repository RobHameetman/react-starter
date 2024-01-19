import { isDomNodeType } from './DomNodeTypes';

describe('isDomNodeType()', () => {
	it('should return true given the string value "ELEMENT_NODE"', () => {
		expect(isDomNodeType('ELEMENT_NODE')).toBe(true);
	});

	it('should return true given the string value "ATTRIBUTE_NODE"', () => {
		expect(isDomNodeType('ATTRIBUTE_NODE')).toBe(true);
	});

	it('should return true given the string value "TEXT_NODE"', () => {
		expect(isDomNodeType('TEXT_NODE')).toBe(true);
	});

	it('should return true given the string value "CDATA_SECTION_NODE"', () => {
		expect(isDomNodeType('CDATA_SECTION_NODE')).toBe(true);
	});

	it('should return true given the string value "ENTITY_REFERENCE_NODE"', () => {
		expect(isDomNodeType('ENTITY_REFERENCE_NODE')).toBe(true);
	});

	it('should return true given the string value "ENTITY_NODE"', () => {
		expect(isDomNodeType('ENTITY_NODE')).toBe(true);
	});

	it('should return true given the string value "PROCESSING_INSTRUCTION_NODE"', () => {
		expect(isDomNodeType('PROCESSING_INSTRUCTION_NODE')).toBe(true);
	});

	it('should return true given the string value "COMMENT_NODE"', () => {
		expect(isDomNodeType('COMMENT_NODE')).toBe(true);
	});

	it('should return true given the string value "DOCUMENT_NODE"', () => {
		expect(isDomNodeType('DOCUMENT_NODE')).toBe(true);
	});

	it('should return true given the string value "DOCUMENT_TYPE_NODE"', () => {
		expect(isDomNodeType('DOCUMENT_TYPE_NODE')).toBe(true);
	});

	it('should return true given the string value "DOCUMENT_FRAGMENT_NODE"', () => {
		expect(isDomNodeType('DOCUMENT_FRAGMENT_NODE')).toBe(true);
	});

	it('should return true given the string value "NOTATION_NODE"', () => {
		expect(isDomNodeType('NOTATION_NODE')).toBe(true);
	});

	it('should return false given an empty string', () => {
		expect(isDomNodeType('')).toBe(false);
	});
});
