import { setSearchAgainst } from './setSearchAgainst';

describe('setSearchAgainst()', (): void => {
	let result: unknown = null;

	beforeEach((): void => {
		result = setSearchAgainst();
	});

	afterEach((): void => {
		result = null;
	});

	it.skip('should return the expected output', (): void => {
		expect(result).not.toBeNull();
	});
});
