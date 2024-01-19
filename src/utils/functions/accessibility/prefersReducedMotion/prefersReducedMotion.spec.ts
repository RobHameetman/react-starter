import { prefersReducedMotion } from './prefersReducedMotion';

describe('prefersReducedMotion()', () => {
	let mockHasMediaQuery: jest.Mock | null = null;
	let error: Error | null = null;

	beforeEach(() => {
		try {
			mockHasMediaQuery = jest.fn();

			prefersReducedMotion({
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

	it('should check for the "prefers-reduced-motion" media query', () => {
		expect(mockHasMediaQuery).toBeCalledWith('prefers-reduced-motion: reduce');
	});
});
