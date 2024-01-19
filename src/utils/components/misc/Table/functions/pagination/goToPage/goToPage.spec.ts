import { goToPage } from './goToPage';

describe('goToPage()', (): void => {
	let result: unknown = null;

	beforeEach((): void => {
		result = goToPage(2);
	});

	afterEach((): void => {
		result = null;
	});

	it.skip('should return the expected output', (): void => {
		expect(result).not.toBeNull();
	});
});
