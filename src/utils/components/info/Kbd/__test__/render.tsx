import { ReactElement } from 'react';
import { screen, render as _render } from '@testing-library/react';

const getResults = () =>
	screen.queryAllByRole('presentation') as ReadonlyArray<HTMLElement>;

const getComponent = (index = 0) => getResults()[index];

const getSymbols = ($component = getComponent()) =>
	Array.from($component.querySelectorAll('abbr'));

const getSymbolText = ($symbols = getSymbols()) =>
	$symbols.map(({ innerHTML }) => innerHTML);

export const render = (Component: ReactElement, index = 0) => {
	const result = _render(Component);

	const $component = getComponent(index);
	const $symbols = getSymbols($component);
	const symbols = getSymbolText($symbols);

	const hasSymbol = (symbol: string) => symbols.includes(symbol);

	const everySymbolHasAttr = (attr: string) =>
		$symbols.every(($symbol) => $symbol.hasAttribute(attr));

	const everySymbolHasTag = (tag: string) =>
		$symbols.every(({ tagName }) => tagName.toLowerCase() === tag);

	return {
		$component,
		$symbols,
		result,
		symbols,
		hasSymbol,
		everySymbolHasAttr,
		everySymbolHasTag,
	};
};
