import { useLayoutEffect, useRef } from 'react';
import noop from '@/utils/functions/misc/noop';
import { useControlProp } from '@/utils/hooks/react/useControlProp';

/**
 * A type alias for readability describing the function signature of the
 * `resolve()` function of a {@link Promise} constructor callback.
 */
type ResolveFn = Parameters<ConstructorParameters<PromiseConstructor>[0]>[0];

/**
 * Destructured arguments provided to the {@link useControlledSuspense()} hook.
 */
export interface UseControlledSuspenseInput {
	/**
	 * [Optional] When true, suspends the content passed in as children and
	 * displays the provided fallback instead. This is a control prop designed to
	 * provide design system components with a standardized mechanism for
	 * controlling loading state externally.
	 * @defaultValue - `false`
	 */
	readonly suspend?: boolean;

	/**
	 * [Optional] A callback that fires when suspension/loading ends.
	 * @defaultValue - A no-op function.
	 */
	readonly onLoad?: () => void;

	/**
	 * [Optional] A callback that fires when suspension/loading starts.
	 * @defaultValue - A no-op function.
	 */
	readonly onSuspend?: () => void;
}

/**
 * Use this hook to control the loading state of a component that uses
 * {@link React.Suspense}. It provides a way to suspend the component's
 * rendering and control the loading state externally. When `suspend` is `true`,
 * the hook throws a promise to force {@link React.Suspense} to render the
 * provided fallback.
 *
 * @param input - A {@link useControlledSuspenseInput} object used for destructuring.
 */
export const useControlledSuspense = ({ suspend = false, onLoad = noop, onSuspend = noop }: UseControlledSuspenseInput) => {
	const [isLoading, setIsLoading] = useControlProp(suspend);

	const state = useRef({
		promise: new Promise<unknown>(noop),
		resolve: noop as ResolveFn,
	});

	useLayoutEffect(() => {
		const { current: promise } = state;

		promise.resolve(void 0);

		if (!isLoading) {
			/**
			 * You'd think onLoad() and onSuspend() would be switched around but it
			 * works like this because the current promise resolves as soon as it's
			 * thrown and the new promise is instantiated as soon as suspense ends.
			 */
			state.current.promise = new Promise<unknown>((resolve) => {
				onLoad();
				state.current.resolve = resolve;
			}).then(() => {
				onSuspend();
			});
		}

		return () => {
			const { current: promise } = state;

			promise.resolve(void 0);
		}
	}, [isLoading, onLoad, onSuspend,]);

	return [state.current.promise, isLoading, setIsLoading] as const;
};

export default useControlledSuspense;
