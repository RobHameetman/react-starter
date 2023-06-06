import { DEFAULT_ERROR_MESSAGE } from './DEFAULT_ERROR_MESSAGE';

describe('DEFAULT_ERROR_MESSAGE', (): void => {
	it('should be a string', (): void => {
		expect(typeof DEFAULT_ERROR_MESSAGE).toBe('string');
	});
});
