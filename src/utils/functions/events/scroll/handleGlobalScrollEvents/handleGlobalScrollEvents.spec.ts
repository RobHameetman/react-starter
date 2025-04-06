import { fakeScrollEvent } from '@/utils/functions/check/react/isScrollEvent/__test__';
import { noop } from '@/utils/functions/misc/noop';
import { onTest } from '@test/utils/onTest';
import { handleGlobalScrollEvents } from './handleGlobalScrollEvents';

jest.mock('@/utils/functions/misc/noop', () => ({
	...jest.requireActual('@/utils/functions/misc/noop'),
	noop: jest.fn(),
}));

describe('handleGlobalScrollEvents()', () => {
	let error: Error | null = null;
	let event: Event | null = null;
	let index = 0;

	beforeEach(() => {
		try {
			index++;

			onTest(index, {
				1: () => {
					event = fakeScrollEvent();
				},
				2: () => {
					event = fakeScrollEvent({ type: 'wheel' });
				},
			});

			handleGlobalScrollEvents(event as Event);
		} catch (thrown) {
			error = !(thrown instanceof Error) ? (thrown as Error) : new Error();
			console.error(thrown);
		}
	});

	afterEach(() => {
		jest.resetAllMocks();

		error = null;
		event = null;
	});

	afterAll(() => {
		jest.restoreAllMocks();
	});

	it('should trigger an action given a valid scroll event', () => {
		expect(index).toBe(1);
		expect(error).toBeNull();

		expect(noop).toBeCalled();
	});

	it('should not trigger an action given an invalid scroll event', () => {
		expect(index).toBe(2);
		expect(error).toBeNull();

		expect(noop).not.toBeCalled();
	});
});
