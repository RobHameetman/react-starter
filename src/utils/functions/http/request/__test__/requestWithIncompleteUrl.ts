import { faker } from '@faker-js/faker';
import { requestWithBaselineParams } from './requestWithBaselineParams';
import { request } from '../request';

export const requestWithIncompleteUrl = async ({ act = true } = {}) => {
	const {
		method,
		responseJson,
		mockFetch,
		mockResponseJson,
		mockOnSuccess,
		mockOnError,
	} = await requestWithBaselineParams({
		act: false,
	});

	const target = `www.${faker.internet.domainName()}/test-endpoint`;

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
