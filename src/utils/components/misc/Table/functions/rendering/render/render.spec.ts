import { render } from './render';

describe('render()', (): void => {
	let result: unknown = null;

	beforeEach((): void => {
		result = render();
	});

	afterEach((): void => {
		result = null;
	});

	it.skip('should return the expected output', (): void => {
		expect(result).not.toBeNull();
	});
});
