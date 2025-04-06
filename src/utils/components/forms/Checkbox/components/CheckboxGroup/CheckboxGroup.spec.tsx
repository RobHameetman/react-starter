import { act } from '@testing-library/react';
import { matchMediaSpy } from '@test/spies/misc/matchMediaSpy';
import { onTest } from '@test/utils/onTest';
import { Intent } from '@/theme/enums/Intents';
import { randomIntent } from '@/theme/enums/Intents/__test__/randomIntent';
import { Size } from '@/theme/enums/Sizes';
import { randomSize } from '@/theme/enums/Sizes/__test__/randomSize';
import { CheckboxGroup } from './CheckboxGroup';
import { Checkbox } from '../../Checkbox';
import { anyCheckbox, render } from './__test__';

describe('<CheckboxGroup />', () => {
	let $boxes: ReadonlyArray<HTMLDivElement> | null = null;
	let $checkmarks: ReadonlyArray<HTMLDivElement> | null = null;
	let $children: ReadonlyArray<HTMLDivElement> | null = null;
	let $component: HTMLElement | null = null;
	let $containers: ReadonlyArray<HTMLDivElement> | null = null;
	let $dashmarks: ReadonlyArray<HTMLDivElement> | null = null;
	let $input: ReadonlyArray<HTMLInputElement> | null = null;
	let $label: HTMLLegendElement | null = null;
	let $labels: ReadonlyArray<HTMLLabelElement> | null = null;
	let $strikethroughs: ReadonlyArray<HTMLDivElement> | null = null;
	let checked: number | null = null;
	let childCount: number | null = null;
	let error: Error | null = null;
	let mockOnChange: jest.Mock | null = null;
	let mockOnChangeCapture: jest.Mock | null = null;
	let intent: Intent | null = null;
	let result: unknown = null;
	let size: Size | null = null;
	let states: ReadonlyArray<boolean> | null = null;
	let unchecked: number | null = null;
	let value: string | null = null;
	let values: ReadonlyArray<string> | null = null;
	let index = 1;

	beforeEach(() => {
		try {
			matchMediaSpy();

			onTest(index, {
				/**
				 * should be polymorphic
				 */
				2: () => {
					({ $component } = render(
						<CheckboxGroup as="section">
							<Checkbox>Test 1</Checkbox>
							<Checkbox>Test 2</Checkbox>
							<Checkbox>Test 3</Checkbox>
						</CheckboxGroup>,
					));
				},
				/**
				 * should disable animations by default when the user prefers reduced motion
				 */
				3: () => {
					({ $component } = render(
						<CheckboxGroup>
							<Checkbox>Test 1</Checkbox>
							<Checkbox>Test 2</Checkbox>
							<Checkbox>Test 3</Checkbox>
						</CheckboxGroup>,
					));
				},
				/**
				 * should allow for animations to be disabled explicitly
				 */
				4: () => {
					({ $component } = render(
						<CheckboxGroup animated={false}>
							<Checkbox>Test 1</Checkbox>
							<Checkbox>Test 2</Checkbox>
							<Checkbox>Test 3</Checkbox>
						</CheckboxGroup>,
					));
				},
				/**
				 * should check all checkboxes initially when the state is externally set to true
				 */
				5: () => {
					({ $checkmarks, checked, childCount, unchecked } = render(
						<CheckboxGroup checked>
							<Checkbox>Test 1</Checkbox>
							<Checkbox>Test 2</Checkbox>
							<Checkbox>Test 3</Checkbox>
						</CheckboxGroup>,
					));
				},
				/**
				 * should not check all checkboxes initially when the state is not externally set to true
				 */
				6: () => {
					({ $checkmarks, checked, childCount, unchecked } = render(
						<CheckboxGroup>
							<Checkbox>Test 1</Checkbox>
							<Checkbox>Test 2</Checkbox>
							<Checkbox>Test 3</Checkbox>
						</CheckboxGroup>,
					));
				},
				/**
				 * should be stylable
				 */
				7: () => {
					({ $component } = render(
						<CheckboxGroup className="test">
							<Checkbox>Test 1</Checkbox>
							<Checkbox>Test 2</Checkbox>
							<Checkbox>Test 3</Checkbox>
						</CheckboxGroup>,
					));
				},
				/**
				 * should use an overridable delimiter for group values
				 */
				8: () => {
					const { getValue, pressRandomCheckboxes } = render(
						<CheckboxGroup delimiter="|">
							<Checkbox>Tokyo, Japan</Checkbox>
							<Checkbox>Chicago, IL, United States</Checkbox>
							<Checkbox>Sydney, Australia</Checkbox>
						</CheckboxGroup>,
					);

					act(() => {
						checked = pressRandomCheckboxes(2);
						value = getValue();
					});
				},
				/**
				 * should be disablable
				 */
				9: () => {
					let pressRandomCheckbox: () => void;

					mockOnChange = jest.fn(() => {
						result = false;
					});

					({ $component, pressRandomCheckbox } = render(
						<CheckboxGroup onChange={mockOnChange} disabled>
							<Checkbox>Test 1</Checkbox>
							<Checkbox>Test 2</Checkbox>
							<Checkbox>Test 3</Checkbox>
						</CheckboxGroup>,
					));

					act(() => {
						pressRandomCheckbox();
					});
				},
				/**
				 * should be identifiable
				 */
				10: () => {
					({ $component } = render(
						<CheckboxGroup id="test">
							<Checkbox>Test 1</Checkbox>
							<Checkbox>Test 2</Checkbox>
							<Checkbox>Test 3</Checkbox>
						</CheckboxGroup>,
					));
				},
				/**
				 * should apply interaction intents to all children when an intent is defined explicitly
				 */
				11: () => {
					intent = randomIntent() as Intent;

					({ $children } = render(
						<CheckboxGroup intent={intent}>
							<Checkbox>Test 1</Checkbox>
							<Checkbox>Test 2</Checkbox>
							<Checkbox>Test 3</Checkbox>
						</CheckboxGroup>,
					));

					result = $children
						.map(({ classList }) => classList)
						.filter((classList) =>
							Array.from(classList).some((className) =>
								className.includes(intent as Intent),
							),
						);
				},
				/**
				 * should be namable
				 */
				12: () => {
					({ $component } = render(
						<CheckboxGroup name="test">
							<Checkbox>Test 1</Checkbox>
							<Checkbox>Test 2</Checkbox>
							<Checkbox>Test 3</Checkbox>
						</CheckboxGroup>,
					));
				},
				/**
				 * should use the ID as a name by default
				 */
				13: () => {
					({ $component } = render(
						<CheckboxGroup id="test">
							<Checkbox>Test 1</Checkbox>
							<Checkbox>Test 2</Checkbox>
							<Checkbox>Test 3</Checkbox>
						</CheckboxGroup>,
					));
				},
				/**
				 * should accept a readonly state
				 */
				14: () => {
					let pressRandomCheckbox: () => void;

					mockOnChange = jest.fn(() => {
						result = false;
					});

					({ $component, pressRandomCheckbox } = render(
						<CheckboxGroup onChange={mockOnChange} readonly>
							<Checkbox>Test 1</Checkbox>
							<Checkbox>Test 2</Checkbox>
							<Checkbox>Test 3</Checkbox>
						</CheckboxGroup>,
					));

					act(() => {
						pressRandomCheckbox();
					});
				},
				/**
				 * should apply standardized sizes to all children when a size is defined explicitly
				 */
				15: () => {
					size = randomSize() as Size;

					({ $children } = render(
						<CheckboxGroup size={size}>
							<Checkbox>Test 1</Checkbox>
							<Checkbox>Test 2</Checkbox>
							<Checkbox>Test 3</Checkbox>
						</CheckboxGroup>,
					));

					result = $children
						.map(({ classList }) => classList)
						.filter((classList) =>
							Array.from(classList).some((className) =>
								className.includes(size as Size),
							),
						);
				},
				/**
				 * should strikethrough all checkbox labels initially when all checkboxes are checked
				 */
				16: () => {
					({ childCount, $strikethroughs } = render(
						<CheckboxGroup strikethrough checked>
							<Checkbox>Test 1</Checkbox>
							<Checkbox>Test 2</Checkbox>
							<Checkbox>Test 3</Checkbox>
						</CheckboxGroup>,
					));
				},
				/**
				 * should not strikethrough all checkbox labels initially when all checkboxes are not checked
				 */
				17: () => {
					({ childCount, $strikethroughs } = render(
						<CheckboxGroup strikethrough>
							<Checkbox>Test 1</Checkbox>
							<Checkbox>Test 2</Checkbox>
							<Checkbox>Test 3</Checkbox>
						</CheckboxGroup>,
					));
				},
				/**
				 * should allow the value to be controlled externally
				 */
				18: () => {
					({ $children, $checkmarks, checked, value } = render(
						<CheckboxGroup value={['Test 1', 'Test 2']}>
							<Checkbox>Test 1</Checkbox>
							<Checkbox>Test 2</Checkbox>
							<Checkbox>Test 3</Checkbox>
						</CheckboxGroup>,
					));
				},
				/**
				 * should add a checkbox to the value when an unchecked checkbox is pressed
				 */
				19: () => {
					const { getValue, pressRandomCheckbox } = render(
						<CheckboxGroup>
							<Checkbox>Test 1</Checkbox>
							<Checkbox>Test 2</Checkbox>
							<Checkbox>Test 3</Checkbox>
						</CheckboxGroup>,
					);

					act(() => {
						checked = pressRandomCheckbox();
						value = getValue();
					});
				},
				/**
				 * should remove a checkbox from the value when a checked checkbox is pressed
				 */
				20: () => {
					const { getValue, pressCheckbox } = render(
						<CheckboxGroup value={['Test 1']}>
							<Checkbox>Test 1</Checkbox>
							<Checkbox>Test 2</Checkbox>
							<Checkbox>Test 3</Checkbox>
						</CheckboxGroup>,
					);

					act(() => {
						checked = pressCheckbox('Test 1');
						value = getValue();
					});
				},
				/**
				 * should position elements vertically when the "vertical" prop is `true`
				 */
				21: () => {
					({ $component } = render(
						<CheckboxGroup vertical>
							<Checkbox>Test 1</Checkbox>
							<Checkbox>Test 2</Checkbox>
							<Checkbox>Test 3</Checkbox>
						</CheckboxGroup>,
					));
				},
				/**
				 * should handle change events correctly when all checkboxes are initially unchecked
				 */
				22: () => {
					let pressRandomCheckbox: () => number;

					mockOnChange = jest.fn((e) => {
						result = false;
					});

					mockOnChangeCapture = jest.fn();

					({ $component, pressRandomCheckbox } = render(
						<CheckboxGroup
							onChange={mockOnChange}
							onChangeCapture={mockOnChangeCapture}
						>
							<Checkbox>Test 1</Checkbox>
							<Checkbox>Test 2</Checkbox>
							<Checkbox>Test 3</Checkbox>
						</CheckboxGroup>,
					));

					act(() => {
						pressRandomCheckbox();
					});
				},
				/**
				 * should handle change events correctly when all checkboxes are initially checked
				 */
				23: () => {
					let pressRandomCheckbox: () => number;

					mockOnChange = jest.fn((e) => {
						result = false;
					});

					mockOnChangeCapture = jest.fn();

					({ $component, pressRandomCheckbox } = render(
						<CheckboxGroup
							onChange={mockOnChange}
							onChangeCapture={mockOnChangeCapture}
							checked
						>
							<Checkbox>Test 1</Checkbox>
							<Checkbox>Test 2</Checkbox>
							<Checkbox>Test 3</Checkbox>
						</CheckboxGroup>,
					));

					act(() => {
						pressRandomCheckbox();
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

		$boxes = null;
		$checkmarks = null;
		$children = null;
		$component = null;
		$containers = null;
		$dashmarks = null;
		$input = null;
		$label = null;
		$labels = null;
		$strikethroughs = null;
		checked = null;
		childCount = null;
		error = null;
		intent = null;
		mockOnChange = null;
		mockOnChangeCapture = null;
		result = null;
		size = null;
		states = null;
		unchecked = null;
		value = null;
		values = null;

		index++;
	});

	it('should render without props or children', () => {
		expect(index).toBe(1);
		expect(error).toBeNull();

		expect(() => render(<CheckboxGroup />)).not.toThrowError();
		expect(render(<CheckboxGroup />, 1).result).toMatchSnapshot();
	});

	it('should be polymorphic', () => {
		expect(index).toBe(2);
		expect(error).toBeNull();

		expect($component?.tagName).toBe('SECTION');
	});

	it('should disable animations by default when the user prefers reduced motion', () => {
		expect(index).toBe(3);
		expect(error).toBeNull();

		expect(window.matchMedia).toBeCalledWith('prefers-reduced-motion: reduce');
	});

	it('should allow for animations to be disabled explicitly', () => {
		expect(index).toBe(4);
		expect(error).toBeNull();

		expect($component).toMatchSnapshot();
		expect(window.matchMedia).not.toBeCalled();
	});

	it('should check all checkboxes initially when the state is externally set to true', () => {
		expect(index).toBe(5);
		expect(error).toBeNull();

		expect(checked).toBe(Number(childCount));
		expect(unchecked).toBe(0);
	});

	it('should not check all checkboxes initially when the state is not externally set to true', () => {
		expect(index).toBe(6);
		expect(error).toBeNull();

		expect(checked).toBe(0);
		expect(unchecked).toBe(Number(childCount));
	});

	it('should be stylable', () => {
		expect(index).toBe(7);
		expect(error).toBeNull();

		expect($component).not.toBeNull();
		expect($component).toHaveClass('test');
	});

	it('should use an overridable delimiter for group values', () => {
		expect(index).toBe(8);
		expect(error).toBeNull();

		expect(checked).toBe(2);
		expect(value).toStrictEqual(expect.stringContaining('|'));
	});

	it('should be disablable', () => {
		expect(index).toBe(9);
		expect(error).toBeNull();

		expect(result).toBeNull();
		expect(mockOnChange).not.toBeCalled();
	});

	it('should be identifiable', () => {
		expect(index).toBe(10);
		expect(error).toBeNull();

		expect($component).not.toBeNull();
		expect($component).toHaveAttribute('id', 'test');
	});

	it('should apply interaction intents to all children when an intent is defined explicitly', () => {
		expect(index).toBe(11);
		expect(error).toBeNull();

		expect(result).toHaveLength(($children ?? []).length);
	});

	it('should be nameable', () => {
		expect(index).toBe(12);
		expect(error).toBeNull();

		expect($component).toHaveAttribute('name', 'test');
	});

	it('should use the ID as a name by default', () => {
		expect(index).toBe(13);
		expect(error).toBeNull();

		expect($component).toHaveAttribute('name', 'test');
	});

	it('should accept a readonly state', () => {
		expect(index).toBe(14);
		expect(error).toBeNull();

		expect(result).toBeNull();
		expect(mockOnChange).not.toBeCalled();
	});

	it('should apply standardized sizes to all children when a size is defined explicitly', () => {
		expect(index).toBe(15);
		expect(error).toBeNull();

		expect(result).toHaveLength(($children ?? []).length);
	});

	it('should strikethrough all checkbox labels initially when all checkboxes are checked', () => {
		expect(index).toBe(16);
		expect(error).toBeNull();

		expect($strikethroughs).toHaveLength(Number(childCount));
	});

	it('should not strikethrough all checkbox labels initially when all checkboxes are not checked', () => {
		expect(index).toBe(17);
		expect(error).toBeNull();

		expect($strikethroughs).toHaveLength(0);
	});

	it('should allow the value to be controlled externally', () => {
		expect(index).toBe(18);
		expect(error).toBeNull();

		expect(value).toBe('Test 1,Test 2');
		expect(checked).toBe(2);
	});

	it('should add a checkbox to the value when an unchecked checkbox is pressed', () => {
		expect(index).toBe(19);
		expect(error).toBeNull();

		expect(checked).toBe(1);
		expect(value).toStrictEqual(anyCheckbox);
	});

	it('should remove a checkbox from the value when a checked checkbox is pressed', () => {
		expect(index).toBe(20);
		expect(error).toBeNull();

		expect(checked).toBe(0);
		expect(value).toBe('');
	});

	it('should position elements vertically when the "vertical" prop is `true`', () => {
		expect(index).toBe(21);
		expect(error).toBeNull();

		expect($component).toHaveClass('vertical');
	});

	it('should handle change events correctly when all checkboxes are initially unchecked', () => {
		expect(index).toBe(22);
		expect(error).toBeNull();

		expect(mockOnChange).toBeCalledTimes(1);
		expect(mockOnChangeCapture).toBeCalledTimes(1);
		expect(result).toBe(false);
	});

	it('should handle change events correctly when all checkboxes are initially checked', () => {
		expect(index).toBe(23);
		expect(error).toBeNull();

		expect(mockOnChange).toBeCalledTimes(1);
		expect(mockOnChangeCapture).toBeCalledTimes(1);
		expect(result).toBe(false);
	});
});
