import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { TableRow } from '../../../../../../modules';

describe('TableRow', (): void => {
	let $renderedComponent: ShallowWrapper | null = null;
	let error: Error | null = null;

	beforeEach((): void => {
		try {
			$renderedComponent = shallow(<TableRow />);
		} catch (err) {
			error = err;
		}
	});

	afterEach((): void => {
		$renderedComponent = null;
	});

	it.skip('should render correctly', async (): Promise<void> => {
		expect($renderedComponent).not.toBeNull();
		expect(error).toBeNull();
	});
});
