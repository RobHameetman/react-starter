import { act, waitFor } from '@testing-library/react';
import { matchMediaSpy } from '@@/spies/misc/matchMediaSpy';
import { onTest } from '@@/utils/onTest';
import { Intent } from '@/theme/enums/Intents';
import { randomIntent } from '@/theme/enums/Intents/__test__/randomIntent';
import { Size } from '@/theme/enums/Sizes';
import { randomSize } from '@/theme/enums/Sizes/__test__/randomSize';
import { anyRadioButton, render } from './__test__';
import { AvatarGroup } from './AvatarGroup';
import { Radio } from '../../../../forms/Radio';

describe('<AvatarGroup />', () => {
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
						<AvatarGroup as="section">
							<Radio>Test 1</Radio>
							<Radio>Test 2</Radio>
							<Radio>Test 3</Radio>
						</AvatarGroup>,
					));
				},
				/**
				 * should disable animations by default when the user prefers reduced motion
				 */
				3: () => {
					({ $component } = render(
						<AvatarGroup>
							<Radio>Test 1</Radio>
							<Radio>Test 2</Radio>
							<Radio>Test 3</Radio>
						</AvatarGroup>,
					));
				},
				/**
				 * should allow for animations to be disabled explicitly
				 */
				4: () => {
					({ $component } = render(
						<AvatarGroup animated={false}>
							<Radio>Test 1</Radio>
							<Radio>Test 2</Radio>
							<Radio>Test 3</Radio>
						</AvatarGroup>,
					));
				},
				/**
				 * should be stylable
				 */
				5: () => {
					({ $component } = render(
						<AvatarGroup className="test">
							<Radio>Test 1</Radio>
							<Radio>Test 2</Radio>
							<Radio>Test 3</Radio>
						</AvatarGroup>,
					));
				},
				/**
				 * should be disablable
				 */
				6: () => {
					let pressRandomRadioButton: () => void;

					mockOnChange = jest.fn(() => {
						result = false;
					});

					({ $component, pressRandomRadioButton } = render(
						<AvatarGroup onChange={mockOnChange} disabled>
							<Radio>Test 1</Radio>
							<Radio>Test 2</Radio>
							<Radio>Test 3</Radio>
						</AvatarGroup>,
					));

					act(() => {
						pressRandomRadioButton();
					});
				},
				/**
				 * should be identifiable
				 */
				7: () => {
					({ $component } = render(
						<AvatarGroup id="test">
							<Radio>Test 1</Radio>
							<Radio>Test 2</Radio>
							<Radio>Test 3</Radio>
						</AvatarGroup>,
					));
				},
				/**
				 * should apply interaction intents to all children when an intent is defined explicitly
				 */
				8: () => {
					intent = randomIntent() as Intent;

					({ $children } = render(
						<AvatarGroup intent={intent}>
							<Radio>Test 1</Radio>
							<Radio>Test 2</Radio>
							<Radio>Test 3</Radio>
						</AvatarGroup>,
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
				9: () => {
					({ $component } = render(
						<AvatarGroup name="test">
							<Radio>Test 1</Radio>
							<Radio>Test 2</Radio>
							<Radio>Test 3</Radio>
						</AvatarGroup>,
					));
				},
				/**
				 * should use the ID as a name by default
				 */
				10: () => {
					({ $component } = render(
						<AvatarGroup id="test">
							<Radio>Test 1</Radio>
							<Radio>Test 2</Radio>
							<Radio>Test 3</Radio>
						</AvatarGroup>,
					));
				},
				/**
				 * should accept a readonly state
				 */
				11: () => {
					let pressRandomRadioButton: () => void;

					mockOnChange = jest.fn(() => {
						result = false;
					});

					({ $component, pressRandomRadioButton } = render(
						<AvatarGroup onChange={mockOnChange} readonly>
							<Radio>Test 1</Radio>
							<Radio>Test 2</Radio>
							<Radio>Test 3</Radio>
						</AvatarGroup>,
					));

					act(() => {
						pressRandomRadioButton();
					});
				},
				/**
				 * should apply standardized sizes to all children when a size is defined explicitly
				 */
				12: () => {
					size = randomSize() as Size;

					({ $children } = render(
						<AvatarGroup size={size}>
							<Radio>Test 1</Radio>
							<Radio>Test 2</Radio>
							<Radio>Test 3</Radio>
						</AvatarGroup>,
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
				 * should allow the value to be controlled externally
				 */
				13: () => {
					({ checked, value } = render(
						<AvatarGroup value={'Test 1'}>
							<Radio>Test 1</Radio>
							<Radio>Test 2</Radio>
							<Radio>Test 3</Radio>
						</AvatarGroup>,
					));
				},
				/**
				 * should update the value correctly when an unchecked radio button is pressed
				 */
				14: () => {
					const { getValue, pressRandomRadioButton } = render(
						<AvatarGroup>
							<Radio>Test 1</Radio>
							<Radio>Test 2</Radio>
							<Radio>Test 3</Radio>
						</AvatarGroup>,
					);

					act(() => {
						checked = pressRandomRadioButton();
						value = getValue();
					});
				},
				/**
				 * should not update the value when a checked radio button is pressed
				 */
				15: () => {
					const { getValue, pressRadioButton } = render(
						<AvatarGroup value={'Test 1'}>
							<Radio>Test 1</Radio>
							<Radio>Test 2</Radio>
							<Radio>Test 3</Radio>
						</AvatarGroup>,
					);

					act(() => {
						checked = pressRadioButton('Test 1');
						value = getValue();
					});
				},
				/**
				 * should position elements vertically when the "vertical" prop is `true`
				 */
				16: () => {
					({ $component } = render(
						<AvatarGroup vertical>
							<Radio>Test 1</Radio>
							<Radio>Test 2</Radio>
							<Radio>Test 3</Radio>
						</AvatarGroup>,
					));
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

		expect(() => render(<AvatarGroup />)).not.toThrowError();
		expect(render(<AvatarGroup />, 1).result).toMatchSnapshot();
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

	it('should be stylable', () => {
		expect(index).toBe(5);
		expect(error).toBeNull();

		expect($component).not.toBeNull();
		expect($component).toHaveClass('test');
	});

	it('should be disablable', () => {
		expect(index).toBe(6);
		expect(error).toBeNull();

		expect(result).toBeNull();
		expect(mockOnChange).not.toBeCalled();
	});

	it('should be identifiable', () => {
		expect(index).toBe(7);
		expect(error).toBeNull();

		expect($component).not.toBeNull();
		expect($component).toHaveAttribute('id', 'test');
	});

	it('should apply interaction intents to all children when an intent is defined explicitly', () => {
		expect(index).toBe(8);
		expect(error).toBeNull();

		expect(result).toHaveLength(($children ?? []).length);
	});

	it('should be nameable', () => {
		expect(index).toBe(9);
		expect(error).toBeNull();

		expect($component).toHaveAttribute('name', 'test');
	});

	it('should use the ID as a name by default', () => {
		expect(index).toBe(10);
		expect(error).toBeNull();

		expect($component).toHaveAttribute('name', 'test');
	});

	it('should accept a readonly state', () => {
		expect(index).toBe(11);
		expect(error).toBeNull();

		waitFor(() => expect(result).toBeNull());
		waitFor(() => expect(mockOnChange).not.toBeCalled());
	});

	it('should apply standardized sizes to all children when a size is defined explicitly', () => {
		expect(index).toBe(12);
		expect(error).toBeNull();

		expect(result).toHaveLength(($children ?? []).length);
	});

	it('should allow the value to be controlled externally', () => {
		expect(index).toBe(13);
		expect(error).toBeNull();

		expect(value).toBe('Test 1');
		expect(checked).toBe(1);
	});

	it('should update the value correctly when an unchecked radio button is pressed', () => {
		expect(index).toBe(14);
		expect(error).toBeNull();

		expect(checked).toBe(1);
		expect(value).toStrictEqual(anyRadioButton);
	});

	it('should not updated the value when a checked radio button is pressed', () => {
		expect(index).toBe(15);
		expect(error).toBeNull();

		expect(checked).toBe(1);
		expect(value).toStrictEqual(anyRadioButton);
	});

	it('should position elements vertically when the "vertical" prop is `true`', () => {
		expect(index).toBe(16);
		expect(error).toBeNull();

		expect($component).toHaveClass('vertical');
	});
});
