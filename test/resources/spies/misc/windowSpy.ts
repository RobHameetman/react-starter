type WindowSpy = Partial<Window & typeof globalThis>;
type Key = keyof WindowSpy;

export const windowSpy = () =>
	jest.spyOn<WindowSpy, Key>(window, 'window', 'get');
