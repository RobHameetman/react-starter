export const fakeRadioContext = ({
	...overrideProps
}: Record<string, unknown> = {}) => {
	return {
		getGroupValue: jest.fn(() => ''),
		groupValueIs: jest.fn(),
		setGroupValue: jest.fn(),
		...overrideProps,
	};
};
