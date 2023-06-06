import { DEFAULT_ERROR } from './DEFAULT_ERROR';

describe('DEFAULT_ERROR', (): void => {
	it('should be an error', (): void => {
		expect(DEFAULT_ERROR).toBeInstanceOf(Error);
	});
});
