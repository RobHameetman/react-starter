import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { TablePagination } from '../../../../../../modules';

describe('TablePagination', (): void => {
	let $renderedComponent: ShallowWrapper | null = null;
	let error: Error | null = null;

	beforeEach((): void => {
		try {
			$renderedComponent = shallow(<TablePagination />);
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
