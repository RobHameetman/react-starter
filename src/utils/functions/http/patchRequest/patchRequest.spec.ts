import { patchRequest } from './patchRequest';

/**
 * We only need to test that the method is correct here because our type-checking
 * will ensure that `patchRequest()` cannot be called with a different method.
 */
describe('patchRequest()', () => {
	let mockRequest: jest.Mock | null = null;

	beforeEach(async () => {
		mockRequest = jest.fn(() => Promise.resolve());

		await patchRequest({
			at: '/test-endpoint',
			body: {
				test: 'test',
			},
			_dependencies: { request: mockRequest },
		});
	});

	afterEach(() => {
		jest.resetAllMocks();

		mockRequest = null;
	});

	it('should make a "PATCH" request', () => {
		expect(mockRequest).toBeCalledWith(
			expect.objectContaining({ method: 'PATCH' }),
		);
	});
});
