export const fakeCheckboxContext = ({
	...overrideProps
}: Record<string, unknown> = {}) => {
	return {
		addToGroupValue: jest.fn(),
		getGroupValue: jest.fn(() => ''),
		groupValueIncludes: jest.fn(),
		removeFromGroupValue: jest.fn(),
		setGroupValue: jest.fn(),
		...overrideProps,
	};
};
