import { noop } from './noop';

describe('noop()', () => {
	it('should never return a value', () => {
		expect(noop()).toBeUndefined();
	});

	it('should take any number of arguments', () => {
		expect(noop('foo', 'bar', 'baz')).toBeUndefined();
	});

	it('should take any type of arguments', () => {
		expect(noop(1, true, 'foo', {})).toBeUndefined();
	});
});
