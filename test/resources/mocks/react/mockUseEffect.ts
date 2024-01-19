/**
 * The second function that returns `void` here is part of the return type and
 * represents the unmount function.
 */
type Effect = () => void | (() => void);
type Deps = ReadonlyArray<unknown>;

export const mockUseEffect = jest.fn((effect: Effect, _deps?: Deps) => {
	effect();
});
