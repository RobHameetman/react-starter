import { debounce } from './debounce';

describe('debounce()', () => {
	let fn: jest.Mock | null = null;
	let result: unknown = null;

	beforeEach(() => {
		jest.useFakeTimers();

		fn = jest.fn(() => ({}));

		const debouncedFn = debounce(fn, 1000);

		for (let i = 0; i < 100; i++) {
			result = debouncedFn();
		}

		jest.runAllTimers();
	});

	afterEach(() => {
		fn = null;
		result = null;
	});

	it('should call the callback once the timer has run', () => {
		expect(fn).toHaveBeenCalled();
	});

	it('should only call the callback once', () => {
		expect(fn).toHaveBeenCalledTimes(1);
	});

	it('should return results as intended', async () => {
		await expect(result).resolves.not.toBeNull();
	});
});
