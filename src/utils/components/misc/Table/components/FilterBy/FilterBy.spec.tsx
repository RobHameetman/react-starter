import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { FilterBy } from '../../../../../../modules';

describe('FilterBy', (): void => {
	let $renderedComponent: ShallowWrapper | null = null;
	let error: Error | null = null;

	beforeEach((): void => {
		try {
			const handleFilter = jest.fn();

			$renderedComponent = shallow(
				<FilterBy menuItems={[]} onFilter={handleFilter} />,
			);
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
