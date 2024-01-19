import { isTrident } from './isTrident';

describe('isTrident()', () => {
	let mockDependency: jest.Mock | null = null;
	let error: Error | null = null;

	beforeEach(() => {
		try {
			mockDependency = jest.fn();

			isTrident({
				_dependencies: {
					dependency: mockDependency,
				},
			});
		} catch (thrown) {
			error = !(thrown instanceof Error) ? (thrown as Error) : new Error();
			console.error(thrown);
		}
	});

	afterEach(() => {
		jest.restoreAllMocks();

		mockDependency = null;
		error = null;
	});

	it('should not throw an error', () => {
		expect(error).toBeNull();
	});

	it('should depend on the given dependency', () => {
		expect(mockDependency).toBeCalled();
	});
});
