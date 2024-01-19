import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { TableRows } from '../../../../../../modules';

describe('TableRows', (): void => {
	let $renderedComponent: ShallowWrapper | null = null;
	let error: Error | null = null;

	beforeEach((): void => {
		try {
			$renderedComponent = shallow(<TableRows each={jest.fn()} />);
		} catch (err) {
			error = err;
		}
	});

	afterEach((): void => {
		$renderedComponent = null;
	});

	it('should render correctly', async (): Promise<void> => {
		expect($renderedComponent).not.toBeNull();
		expect(error).toBeNull();
	});
});
