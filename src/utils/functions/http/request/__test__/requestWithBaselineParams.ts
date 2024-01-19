import { faker } from '@faker-js/faker';
import { request } from '../request';

/**
 * @param arrange - Set this to `true` when used as an input directly into `request()`.
 * @defaultValue - `false`
 *
 * @param act - Set this to `false` when used in other setup functions.
 * @defaultValue - `true`
 */
export const requestWithBaselineParams = async ({ act = true } = {}) => {
	const data = faker.animal.rabbit();
	const responseJson = { data };
	const target = `/test-endpoint`;

	const mockResponseJson = jest.fn(() => Promise.resolve(responseJson));
	const mockResponseText = jest.fn(() => Promise.resolve(data));
	const mockOnSuccess = jest.fn();
	const mockOnError = jest.fn();

	const mockFetch = jest.fn(() =>
		Promise.resolve({
			ok: true,
			status: 200,
			statusMessage: 'OK',
			json: mockResponseJson,
			text: mockResponseText,
		}),
	);

	const method = faker.internet.httpMethod();

	const params = {
		at: target,
		method,
		onSuccess: mockOnSuccess,
		onError: mockOnError,
		_dependencies: {
			fetch: mockFetch,
		},
	};

	/* @ts-expect-error - Expects mockOnSuccess() to have a Response object */
	const response = act ? await request(params) : null;

	return {
		data,
		method,
		response,
		responseJson,
		target,
		mockFetch,
		mockOnError,
		mockOnSuccess,
		mockResponseJson,
	};
};
