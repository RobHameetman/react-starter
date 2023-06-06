import { postRequest } from './postRequest';

/**
 * We only need to test that the method is correct here because our type-checking
 * will ensure that `postRequest()` cannot be called with a different method.
 */
describe('postRequest()', () => {
	let mockRequest: jest.Mock | null = null;

	beforeEach(async () => {
		mockRequest = jest.fn(() => Promise.resolve());

		await postRequest({
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

	it('should make a "POST" request', () => {
		expect(mockRequest).toBeCalledWith(
			expect.objectContaining({ method: 'POST' }),
		);
	});
});
