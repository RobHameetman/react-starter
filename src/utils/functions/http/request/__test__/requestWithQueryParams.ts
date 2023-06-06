import { faker } from '@faker-js/faker';
import { requestWithBaselineParams } from './requestWithBaselineParams';
import { request } from '../request';

export const requestWithQueryParams = async ({ act = true } = {}) => {
	const {
		target,
		method,
		responseJson,
		mockFetch,
		mockResponseJson,
		mockOnSuccess,
		mockOnError,
	} = await requestWithBaselineParams({
		act: false,
	});

	const firstParam = faker.word.noun();
	const secondParam = faker.word.noun();

	const params = {
		at: target,
		method,
		queryParams: {
			firstParam,
			secondParam,
		},
		onSuccess: mockOnSuccess,
		onError: mockOnError,
		_dependencies: {
			fetch: mockFetch,
		},
	};

	/* @ts-expect-error - Expects mockOnSuccess() to have a Response object */
	const response = act ? await request(params) : null;

	return {
		firstParam,
		method,
		response,
		responseJson,
		secondParam,
		target,
		mockFetch,
		mockOnError,
		mockOnSuccess,
		mockResponseJson,
	};
};
