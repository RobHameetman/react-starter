import { uniqueId } from './uniqueId';

describe('uniqueId()', () => {
	it('should generate sequential IDs with default prefix', () => {
		expect(uniqueId()).toBe('1');
		expect(uniqueId()).toBe('2');
		expect(uniqueId()).toBe('3');
	});

	it('should generate sequential IDs with custom prefix', () => {
		expect(uniqueId('test')).toBe('test1');
		expect(uniqueId('test')).toBe('test2');
		expect(uniqueId('test')).toBe('test3');
	});

	it('should generate independent counters for different prefixes', () => {
		expect(uniqueId('test1_')).toBe('test1_1');
		expect(uniqueId('test2_')).toBe('test2_1');
		expect(uniqueId('test1_')).toBe('test1_2');
		expect(uniqueId('test2_')).toBe('test2_2');
	});
});
