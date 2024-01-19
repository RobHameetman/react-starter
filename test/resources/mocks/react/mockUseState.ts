export const mockSetState = jest.fn();

export const mockUseState = jest.fn((initialState) => {
	let state = initialState;

	const setState = mockSetState.mockImplementation((newState) => {
		state = typeof newState === 'function' ? newState(state) : newState;
	});

	return [state, setState];
});
