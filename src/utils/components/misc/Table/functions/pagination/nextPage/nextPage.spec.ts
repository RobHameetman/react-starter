import { nextPage } from './nextPage';

describe('nextPage()', (): void => {
	let result: unknown = null;

	beforeEach((): void => {
		result = nextPage();
	});

	afterEach((): void => {
		result = null;
	});

	it.skip('should return the expected output', (): void => {
		expect(result).not.toBeNull();
	});
});
