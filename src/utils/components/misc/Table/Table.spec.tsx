import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Table } from '../../../../modules';

describe('Table', (): void => {
	let $renderedComponent: ShallowWrapper | null = null;
	let error: Error | null = null;

	beforeEach((): void => {
		try {
			$renderedComponent = shallow(<Table initialData={[]} />);
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
