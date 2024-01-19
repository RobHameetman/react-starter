import { ReactElement } from 'react';
import { screen, render as _render } from '@testing-library/react';
import { increment } from './MockComponent';

const getResults = () =>
	screen.queryAllByRole('none') as ReadonlyArray<HTMLDivElement>;

const getElement = (index = 0) => getResults()[index];
const getId = ($element = getElement()) => $element.id;
const hasIdAttr = ($element = getElement()) => $element.hasAttribute('id');

export const render = (Component: ReactElement, index = 0) => {
	const result = _render(Component);

	const results = getResults();
	const $element = getElement(index);
	const id = getId($element);
	const hasId = hasIdAttr($element);

	const triggerRerender = () => {
		increment();

		return getElement(index);
	};

	return {
		$element,
		hasId,
		id,
		result,
		results,
		triggerRerender,
	};
};
