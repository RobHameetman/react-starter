import { fireEvent, render, screen } from '@testing-library/react';
import { Tab } from './Tab';

describe('<Tab />', () => {
	let expectedTabName: string | null = null;
	let actualTabName: string | null = null;
	let tabAttributes: ReadonlyArray<string> | null = null;
	let result: unknown = null;
	let role: string | null = null;
	let mockOnClick: jest.Mock | null = null;

	beforeEach(() => {
		expectedTabName = 'Test';
		mockOnClick = jest.fn();

		result = render(<Tab name={expectedTabName} onClick={mockOnClick} />);

		const $tab = screen.getByRole('tab');

		actualTabName = screen.getByText(expectedTabName).textContent;
		tabAttributes = $tab.getAttributeNames();
		role = $tab.getAttribute('role');

		fireEvent.click($tab);
	});

	afterEach(() => {
		expectedTabName = null;
		actualTabName = null;
		tabAttributes = null;
		result = null;
		role = null;
		mockOnClick = null;
	});

	it('should render', async () => {
		expect(() => render(<Tab name="Test" />)).not.toThrowError();
	});

	it('should match the current snapshot', async () => {
		expect(result).toMatchSnapshot();
	});

	it('should render the name of the tab', async () => {
		expect(actualTabName).toBe(expectedTabName);
	});

	it('should be clickable', async () => {
		expect(mockOnClick).toHaveBeenCalled();
	});

	it('should be WCAG-compliant', async () => {
		expect(tabAttributes).toContain('role');
		expect(tabAttributes).toContain('aria-controls');
		expect(tabAttributes).toContain('aria-disabled');
		expect(tabAttributes).toContain('aria-selected');
		expect(tabAttributes).toContain('tabindex');
		expect(role).toBe('tab');
	});
});
