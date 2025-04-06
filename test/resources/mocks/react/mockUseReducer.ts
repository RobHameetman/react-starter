export const mockUseReducer = jest.fn(
	(reducer: <S, A>(state: S, action: A) => unknown, initialState) => {
		let state = initialState;

		const dispatch = jest.fn((action) => {
			state = reducer(state, action);
		});

		return [state, dispatch];
	},
);
