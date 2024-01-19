export const mockUseState = jest.fn((value: unknown) => {
	let state = value;

	return [
		state,
		jest.fn((updatedValue) => {
			state = updatedValue;
		}),
	];
});
