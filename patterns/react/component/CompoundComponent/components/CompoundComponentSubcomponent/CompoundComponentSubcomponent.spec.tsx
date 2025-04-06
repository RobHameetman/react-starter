import { render } from '@testing-library/react';
import { CompoundComponentSubcomponent } from './CompoundComponentSubcomponent';

describe('<CompoundComponentSubcomponent />', () => {
	it('should render', () => {
		expect(() => render(<CompoundComponentSubcomponent />)).not.toThrowError();
	});

	it('should not regress', () => {
		expect(() => render(<CompoundComponentSubcomponent />)).toMatchSnapshot();
	});
});
