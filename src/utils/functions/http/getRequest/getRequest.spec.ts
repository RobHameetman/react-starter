import { getRequest } from './getRequest';

/**
 * We only need to test that the method is correct here because our type-checking
 * will ensure that `getRequest()` cannot be called with a different method or with a
 * `'body'` property.
 */
describe('getRequest()', () => {
	let mockRequest: jest.Mock | null = null;

	beforeEach(async () => {
		mockRequest = jest.fn(() => Promise.resolve());

		await getRequest({
			at: '/test-endpoint',
			_dependencies: { request: mockRequest },
		});
	});

	afterEach(() => {
		jest.resetAllMocks();

		mockRequest = null;
	});

	it('should make a "GET" request', () => {
		expect(mockRequest).toBeCalledWith(
			expect.objectContaining({ method: 'GET' }),
		);
	});
});
