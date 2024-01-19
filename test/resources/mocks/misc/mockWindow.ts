import { windowSpy } from '../../spies/misc/windowSpy';

export const mockWindow = (mock?: Record<string, unknown>) => {
	const spy = windowSpy();

	spy.mockImplementation(() => mock);

	return spy;
};
