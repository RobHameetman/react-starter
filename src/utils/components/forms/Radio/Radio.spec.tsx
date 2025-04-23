import { act, fireEvent } from '@testing-library/react';
import { matchMediaSpy } from '@@/spies/misc/matchMediaSpy';
import { onTest } from '@@/utils/onTest';
import { Radio } from './Radio';
import { render } from './__test__';

describe('<Radio />', () => {
	let $box: HTMLDivElement | null = null;
	let $component: HTMLElement | null = null;
	let $container: HTMLDivElement | null = null;
	let $input: HTMLInputElement | null = null;
	let $label: HTMLLabelElement | null = null;
	let checked: boolean | null = null;
	let error: Error | null = null;
	let initiallyChecked: boolean | null = null;
	let mockOnBlur: jest.Mock | null = null;
	let mockOnBlurCapture: jest.Mock | null = null;
	let mockOnChange: jest.Mock | null = null;
	let mockOnChangeCapture: jest.Mock | null = null;
	let mockOnFocus: jest.Mock | null = null;
	let mockOnFocusCapture: jest.Mock | null = null;
	let mockOnPress: jest.Mock | null = null;
	let mockOnPressCapture: jest.Mock | null = null;
	let result: unknown = null;
	let index = 1;

	beforeEach(() => {
		try {
			matchMediaSpy();

			onTest(index, {
				/**
				 * should be polymorphic
				 */
				2: () => {
					({ $component } = render(<Radio as="main" />));
				},
				/**
				 * should disable animations by default when the user prefers reduced motion
				 */
				3: () => render(<Radio />),
				/**
				 * should be stylable
				 */
				6: () => {
					({ $component } = render(<Radio className="test" />));
				},
				/**
				 * should be disablable
				 */
				7: () => {
					mockOnPress = jest.fn(() => {
						result = false;
					});

					({ $component } = render(<Radio onPress={mockOnPress} disabled />));

					fireEvent.click($component);
				},
				/**
				 * should be identifiable
				 */
				8: () => {
					({ $component } = render(<Radio id="test" />));
				},
				/**
				 * should accept a readonly state
				 */
				12: () => {
					mockOnPress = jest.fn(() => {
						result = false;
					});

					({ $component } = render(<Radio onPress={mockOnPress} readonly />));

					fireEvent.click($component);
				},
				/**
				 * should handle change events correctly when unchecked
				 */
				17: () => {
					let pressRadioButton: () => boolean;

					mockOnChange = jest.fn(() => {
						result = false;
					});

					mockOnChangeCapture = jest.fn();

					({ initiallyChecked, pressRadioButton } = render(
						<Radio
							onChange={mockOnChange}
							onChangeCapture={mockOnChangeCapture}
						/>,
					));

					act(() => {
						checked = pressRadioButton();
					});
				},
				/**
				 * should handle change events correctly when checked
				 */
				18: () => {
					let pressRadioButton: () => boolean;

					mockOnChange = jest.fn(() => {
						result = false;
					});

					mockOnChangeCapture = jest.fn();

					({ initiallyChecked, pressRadioButton } = render(
						<Radio
							onChange={mockOnChange}
							onChangeCapture={mockOnChangeCapture}
							checked
						/>,
					));

					act(() => {
						checked = pressRadioButton();
					});
				},
				/**
				 * should handle press events correctly when unchecked
				 */
				19: () => {
					let pressRadioButton: () => boolean;

					mockOnPress = jest.fn(() => {
						result = false;
					});

					mockOnPressCapture = jest.fn();

					({ initiallyChecked, pressRadioButton } = render(
						<Radio onPress={mockOnPress} onPressCapture={mockOnPressCapture} />,
					));

					act(() => {
						checked = pressRadioButton();
					});
				},
				/**
				 * should handle press events correctly when checked
				 */
				20: () => {
					let pressRadioButton: () => boolean;

					mockOnPress = jest.fn(() => {
						result = false;
					});

					mockOnPressCapture = jest.fn();

					({ initiallyChecked, pressRadioButton } = render(
						<Radio
							onPress={mockOnPress}
							onPressCapture={mockOnPressCapture}
							checked
						/>,
					));

					act(() => {
						checked = pressRadioButton();
					});
				},
				/**
				 * should handle focus events correctly when focused
				 */
				21: () => {
					mockOnBlur = jest.fn(() => {
						result = false;
					});

					mockOnBlurCapture = jest.fn();

					mockOnFocus = jest.fn();
					mockOnFocusCapture = jest.fn();

					({ $component, $input } = render(
						<Radio
							onBlur={mockOnBlur}
							onBlurCapture={mockOnBlurCapture}
							onFocus={mockOnFocus}
							onFocusCapture={mockOnFocusCapture}
						/>,
					));

					$component?.focus();

					mockOnFocus.mockReset();
					mockOnFocusCapture.mockReset();

					act(() => {
						fireEvent.blur($component as HTMLElement);
					});
				},
				/**
				 * should handle focus events correctly when not focused
				 */
				22: () => {
					mockOnBlur = jest.fn();
					mockOnBlurCapture = jest.fn();

					mockOnFocus = jest.fn(() => {
						result = false;
					});

					mockOnFocusCapture = jest.fn();

					({ $component } = render(
						<Radio
							onBlur={mockOnBlur}
							onBlurCapture={mockOnBlurCapture}
							onFocus={mockOnFocus}
							onFocusCapture={mockOnFocusCapture}
						/>,
					));

					act(() => {
						fireEvent.focus($component as HTMLElement);
					});
				},
			});
		} catch (thrown) {
			error = !(thrown instanceof Error) ? (thrown as Error) : new Error();
			console.error(thrown);
		}
	});

	afterEach(() => {
		jest.restoreAllMocks();

		$box = null;
		$component = null;
		$container = null;
		$input = null;
		$label = null;
		checked = null;
		error = null;
		initiallyChecked = null;
		mockOnBlur = null;
		mockOnBlurCapture = null;
		mockOnChange = null;
		mockOnChangeCapture = null;
		mockOnFocus = null;
		mockOnFocusCapture = null;
		mockOnPress = null;
		mockOnPressCapture = null;
		result = null;

		index++;
	});

	it('should render without props or children', () => {
		expect(index).toBe(1);
		expect(error).toBeNull();

		expect(() => render(<Radio />)).not.toThrowError();
		expect(render(<Radio />, 1).result).toMatchSnapshot();
	});

	it('should be polymorphic', () => {
		expect(index).toBe(2);
		expect(error).toBeNull();

		expect($component?.tagName).toBe('MAIN');
	});

	it('should disable animations by default when the user prefers reduced motion', () => {
		expect(index).toBe(3);
		expect(error).toBeNull();

		expect(window.matchMedia).toBeCalledWith('prefers-reduced-motion: reduce');
	});

	it('should allow for animations to be disabled explicitly', () => {
		expect(index).toBe(4);
		expect(error).toBeNull();

		expect(() => render(<Radio animated={false} />)).not.toThrowError();
		expect(render(<Radio animated={false} />, 1).result).toMatchSnapshot();
		expect(window.matchMedia).not.toBeCalled();
	});

	it('should allow the checked state to be controlled externally', () => {
		expect(index).toBe(5);
		expect(error).toBeNull();

		expect(render(<Radio checked={true} />, 0).result).toMatchSnapshot();
		expect(render(<Radio checked={false} />, 1).result).toMatchSnapshot();
	});

	it('should be stylable', () => {
		expect(index).toBe(6);
		expect(error).toBeNull();

		expect($component).not.toBeNull();
		expect($component).toHaveClass('test');
	});

	it('should be disablable', () => {
		expect(index).toBe(7);
		expect(error).toBeNull();

		expect(result).toBeNull();
		expect(mockOnPress).not.toBeCalled();
	});

	it('should be identifiable', () => {
		expect(index).toBe(8);
		expect(error).toBeNull();

		expect($component).not.toBeNull();
		expect($component).toHaveAttribute('id', 'test');
	});

	it('should come with different styles based on interaction intent', () => {
		expect(index).toBe(9);
		expect(error).toBeNull();

		expect(render(<Radio intent="none" />, 0).result).toMatchSnapshot();
		expect(render(<Radio intent="error" />, 1).result).toMatchSnapshot();
		expect(render(<Radio intent="info" />, 2).result).toMatchSnapshot();
		expect(render(<Radio intent="success" />, 3).result).toMatchSnapshot();
		expect(render(<Radio intent="warning" />, 4).result).toMatchSnapshot();
	});

	it('should be nameable', () => {
		expect(index).toBe(10);
		expect(error).toBeNull();

		expect(render(<Radio name="id" />).$input).toHaveAttribute('name', 'id');
		expect(render(<Radio name="id" />).$input).toHaveAccessibleName();
	});

	it('should use the ID as a name by default', () => {
		expect(index).toBe(11);
		expect(error).toBeNull();

		expect(render(<Radio id="tst" />).$input).toHaveAttribute('name', 'tst');
		expect(render(<Radio />, 1).$input).toHaveAttribute('name');
	});

	it('should accept a readonly state', () => {
		expect(index).toBe(12);
		expect(error).toBeNull();

		expect(error).toBeNull();
		expect(result).toBeNull();
		expect(mockOnPress).not.toBeCalled();
	});

	it('should indicate to the user whether or not it is required', () => {
		expect(index).toBe(13);
		expect(error).toBeNull();

		expect(render(<Radio label="..." required />).$text).toContain('*');
		expect(render(<Radio label="..." />, 1).$text).not.toContain('*');
	});

	it('should use standardized sizes', () => {
		expect(index).toBe(14);
		expect(error).toBeNull();

		expect(render(<Radio size="xs" />, 0).result).toMatchSnapshot();
		expect(render(<Radio size="sm" />, 1).result).toMatchSnapshot();
		expect(render(<Radio size="md" />, 2).result).toMatchSnapshot();
		expect(render(<Radio size="lg" />, 3).result).toMatchSnapshot();
		expect(render(<Radio size="xl" />, 4).result).toMatchSnapshot();
	});

	it('should allow a developer to override the tab index', () => {
		expect(index).toBe(15);
		expect(error).toBeNull();

		expect(render(<Radio tabIndex={2} />).$root).toHaveTabIndex(2);
	});

	it('should allow the value to be controlled externally', () => {
		expect(index).toBe(16);
		expect(error).toBeNull();

		expect(render(<Radio value="test" />).$input.value).toBe('test');
	});

	it('should handle change events correctly when unchecked', () => {
		expect(index).toBe(17);
		expect(error).toBeNull();
		expect(initiallyChecked).toBe(false);

		expect(checked).toBe(true);
		expect(mockOnChange).toBeCalledTimes(1);
		expect(mockOnChangeCapture).toBeCalledTimes(1);
		expect(result).toBe(false);
	});

	it('should handle change events correctly when checked', () => {
		expect(index).toBe(18);
		expect(error).toBeNull();
		expect(initiallyChecked).toBe(true);

		expect(checked).toBe(true);
		expect(mockOnChange).not.toBeCalled();
		expect(mockOnChangeCapture).not.toBeCalled();
		expect(result).toBeNull();
	});

	it('should handle press events correctly when unchecked', () => {
		expect(index).toBe(19);
		expect(error).toBeNull();
		expect(initiallyChecked).toBe(false);

		expect(checked).toBe(true);
		expect(mockOnPress).toBeCalledTimes(1);
		expect(mockOnPressCapture).toBeCalledTimes(1);
		expect(result).toBe(false);
	});

	it('should handle press events correctly when checked', () => {
		expect(index).toBe(20);
		expect(error).toBeNull();
		expect(initiallyChecked).toBe(true);

		expect(checked).toBe(true);
		expect(mockOnPress).toBeCalledTimes(1);
		expect(mockOnPressCapture).toBeCalledTimes(1);
		expect(result).toBe(false);
	});

	it('should handle focus events correctly when focused', () => {
		expect(index).toBe(21);
		expect(error).toBeNull();

		expect(mockOnBlur).toBeCalledTimes(1);
		expect(mockOnBlurCapture).toBeCalledTimes(1);
		expect(mockOnFocus).not.toBeCalled();
		expect(mockOnFocusCapture).not.toBeCalled();
		expect(result).toBe(false);
	});

	it('should handle focus events correctly when not focused', () => {
		expect(index).toBe(22);
		expect(error).toBeNull();

		expect(mockOnBlur).not.toBeCalled();
		expect(mockOnBlurCapture).not.toBeCalled();
		expect(mockOnFocus).toBeCalledTimes(1);
		expect(mockOnFocusCapture).toBeCalledTimes(1);
		expect(result).toBe(false);
	});
});
