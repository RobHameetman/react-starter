import noop from 'lodash/noop';
import {
	ActionDispatch,
	AnyActionArg,
	createContext,
	Dispatch,
	MutableRefObject,
	SetStateAction,
} from 'react';
import { isNonEmptyObject } from '@/utils/functions/check/js/specialized/isNonEmptyObject';

interface NotificationsState {
	readonly error: string | null;
	readonly success: string | null;
}

interface PageState extends Record<string, unknown> {
	readonly notifications: NotificationsState;
}

interface PageRefs extends Record<string, MutableRefObject<HTMLDivElement | null>> {
	readonly pageOverlay: MutableRefObject<HTMLDivElement | null>;
}

/**
 * The `PageContext` is a shared state accessible by each view/page. State may
 * be stored at the top in the view's state management hook and passed down
 * by using `usePageContext()`.
 */
export interface PageContext extends Record<string, unknown> {
	/**
	 * Ref objects for page-level components.
	 * @defaultValue - `null`
	 */
	readonly refs: PageRefs;
	/**
	 * State available anywhere on the page.
	 * @defaultValue - `null`
	 */
	readonly state: PageState;
	/**
	 * Set a slice of state available anywhere on the page.
	 * @defaultValue - No-op function.
	 */
	readonly set: (slice: keyof PageContext['state'], state: Partial<PageContext['state']>) => void;
	/**
	 * Remove a slice of state from the page state.
	 * @defaultValue - No-op function.
	 */
	readonly unset: (slice: keyof PageContext['state']) => void;
	/**
	 * Retrieve a slice of state from the page state.
	 * @defaultValue - No-op function.
	 */
	readonly select: (slice: keyof PageContext['state']) => void;
	/**
	 * Retrieve a slice of state from the page state.
	 * @defaultValue - No-op function.
	 */
	readonly dispatch: ActionDispatch<AnyActionArg>;
}

/**
 * Initial `PageContext` state.
 */
export const INITIAL_PAGE_CONTEXT: PageContext = Object.freeze({
	refs: {
		pageOverlay: { current: null },
	},
	state: {
		notifications: {
			error: null,
			success: null,
		},
	},
	set: noop,
	unset: noop,
	select: noop,
	dispatch: noop,
});

// export const INITIAL_VIEW_CONTEXT: PageContext = Object.freeze({
// 	appOverlayRef: { current: null },
// 	error: null,
// 	success: null,
// 	resetError: noop,
// 	resetSuccess: noop,
// 	setViewState: noop,
// 	showErrorNotification: noop,
// 	showSuccessNotification: noop,
// });

/**
 * A `PageContext` accessible by React components.
 */
export const PageContext = createContext<PageContext>({
	...INITIAL_PAGE_CONTEXT,
});

/**
 * Checks that an `unknown` value is a {@link PageContext}.
 *
 * Requirements:
 *   - `value` must be a non-empty object.
 *   - `value.setViewState()` is required and must be a function.
 *
 * @param value - An `unknown` value.
 * @param isSpecificPageContext - [Optional] If provided, will validate a
 *                                specific page context.
 *
 * @returns The determination that `value` is or is not a {@link PageContext}.
 */
export const isPageContext = (
	value: unknown,
	isSpecificPageContext?: (value: unknown) => boolean,
): value is PageContext => {
	return (
		isNonEmptyObject(value) &&
		/**
		 * value.dispatch()
		 */
		'dispatch' in value &&
		typeof value.dispatch === 'function' &&
		(isSpecificPageContext ? isSpecificPageContext(value) : true)
	);
};
