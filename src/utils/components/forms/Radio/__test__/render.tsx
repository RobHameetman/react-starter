import { ReactElement } from 'react';
import { screen, fireEvent, render as _render } from '@testing-library/react';

const getResults = () =>
	screen.queryAllByRole('radio') as ReadonlyArray<HTMLElement>;

const getComponent = (index = 0) => getResults()[index];

const getInput = ($component = getComponent()) =>
	$component.querySelector('input') as HTMLInputElement;

const getLabel = ($component = getComponent()) =>
	$component.querySelector('label') as HTMLLabelElement;

const getText = ($label = getLabel()) => $label.innerHTML;

const getContainer = ($component = getComponent()) =>
	$component.querySelector('[id$="-container"]') as HTMLDivElement;

const getBox = ($component = getComponent()) =>
	$component.querySelector('[id$="-box"]') as HTMLDivElement;

const getFill = ($component = getComponent()) =>
	$component.querySelector('[id$="-fill"]') as HTMLDivElement;

const getChecked = ($input = getInput()) => $input.checked;

export const render = (Component: ReactElement, index = 0) => {
	const result = _render(Component);

	const $component = getComponent(index);
	const $input = getInput($component);
	const $label = getLabel($component);
	const $text = getText($label);
	const $container = getContainer($component);
	const $box = getBox($component);
	const $fill = getFill($component);
	const checked = getChecked($input);
	const initiallyChecked = checked;

	const _queryComponent = () => ({
		$component: getComponent(),
		$input: getInput(),
		$label: getLabel(),
		$text: getText(),
		$container: getContainer(),
		$box: getBox(),
		$fill: getFill(),
		checked: getChecked(),
	});

	const pressRadioButton = () => {
		fireEvent.pointerDown($component, { pointerType: 'mouse' });

		return getChecked();
	};

	return {
		$box,
		$component,
		$container,
		$fill,
		$input,
		$label,
		$root: $component,
		$text,
		checked,
		initiallyChecked,
		pressRadioButton,
		result,
	};
};
