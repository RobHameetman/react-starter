type Effect = () => void | (() => void);
type Deps = ReadonlyArray<unknown>;

export const mockUseLayoutEffect = jest.fn((effect: Effect, _deps?: Deps) => {
	effect();
});
