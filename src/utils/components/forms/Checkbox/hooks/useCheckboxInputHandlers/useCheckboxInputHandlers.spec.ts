import { faker } from '@faker-js/faker';
import { renderHook } from '@testing-library/react';
import { useCheckboxInputHandlers } from './useCheckboxInputHandlers';
import {
	CurrentTarget,
	Handler,
	Props,
	Render,
	RenderState,
	changeEventWith as changeEvent,
	context,
	disabledOrReadonly,
	enabledState,
	props as propsFromState,
	randomState,
} from './__test__';

describe('useCheckboxInputHandlers()', () => {
	let error: Error | null = null;
	let props: Props | null = null;
	let result: unknown = null;
	let state: RenderState | null = null;

	beforeEach(() => {
		try {
			state = randomState();
			props = propsFromState({ state });

			result = renderHook(
				(initialProps: Props) => useCheckboxInputHandlers(initialProps),
				{ initialProps: props },
			);
		} catch (thrown) {
			error = !(thrown instanceof Error) ? (thrown as Error) : new Error();
		}
	});

	afterEach(() => {
		error = null;
		result = null;
	});

	it('should not throw an error', () => {
		expect(error).toBeNull();
	});

	it('should return an object with handlers for "input" and "change" events', () => {
		expect((result as Render).result.current).toStrictEqual(
			expect.objectContaining({
				handleChange: expect.any(Function),
				handleInput: expect.any(Function),
			}),
		);
	});

	describe('handleChange()', () => {
		let checked: boolean | null = null;
		let currentTarget: CurrentTarget | null = null;
		let handleChange: Handler | null = null;
		let indeterminate: boolean | null = null;
		let mockSetNativeInputValue: jest.Mock | null = null;
		let mockOnChange: jest.Mock | null = null;
		let mockSetChecked: jest.Mock | null = null;
		let mockSetGroupValue: jest.Mock | null = null;
		let mockSetIndeterminate: jest.Mock | null = null;
		let testIndex = 1;

		beforeEach(() => {
			try {
				checked = faker.datatype.boolean();
				indeterminate = faker.datatype.boolean();

				let currentValue = 'foo';

				switch (testIndex) {
					case 2:
						state = 'grouped';
						currentValue = checked ? 'bar,baz' : 'foo,bar,baz';
						break;
					case 3:
						state = enabledState();
						break;
					case 4:
						state = enabledState();
						break;
					case 5:
						state = enabledState();
						indeterminate = true;
						break;
					case 6:
						state = disabledOrReadonly();
						break;
					default:
						state = randomState();
						break;
				}

				if (state === 'grouped' && testIndex > 2) {
					currentValue = checked ? 'foo,bar,baz' : 'bar,baz';
				}

				mockSetNativeInputValue = jest.fn();
				mockOnChange = jest.fn();
				mockSetChecked = jest.fn();
				mockSetIndeterminate = jest.fn();

				const mockCheckboxContext = context(state as RenderState);

				({ setGroupValue: mockSetGroupValue } = mockCheckboxContext);

				props = propsFromState({
					state,
					indeterminate,
					onChange: mockOnChange,
					setChecked: mockSetChecked,
					setIndeterminate: mockSetIndeterminate,
					_dependencies: {
						dispatchReactEvent: jest.fn(),
						setNativeInputValue: mockSetNativeInputValue,
						useCheckboxContext: jest.fn(() => mockCheckboxContext),
					},
				});

				(result as Render).rerender(props as Props);
				const { handleChange } = (result as Render)?.result.current;

				currentTarget = { checked, value: currentValue };

				handleChange({
					/* @ts-expect-error - Type 'Partial<EventTarget & HTMLInputElement>' is not assignable to type 'EventTarget & Element'. */
					currentTarget,
				});

				testIndex++;
			} catch (thrown) {
				error = !(thrown instanceof Error) ? (thrown as Error) : new Error();
			}
		});

		afterEach(() => {
			checked = null;
			currentTarget = null;
			handleChange = null;
			indeterminate = null;
			mockSetNativeInputValue = null;
			mockOnChange = null;
			mockSetChecked = null;
			mockSetGroupValue = null;
			mockSetIndeterminate = null;
		});

		it('should not throw an error', () => {
			/* @ts-expect-error - `currentTarget` is not `null`. */
			expect(() => handleChange?.({ currentTarget })).not.toThrowError();
		});

		it('should update the native input value when the checkbox is in a group', () => {
			expect(state).toBe('grouped');
			expect(mockSetNativeInputValue).toBeCalledTimes(1);
			expect(mockSetChecked).not.toBeCalled();
			expect(mockSetGroupValue).not.toBeCalled();
			expect(mockSetIndeterminate).not.toBeCalled();
		});

		it('should update the "checked" state in React', () => {
			expect(mockSetChecked).toBeCalledWith(checked);
		});

		it('should update the group value', () => {
			expect(mockSetGroupValue).toBeCalled();
		});

		it('should remove the "indeterminate" state if the checkbox is indeterminate', () => {
			expect(mockSetIndeterminate).toBeCalledWith(false);
		});

		it('should do nothing when the checkbox is disabled or readonly', () => {
			expect(state).toStrictEqual(expect.stringMatching(/disabled|readonly/));
			expect(mockSetNativeInputValue).not.toBeCalled();
			expect(mockSetChecked).not.toBeCalled();
			expect(mockSetGroupValue).not.toBeCalled();
			expect(mockSetIndeterminate).not.toBeCalled();
		});
	});

	describe('handleInput()', () => {
		let currentTarget: CurrentTarget | null = null;
		let handleInput: Handler | null = null;
		let mockDispatchReactEvent: jest.Mock | null = null;
		let testIndex = 1;

		beforeEach(() => {
			try {
				switch (testIndex) {
					case 2:
						state = 'grouped';
						break;
					case 3:
						state = 'discrete';
						break;
					case 4:
						state = disabledOrReadonly();
						break;
					default:
						state = randomState();
						break;
				}

				mockDispatchReactEvent = jest.fn();

				props = propsFromState({
					state,
					_dependencies: {
						dispatchReactEvent: mockDispatchReactEvent,
					},
				});

				(result as Render).rerender(props as Props);

				({ handleInput } = (result as Render)?.result.current);
				currentTarget = {};

				handleInput({
					/* @ts-expect-error - Type 'Partial<EventTarget & HTMLInputElement>' is not assignable to type 'EventTarget & Element'. */
					currentTarget,
				});

				testIndex++;
			} catch (thrown) {
				error = !(thrown instanceof Error) ? (thrown as Error) : new Error();
			}
		});

		afterEach(() => {
			jest.resetAllMocks();

			mockDispatchReactEvent = null;
			currentTarget = null;
			handleInput = null;
			error = null;
			state = null;
			props = null;
		});

		it('should not throw an error', () => {
			/* @ts-expect-error - `currentTarget` is not `null`. */
			expect(() => handleInput?.({ currentTarget })).not.toThrowError();
		});

		it('should manually dispatch a "change" event when the checkbox is in a group', () => {
			expect(state).toBe('grouped');
			expect(mockDispatchReactEvent).toBeCalledTimes(1);
			expect(mockDispatchReactEvent).toBeCalledWith(changeEvent(currentTarget));
		});

		it('should do nothing when the checkbox is not in a group', () => {
			expect(state).toBe('discrete');
			expect(mockDispatchReactEvent).not.toBeCalled();
		});

		it('should do nothing when the checkbox is disabled or readonly', () => {
			expect(state).toStrictEqual(expect.stringMatching(/disabled|readonly/));
			expect(mockDispatchReactEvent).not.toBeCalled();
		});
	});
});
