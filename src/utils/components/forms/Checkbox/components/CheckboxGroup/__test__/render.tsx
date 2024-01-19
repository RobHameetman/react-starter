import { ReactElement } from 'react';
import { faker } from '@faker-js/faker';
import { fireEvent, screen, render as _render } from '@testing-library/react';

const getResults = () =>
	screen.queryAllByRole('group') as ReadonlyArray<HTMLElement>;

const getComponent = (index = 0) => getResults()[index];

const getLabel = ($component = getComponent()) =>
	$component.querySelector('legend') as HTMLLegendElement;

const getChildren = ($component = getComponent()) =>
	Array.from<HTMLDivElement>($component.querySelectorAll('[role="checkbox"]'));

const getChildCount = ($children = getChildren()) => $children.length;

const getInputs = ($component = getComponent()) =>
	Array.from($component.querySelectorAll('input'));

const getLabels = ($component = getComponent()) =>
	Array.from($component.querySelectorAll('label'));

const getText = ($labels = getLabels()) =>
	$labels.map(({ innerHTML }) => innerHTML);

const getContainers = ($component = getComponent()) =>
	Array.from<HTMLDivElement>($component.querySelectorAll('[id$="-container"]'));

const getCheckmarks = ($component = getComponent()) =>
	Array.from<HTMLDivElement>($component.querySelectorAll('[id$="-checkmark"]'));

const getDashmarks = ($component = getComponent()) =>
	Array.from<HTMLDivElement>($component.querySelectorAll('[id$="-dashmark"]'));

const getStrikethroughs = ($component = getComponent()) =>
	Array.from<HTMLDivElement>(
		$component.querySelectorAll('[id$="-strikethrough"]'),
	);

const getBoxes = ($component = getComponent()) =>
	Array.from<HTMLDivElement>($component.querySelectorAll('[id$="-box"]'));

const getFills = ($component = getComponent()) =>
	Array.from<HTMLDivElement>($component.querySelectorAll('[id$="-fill"]'));

const getStates = ($inputs = getInputs()) =>
	$inputs.map(({ checked }) => checked);

const getChecked = (states = getStates()) =>
	states.filter((checked) => checked).length;

const getUnchecked = (states = getStates()) =>
	states.filter((checked) => !checked).length;

const getValues = ($inputs = getInputs()) => $inputs.map(({ value }) => value);
const getValue = (values = getValues()) => values[0];

export const render = (Component: ReactElement, index = 0) => {
	const result = _render(Component);

	const $component = getComponent(index);
	const $label = getLabel($component);
	const $children = getChildren($component);
	const childCount = getChildCount($children);
	const $boxes = getBoxes($component);
	const $containers = getContainers($component);
	const $checkmarks = getCheckmarks($component);
	const $dashmarks = getDashmarks($component);
	const $strikethroughs = getStrikethroughs($component);
	const $fills = getFills($component);
	const $inputs = getInputs($component);
	const $labels = getLabels($component);
	const $text = getText($labels);
	const states = getStates($inputs);
	const checked = getChecked(states);
	const unchecked = getUnchecked(states);
	const values = getValues($inputs);
	const value = getValue(values);

	const pressCheckbox = (value: string) => {
		$children.forEach(($child) => {
			const $text = $child.querySelector('label')?.innerHTML;

			if ($text === value) {
				fireEvent.pointerDown($child, { pointerType: 'mouse' });
			}
		});

		return getChecked();
	};

	const pressCheckboxes = (...values: ReadonlyArray<string>) => {
		$children.forEach(($child) => {
			const $text = $child.querySelector('label')?.innerHTML;

			if (values.includes($text as string)) {
				fireEvent.pointerDown($child, { pointerType: 'mouse' });
			}
		});

		return getChecked();
	};

	const pressRandomCheckbox = () => {
		const randomCheckbox = $children[faker.number.int($children.length - 1)];

		fireEvent.pointerDown(randomCheckbox, { pointerType: 'mouse' });

		return getChecked();
	};

	const pressRandomCheckboxes = (
		num = faker.number.int($children.length - 1),
	) => {
		const checkboxesToSelect = faker.helpers.shuffle($children).slice(0, num);

		checkboxesToSelect.forEach(($checkbox) => {
			fireEvent.pointerDown($checkbox, { pointerType: 'mouse' });
		});

		return getChecked();
	};

	return {
		$boxes,
		$checkmarks,
		$children,
		$component,
		$containers,
		$dashmarks,
		$fills,
		$inputs,
		$label,
		$labels,
		$root: $component,
		$strikethroughs,
		$text,
		checked,
		childCount,
		getChecked,
		getStrikethroughs,
		getValue,
		result,
		states,
		unchecked,
		value,
		values,
		pressCheckbox,
		pressCheckboxes,
		pressRandomCheckbox,
		pressRandomCheckboxes,
	};
};
