import { putRequest } from './putRequest';

/**
 * We only need to test that the method is correct here because our type-checking
 * will ensure that `putRequest()` cannot be called with a different method.
 */
describe('putRequest()', () => {
	let mockRequest: jest.Mock | null = null;

	beforeEach(async () => {
		mockRequest = jest.fn(() => Promise.resolve());

		await putRequest({
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

	it('should make a "PUT" request', () => {
		expect(mockRequest).toBeCalledWith(
			expect.objectContaining({ method: 'PUT' }),
		);
	});
});
