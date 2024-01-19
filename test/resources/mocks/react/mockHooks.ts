const watching = new WeakSet();

const watchObject = <T extends object = object>(
	obj: T,
	callback: (target: T) => void,
) => {
	const objProxy = new Proxy<T>(obj, {
		set(target, key, value) {
			/* eslint-disable-next-line no-param-reassign */
			target[key] = value;
			callback(target);

			return true;
		},
	});

	watching.add(objProxy);

	return () => {
		if (watching.has(objProxy)) {
			watching.delete(objProxy);
		}
	};
};

export const mockUseReducer = jest.fn(
	(reducer: (state, action) => unknown, initialState) => {
		let state = initialState;

		const dispatch = jest.fn((action) => {
			state = reducer(state, action);
		});

		return [state, dispatch];
	},
);

export const mockUseRef = jest.fn((initialRef) => ({ current: initialRef }));

export const mockUseState = jest.fn((initialState) => {
	let state = initialState;

	const setState = jest.fn((newState) => {
		state = typeof newState === 'function' ? newState(state) : newState;
	});

	return [state, setState];
});
