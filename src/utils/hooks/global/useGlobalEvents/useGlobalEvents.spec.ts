import { renderHook } from '@testing-library/react';
import {
	UseGlobalEventsDependencies as Deps,
	useGlobalEvents,
} from './useGlobalEvents';

describe('useGlobalEvents()', () => {
	let error: Error | null = null;
	let result: unknown = null;
	let useGlobalDragEvents: jest.Mock | null = null;
	let useGlobalFocusEvents: jest.Mock | null = null;
	let useGlobalKeyboardEvents: jest.Mock | null = null;
	let useGlobalMouseEvents: jest.Mock | null = null;
	let useGlobalPointerEvents: jest.Mock | null = null;
	let useGlobalScrollEvents: jest.Mock | null = null;

	beforeEach(() => {
		try {
			useGlobalDragEvents = jest.fn();
			useGlobalFocusEvents = jest.fn();
			useGlobalKeyboardEvents = jest.fn();
			useGlobalMouseEvents = jest.fn();
			useGlobalPointerEvents = jest.fn();
			useGlobalScrollEvents = jest.fn();

			const render = renderHook(() =>
				useGlobalEvents({
					_dependencies: {
						useGlobalDragEvents,
						useGlobalFocusEvents,
						useGlobalKeyboardEvents,
						useGlobalMouseEvents,
						useGlobalPointerEvents,
						useGlobalScrollEvents,
					} as Deps,
				}),
			);

			({
				result: { current: result },
			} = render);
		} catch (thrown) {
			error = !(thrown instanceof Error) ? (thrown as Error) : new Error();
			console.error(thrown);
		}
	});

	afterEach(() => {
		jest.resetAllMocks();

		error = null;
		result = null;
		useGlobalDragEvents = null;
		useGlobalFocusEvents = null;
		useGlobalKeyboardEvents = null;
		useGlobalMouseEvents = null;
		useGlobalPointerEvents = null;
		useGlobalScrollEvents = null;
	});

	it('should not return a value', () => {
		expect(result).toBeUndefined();
		expect(error).toBeNull();
	});

	it('should use global drag events', () => {
		expect(useGlobalDragEvents).toBeCalled();
	});

	it('should use global focus events', () => {
		expect(useGlobalFocusEvents).toBeCalled();
	});

	it('should use global keyboard events', () => {
		expect(useGlobalKeyboardEvents).toBeCalled();
	});

	it('should use global mouse events', () => {
		expect(useGlobalMouseEvents).toBeCalled();
	});

	it('should use global pointer events', () => {
		expect(useGlobalPointerEvents).toBeCalled();
	});

	it('should use global scroll events', () => {
		expect(useGlobalScrollEvents).toBeCalled();
	});
});
