import { requestWithBaselineParams } from './requestWithBaselineParams';
import { request } from '../request';

export const requestThatFails = async ({ resolve = false } = {}) => {
	const { target, mockResponseJson, mockOnSuccess, mockOnError } =
		await requestWithBaselineParams({
			act: false,
		});

	const mockFetch = jest.fn(() => Promise.reject(new Error()));

	const params = {
		at: target,
		onSuccess: mockOnSuccess,
		onError: mockOnError,
		_dependencies: {
			fetch: mockFetch,
		},
	};

	let error = null;

	try {
		await request(params);
	} catch (err) {
		error = err;

		if (!resolve) {
			throw error;
		}
	}

	return {
		error,
		target,
		mockFetch,
		mockOnError,
		mockOnSuccess,
		mockResponseJson,
	};
};
