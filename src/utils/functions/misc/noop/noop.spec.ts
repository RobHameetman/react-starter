import { noop } from './noop';

describe('noop()', () => {
	it('should never return a value', () => {
		expect(noop()).toBeUndefined();
	});

	it('should take any number of arguments', () => {
		expect(noop('foo', 'bar', 'baz')).toBeUndefined();
	});
});
