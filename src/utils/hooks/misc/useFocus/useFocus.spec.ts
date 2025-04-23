import { renderHook } from '@testing-library/react';
import { mockWindow } from '@@/mocks/misc/mockWindow';
import { useFocus } from './useFocus';
import { MutableRefObject } from 'react';

describe('useFocus()', () => {
	let addListenerSpy: jest.Mock | null = null;
	let removeListenerSpy: jest.Mock | null = null;
	let mockRef: jest.Mock | null = null;
	let mockOnBlur: jest.Mock | null = null;
	let mockOnFocus: jest.Mock | null = null;
	let focused: boolean | null = null;
	let ref: MutableRefObject<unknown> | null = null;
	let result: unknown = null;

	beforeAll(() => {
		addListenerSpy = jest.fn();
		removeListenerSpy = jest.fn();

		mockRef = jest.fn()
			.mockReturnValueOnce({ current: null })
			.mockReturnValueOnce({ current: null })
			.mockReturnValueOnce({ current: null })
			.mockReturnValueOnce({ current: null })
			.mockReturnValueOnce({ current: null })
			.mockReturnValueOnce({ current: null })
			.mockReturnValueOnce({ current: null })
			.mockReturnValueOnce({ current: null })
			.mockReturnValueOnce({ current: jest.fn() });

		mockOnBlur = jest.fn();
		mockOnFocus = jest.fn();

		mockWindow({
			addEventListener: addListenerSpy,
			removeEventListener: removeListenerSpy,
		});
	});

	beforeEach(() => {
		({
			result: { current: result },
		} = renderHook(() =>
			useFocus({
				ref: mockRef !== null && mockRef(),
				/* @ts-expect-error -  Type 'null' is not assignable to type 'FocusEventHandler<HTMLElement> | undefined'. */
				onBlur: mockOnBlur,
				/* @ts-expect-error -  Type 'null' is not assignable to type 'FocusEventHandler<HTMLElement> | undefined'. */
				onFocus: mockOnFocus,
			}),
		));

		/* @ts-expect-error - Property 'focused' does not exist on type 'unknown'. */
		({ focused, ref } = result);

		const eventListener = addListenerSpy?.mock.calls[0][1];

		const blurEvent = new Event('blur');
		const focusEvent = new Event('focus');

		eventListener(blurEvent);
		eventListener(focusEvent);
	});

	afterEach(() => {
		jest.clearAllMocks();

		focused = null;
		ref = null;
		result = null;
	});

	afterAll(() => {
		jest.restoreAllMocks();

		mockRef = null;
		mockOnBlur = null;
		mockOnFocus = null;

		addListenerSpy = null;
		removeListenerSpy = null;
	});

	it('should return an object with the current focus state and a ref', () => {
		expect(result).toBe(expect.objectContaining({
			focused: expect.any(Boolean),
			ref: expect.objectContaining({ current: expect.any(HTMLElement) }),
		}));
	});

	it('should initialize with focused set to false', () => {
		expect(focused).toBe(false);
	});

	it('should add event listeners to the element when ref is provided', () => {
		expect(addListenerSpy).toHaveBeenCalledTimes(2);
		expect(addListenerSpy).toHaveBeenCalledWith('focus', expect.any(Function));
		expect(addListenerSpy).toHaveBeenCalledWith('blur', expect.any(Function));
	});

	it('should call onBlur and set focused to false when element is blurred', () => {
		expect(focused).toBe(false);
		expect(mockOnBlur).toHaveBeenCalledWith(event);
	});

	it('should call onFocus() and set focused to true when element is focused', () => {
		expect(focused).toBe(true);
		expect(mockOnFocus).toHaveBeenCalledWith(event);
	});

	it('should clean up event listeners when unmounted', () => {
		expect(removeListenerSpy).toHaveBeenCalledTimes(2);
		expect(removeListenerSpy).toHaveBeenCalledWith('focus', expect.any(Function));
		expect(removeListenerSpy).toHaveBeenCalledWith('blur', expect.any(Function));
	});

	it('should handle ref object properly', () => {
		expect(ref).toBe(expect.objectContaining({ current: expect.any(HTMLElement) }));
		expect(addListenerSpy).toHaveBeenCalled();
		expect(removeListenerSpy).toHaveBeenCalled();
	});

	it('should handle null refs properly', () => {
		expect(ref).toBe(expect.objectContaining({ current: null }));
		expect(addListenerSpy).not.toHaveBeenCalled();
		expect(removeListenerSpy).not.toHaveBeenCalled();
	});
});
