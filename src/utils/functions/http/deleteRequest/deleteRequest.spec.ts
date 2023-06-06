import { deleteRequest } from './deleteRequest';

/**
 * We only need to test that the method is correct here because our type-checking
 * will ensure that `deleteRequest()` cannot be called with a different method
 * or with a `'body'` property.
 */
describe('deleteRequest()', () => {
	let mockRequest: jest.Mock | null = null;

	beforeEach(async () => {
		mockRequest = jest.fn(() => Promise.resolve());

		await deleteRequest({
			at: '/test-endpoint',
			_dependencies: { request: mockRequest },
		});
	});

	afterEach(() => {
		jest.resetAllMocks();

		mockRequest = null;
	});

	it('should make a "DELETE" request', () => {
		expect(mockRequest).toBeCalledWith(
			expect.objectContaining({ method: 'DELETE' }),
		);
	});
});
