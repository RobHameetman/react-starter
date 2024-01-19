import { prefersContrast } from './prefersContrast';

describe('prefersContrast()', () => {
	let mockHasMediaQuery: jest.Mock | null = null;
	let error: Error | null = null;

	beforeEach(() => {
		try {
			mockHasMediaQuery = jest.fn();

			prefersContrast({
				_dependencies: {
					hasMediaQuery: mockHasMediaQuery,
				},
			});
		} catch (thrown) {
			error = !(thrown instanceof Error) ? (thrown as Error) : new Error();
			console.error(thrown);
		}
	});

	afterEach(() => {
		jest.restoreAllMocks();

		mockHasMediaQuery = null;
		error = null;
	});

	it('should not throw an error', () => {
		expect(error).toBeNull();
	});

	it('should check for the "forced-colors" media query', () => {
		expect(mockHasMediaQuery).toBeCalledWith('forced-colors: active');
	});

	it('should check for the "prefers-contrast" media query', () => {
		expect(mockHasMediaQuery).toBeCalledWith('prefers-contrast: more');
		expect(mockHasMediaQuery).toBeCalledWith('prefers-contrast: custom');
	});
});
