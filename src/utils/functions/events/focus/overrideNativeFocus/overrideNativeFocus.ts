import { interactionStates as _interactionStates } from '@app/utils/functions/events/interactions/interactionStates';

/**
 * Functional dependencies used in the {@link overrideNativeFocus()} function.
 * This object is provided in tests for mocking and spying.
 */
export interface OverrideNativeFocusDependencies {
	/**
	 * @TODO
	 */
	readonly interactionStates?: typeof _interactionStates;
}

/**
 * Destructured arguments provided to the {@link overrideNativeFocus()} function.
 */
export interface OverrideNativeFocusInput {
	/**
	 * [Optional] Used in tests for mocking and spying.
	 * @defaultValue - `{}`
	 */
	readonly _dependencies?: OverrideNativeFocusDependencies;
}

/**
 * Extract the native `HTMLElement.prototype.focus()` method here so that we can
 * safely restore it in our cleanup function.
 */
const { focus } = HTMLElement.prototype;

/**
 * A flag used to determine whether or not the native `focus()` method has been
 * overridden.
 */
let overridden = false;

/**
 * Override the native `HTMLElement.prototype.focus()` method so that we can
 * track when it is called. In some cases, we need to detect when a focus event
 * occurs without a preceding user event (e.g. screen reader focus).
 *
 * @privateRemarks
 * This is a bit of a hack but it's effective nonetheless.
 *
 * @param input - [Optional] An {@link OverrideNativeFocusInput} object used for
 * destructuring.
 *
 * @returns A function that restores the native `HTMLElement.prototype.focus()`
 * method. This is used when the `useGlobalFocusEvents()` hook is unmounted.
 */
export const overrideNativeFocus = ({ _dependencies = {} }: OverrideNativeFocusInput = {}) => {
	const { interactionStates = _interactionStates } = _dependencies;

	if (!overridden) {
		HTMLElement.prototype.focus = function () {
			const { hasPrefocusEvent } = interactionStates();

			hasPrefocusEvent(true);
			focus.apply(this, arguments as IArguments & []);
		};

		overridden = true;
	}

	return () => {
		HTMLElement.prototype.focus = focus;
		overridden = false;
	};
};
