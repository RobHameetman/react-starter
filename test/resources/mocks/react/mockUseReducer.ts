export const mockUseReducer = jest.fn(
	(reducer: (state, action) => unknown, initialState) => {
		let state = initialState;

		const dispatch = jest.fn((action) => {
			state = reducer(state, action);
		});

		return [state, dispatch];
	},
);
