import { $FC, Suspense as ReactSuspense, SuspenseProps as Props, useMemo } from 'react';
import type Polymorphic from '@/utils/types/props/Polymorphic';
import type Stylable from '@/utils/types/props/Stylable';
import noop from '@/utils/functions/misc/noop';
import useControlledSuspense from './hooks/useControlledSuspense';

/**
 * Compositional prop types for the {@link FormButtons} component.
 */
type ComposedProps = Props & Polymorphic & Stylable;

/**
 * Prop types for the {@link Suspense} component.
 */
export interface SuspenseProps extends ComposedProps {
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
 * A custom {@link React.Suspense} component with augmented functionality to
 * support standardized props `loading`, `onLoad()`, and `onSuspend()` in
 * design system components or any components with a loading state. When
 * `suspend` is `true`, the component throws a promise to force
 * {@link React.Suspense} to render the provided fallback.
 */
export const Suspense: $FC<SuspenseProps> = ({
	children,
	fallback = null,
	suspend = false,
	onLoad = noop,
	onSuspend = noop,
	...props
}) => {
	const [promise, isLoading] = useControlledSuspense({ suspend, onLoad, onSuspend });

	const LoadableContent = useMemo(
		() =>
			(({ children: content }) => {
				if (isLoading && promise) {
					throw promise;
				}

				return content;
			}) as $FC<Record<string, unknown>>,
		/* eslint-disable-next-line react-hooks/exhaustive-deps */
		[isLoading]
	);

	const Fallback = useMemo(
		() =>
			() => fallback,
		[fallback],
	);

	return (
		<ReactSuspense fallback={fallback} {...props}>
			<LoadableContent>{children}</LoadableContent>
		</ReactSuspense>
	);
};
