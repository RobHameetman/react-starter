import { faker } from '@faker-js/faker';
import {
	requestThatFails,
	requestWithIncompleteUrl,
	requestWithQueryParams,
} from './__test__';

/**
 * Things I want to test:
 * - Given baseline request parameters, when the request is successful, it should call the onSuccess() callback with the response data.
 * - Given baseline request parameters, when the request is unsuccessful, it should call the onError() callback with the error.
 * - Given a URL with no protocol, when the request is successful, it should not throw an error.
 * - Given query parameters, when the request is made, it should include the provided query parameters in the url.
 * - Given any HTTP method, when the request is made, it should include the provided HTTP method in the request.
 *
 * Baseline params:
 * - `from` is an endpoint beginning with '/' (e.g. /test-endpoint).
 * - queryParams are not included
 */

describe('request()', () => {
	beforeEach(() => {
		process.env.APP_BACKEND_SERVICE = `https://www.${faker.internet.domainName()}/`;
	});

	afterEach(() => {
		delete process.env.APP_BACKEND_SERVICE;
	});

	describe('when request is successful', () => {
		let firstParam: string | null = null;
		let method: string | null = null;
		let secondParam: string | null = null;
		let responseJson: Record<string, unknown> | null = null;
		let response: unknown = null;
		let target: string | null = null;
		let mockFetch: jest.Mock | null = null;
		let mockOnSuccess: jest.Mock | null = null;

		beforeEach(async () => {
			({
				firstParam,
				method,
				response,
				responseJson,
				secondParam,
				target,
				mockFetch,
				mockOnSuccess,
			} = await requestWithQueryParams());
		});

		afterEach(() => {
			jest.resetAllMocks();

			firstParam = null;
			method = null;
			response = null;
			responseJson = null;
			secondParam = null;
			target = null;
			mockFetch = null;
			mockOnSuccess = null;
		});

		it('should not throw an error given a url with no protocol', async () => {
			await expect(requestWithIncompleteUrl()).resolves.not.toThrowError();
		});

		it('should append the url with any provided query parameters', () => {
			expect(mockFetch).toBeCalledWith(
				expect.stringContaining(
					`${target}?firstParam=${firstParam}&secondParam=${secondParam}`,
				),
				expect.any(Object),
			);
		});

		it('should return the correct response data', () => {
			expect(response).toEqual(responseJson);
			expect(mockOnSuccess).toBeCalledWith(response);
		});

		it('should make a request with the given method', () => {
			expect(mockFetch).toBeCalledWith(
				expect.any(String),
				expect.objectContaining({ method }),
			);
		});
	});

	describe('when the request fails', () => {
		let error: unknown = null;
		let mockOnError: jest.Mock | null = null;

		beforeEach(async () => {
			({ error, mockOnError } = await requestThatFails({ resolve: true }));
		});

		afterEach(() => {
			jest.resetAllMocks();

			error = null;
			mockOnError = null;
		});

		it('should throw an error', async () => {
			await expect(requestThatFails()).rejects.toThrowError();
			await expect(error).not.toBeNull();
		});

		it('should call the onError() callback with the error', () => {
			expect(mockOnError).toBeCalledWith(expect.any(Error));
		});
	});
});
