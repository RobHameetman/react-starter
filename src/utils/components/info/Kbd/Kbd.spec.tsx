import { RenderResult } from '@testing-library/react';
import { onTest } from '@@/utils/onTest';
import { Kbd } from './Kbd';
import { render } from './__test__';

type EverySymbolHasAttr = (attr: string) => boolean;
type EverySymbolHasTag = (tag: string) => boolean;

describe('<Kbd />', () => {
	let $component: HTMLElement | null = null;
	let error: Error | null = null;
	let result: RenderResult | null = null;
	let everySymbolHasAttr: EverySymbolHasAttr = () => false;
	let everySymbolHasTag: EverySymbolHasTag = () => false;
	let index = 1;

	beforeAll(() => {
		jest.spyOn(console, 'warn').mockImplementation(jest.fn());
	});

	beforeEach(() => {
		try {
			onTest(index, {
				1: () => {
					({ result } = render(<Kbd>K</Kbd>));
				},
				2: () => {
					render(<Kbd>{''}</Kbd>);
				},
				3: () => {
					render(<Kbd silent>{''}</Kbd>);
				},
				4: () => {
					({ $component } = render(<Kbd as="main">K</Kbd>));
				},
				5: () => {
					({ $component } = render(<Kbd>K</Kbd>));
				},
				6: () => {
					({ everySymbolHasAttr, everySymbolHasTag } = render(
						<Kbd modifiedBy={['command', 'shift']}>K</Kbd>,
					));
				},
				7: () => {
					({ $component } = render(<Kbd className="test">K</Kbd>));
				},
				8: () => {
					({ $component } = render(<Kbd id="test">K</Kbd>));
				},
			});
		} catch (thrown) {
			error = !(thrown instanceof Error) ? (thrown as Error) : new Error();
			console.error(thrown);
		}
	});

	afterEach(() => {
		jest.resetAllMocks();

		$component = null;
		error = null;
		result = null;
		everySymbolHasAttr = () => false;
		everySymbolHasTag = () => false;

		index++;
	});

	afterAll(() => {
		jest.restoreAllMocks();
	});

	it('should render without props', () => {
		expect(index).toBe(1);
		expect(error).toBeNull();

		expect(result).toMatchSnapshot();
	});

	it('should log a warning when rendered without a keyboard key', () => {
		expect(index).toBe(2);
		expect(error).toBeNull();

		expect(console.warn).toBeCalledTimes(1);
		expect(console.warn).toBeCalledWith(expect.any(String));
	});

	it('should not log a warning when silent and rendered without a keyboard key', () => {
		expect(index).toBe(3);
		expect(error).toBeNull();

		expect(console.warn).not.toBeCalled();
	});

	it('should be polymorphic', () => {
		expect(index).toBe(4);
		expect(error).toBeNull();

		expect($component?.tagName).toBe('MAIN');
	});

	it('should be a <kbd /> element by default', () => {
		expect(index).toBe(5);
		expect(error).toBeNull();

		expect($component?.tagName).toBe('KBD');
	});

	/* eslint-disable prettier/prettier */
	it('should wrap each modifier key in an <abbr /> element with a "title"', () => {
		expect(index).toBe(6);
		expect(error).toBeNull();

		expect(everySymbolHasTag('abbr')).toBe(true);
		expect(everySymbolHasAttr('title')).toBe(true);
	});

	it('should be stylable', () => {
		expect(index).toBe(7);
		expect(error).toBeNull();

		expect($component).not.toBeNull();
		expect($component).toHaveClass('test');
	});

	it('should be identifiable', () => {
		expect(index).toBe(8);
		expect(error).toBeNull();

		expect($component).not.toBeNull();
		expect($component).toHaveAttribute('id', 'test');
	});
});
