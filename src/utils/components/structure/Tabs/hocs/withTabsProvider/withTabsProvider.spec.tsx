import { withTabsProvider } from './withTabsProvider';

describe('withTabsProvider()', () => {
	let result: unknown = null;

	beforeEach(() => {
		result = withTabsProvider()(jest.fn());
	});

	afterEach(() => {
		result = null;
	});

	it('should return the expected output', () => {
		expect(result).not.toBeNull();
	});
});
