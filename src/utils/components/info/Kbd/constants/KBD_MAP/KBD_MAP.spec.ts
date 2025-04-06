import { isObject } from '@/utils/functions/check/js/core/isObject';
import { isString } from '@/utils/functions/check/js/core/isString';
import { KBD_MAP } from './KBD_MAP';
import { isKbdModifier } from '../../enums/KbdModifiers';

describe('KBD_MAP', () => {
	it('should be an object', () => {
		expect(isObject(KBD_MAP)).toBe(true);
	});

	it('should have valid KbdModifiers as keys', () => {
		expect(Object.keys(KBD_MAP).every(isKbdModifier)).toBe(true);
	});

	it('should have string values', () => {
		expect(Object.values(KBD_MAP).every(isString)).toBe(true);
	});
});
