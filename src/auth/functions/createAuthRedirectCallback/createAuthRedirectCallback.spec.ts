import { mockHistory } from './__test__';
import { createAuthRedirectCallback } from './createAuthRedirectCallback';

describe('createAuthRedirectCallback()', () => {
	let mockPush: jest.Mock | null = null;

	beforeEach(() => {
		mockPush = jest.fn();
	});

	afterEach(() => {
		mockPush = null;

		jest.resetAllMocks();
	});

	describe('given a new route', () => {
		beforeEach(() => {
			createAuthRedirectCallback(
				mockHistory({ mockPush, currentRoute: '/foo' }),
			)({ targetUrl: '/not-foo' });
		});

		it('should invoke history.push() to redirect users to the appropriate target url', () => {
			expect(mockPush).toHaveBeenCalledWith('not-foo');
		});
	});

	describe('given the current route', () => {
		beforeEach(() => {
			createAuthRedirectCallback(
				mockHistory({ mockPush, currentRoute: '/foo' }),
			)({ targetUrl: '/foo' });
		});

		it('should not invoke history.push() to redirect users when the target url is the current route', () => {
			expect(mockPush).not.toHaveBeenCalled();
		});
	});
});
