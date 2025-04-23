import { fakeDragEvent } from '@/utils/functions/check/react/isDragEvent/__test__';
import { noop } from '@/utils/functions/misc/noop';
import { onTest } from '@@/utils/onTest';
import { handleGlobalDragEvents } from './handleGlobalDragEvents';

jest.mock('@/utils/functions/misc/noop', () => ({
	...jest.requireActual('@/utils/functions/misc/noop'),
	noop: jest.fn(),
}));

describe('handleGlobalDragEvents()', () => {
	let error: Error | null = null;
	let event: DragEvent | null = null;
	let index = 0;

	beforeEach(() => {
		try {
			index++;

			onTest(index, {
				1: () => {
					event = fakeDragEvent();
				},
				2: () => {
					event = fakeDragEvent({ type: 'click' });
				},
			});

			handleGlobalDragEvents(event as DragEvent);
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

	it('should trigger an action given a valid DragEvent', () => {
		expect(index).toBe(1);
		expect(error).toBeNull();

		expect(noop).toBeCalled();
	});

	it('should not trigger an action given an invalid DragEvent', () => {
		expect(index).toBe(2);
		expect(error).toBeNull();

		expect(noop).not.toBeCalled();
	});
});
