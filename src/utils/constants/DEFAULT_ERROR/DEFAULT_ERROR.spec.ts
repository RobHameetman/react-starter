import { DEFAULT_ERROR } from './DEFAULT_ERROR';

describe('DEFAULT_ERROR', () => {
	it('should be an error', () => {
		expect(DEFAULT_ERROR).toBeInstanceOf(Error);
	});
});
