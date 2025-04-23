export const fakePageContext = ({
	...overrideProps
}: Record<string, unknown> = {}) => ({
	refs: {
		pageOverlay: { current: null },
	},
	state: {
		notifications: {
			error: null,
			success: null,
		},
	},
	set: jest.fn(),
	unset: jest.fn(),
	select: jest.fn(),
	dispatch: jest.fn(),
	...overrideProps,
});
