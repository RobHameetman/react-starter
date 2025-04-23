import { FC } from 'react';
import { act } from '@testing-library/react';
import { onTest } from '@@/utils/onTest';
import { withId } from './withId';
import { MockComponent, MockComponentProps, render } from './__test__';

describe('withId()', () => {
	let $element: HTMLDivElement | null = null;
	let id: string | null = null;
	let error: Error | null = null;
	let index = 1;

	beforeEach(() => {
		try {
			const Component: FC<Partial<MockComponentProps>> = withId(({ id }) => (
				<MockComponent id={id} />
			));

			onTest(index, {
				1: () => {
					({ $element } = render(<Component />));
				},
				2: () => {
					let triggerRerender: () => HTMLDivElement;

					({ id, triggerRerender } = render(<Component />));

					act(() => {
						$element = triggerRerender();
					});
				},
				3: () => {
					({ $element } = render(<Component id="test" />));
				},
			});
		} catch (thrown) {
			error = !(thrown instanceof Error) ? (thrown as Error) : new Error();
			console.error(thrown);
		}
	});

	afterEach(() => {
		$element = null;
		id = null;
		error = null;

		index++;
	});

	it('should inject a default ID when the component is rendered given no ID', () => {
		expect(index).toBe(1);
		expect(error).toBeNull();

		expect($element).toHaveAttribute('id');
	});

	it('should not inject a new ID when the component is rerendered given no ID', () => {
		expect(index).toBe(2);
		expect(error).toBeNull();

		expect(id).not.toBeNull();
		expect($element).toHaveAttribute('id', id);
	});

	it('should not inject an ID when the component is rendered given an ID', () => {
		expect(index).toBe(3);
		expect(error).toBeNull();

		expect($element).toHaveAttribute('id', 'test');
	});
});
