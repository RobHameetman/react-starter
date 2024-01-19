import { onTest } from '@test/utils/onTest';
import { isVirtualClick } from './isVirtualClick';
import { fakePointerEvent } from '../../check/react/isPointerEvent/__test__';

describe('isVirtualClick()', () => {
	let mockIsAndroid: jest.Mock | null = null;
	let result: unknown = null;
	let error: Error | null = null;
	let index = 0;

	beforeEach(() => {
		try {
			index++;

			onTest(index, {
				2: () => {
					const event = fakePointerEvent({
						isTrusted: true,
						mozInputSource: 0,
					});

					result = isVirtualClick({ event });
				},
				3: () => {
					mockIsAndroid = jest.fn(() => true);

					const event = fakePointerEvent({
						buttons: 1,
						type: 'click',
					});

					result = isVirtualClick({
						event,
						_dependencies: {
							isAndroid: mockIsAndroid,
						},
					});
				},
				4: () => {
					const event = fakePointerEvent({ virtual: true });

					result = isVirtualClick({ event });
				},
				5: () => {
					const event = fakePointerEvent({ virtual: false });

					result = isVirtualClick({ event });
				},
			});
		} catch (thrown) {
			error = !(thrown instanceof Error) ? (thrown as Error) : new Error();
			console.error(thrown);
		}
	});

	afterEach(() => {
		error = null;
		mockIsAndroid = null;
		result = null;
	});

	it('should not throw an error', () => {
		expect(index).toBe(1);
		expect(error).toBeNull();
	});

	it('should work in Firefox', () => {
		expect(index).toBe(2);
		expect(result).toBe(true);
	});

	it('should work on Android devices which support PointerEvents', () => {
		expect(index).toBe(3);
		expect(mockIsAndroid).toBeCalled();
		expect(result).toBe(true);
	});

	it('should return `true` when `detail` is zero', () => {
		expect(index).toBe(4);
		expect(result).toBe(true);
	});

	it('should return `false` when `detail` is not zero', () => {
		expect(index).toBe(5);
		expect(result).toBe(false);
	});
});
