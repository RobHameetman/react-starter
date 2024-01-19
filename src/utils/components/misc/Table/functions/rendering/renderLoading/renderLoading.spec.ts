import { renderLoading } from './renderLoading';

describe('renderLoading()', (): void => {
	let result: unknown = null;

	beforeEach((): void => {
		result = renderLoading();
	});

	afterEach((): void => {
		result = null;
	});

	it.skip('should return the expected output', (): void => {
		expect(result).not.toBeNull();
	});
});
