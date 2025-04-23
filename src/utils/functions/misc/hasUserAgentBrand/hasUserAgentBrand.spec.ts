import { hasUserAgentBrand } from './hasUserAgentBrand';

describe('hasUserAgentBrand()', () => {
	let error: Error | null = null;
	let result: unknown = null;

	beforeAll(() => {
		jest.spyOn(window.navigator.userAgentData as NavigatorUAData, 'brands', 'get')
			.mockReturnValueOnce([{ brand: 'test', version: '' }])
			.mockReturnValue([{ brand: 'Firefox', version: '' }]);
	});

	beforeEach(() => {
		try {
			result = hasUserAgentBrand(/^test$/i);
		} catch (thrown) {
			error = !(thrown instanceof Error) ? (thrown as Error) : new Error();
			console.error(thrown);
		}
	});

	afterEach(() => {
		jest.restoreAllMocks();

		result = null;
		error = null;
	});

	it('should return true given a regex that matches the current user agent brand', () => {
		expect(result).toBe(true);
		expect(error).toBeNull();
	});

	it('should return false given a regex that does not match the current user agent brand', () => {
		expect(result).toBe(false);
		expect(error).toBeNull();
	});
});
