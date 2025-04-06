import { FocusEventHandler, useCallback, useEffect, useState } from 'react';
import type { InteractionModality } from '@/utils/enums/InteractionModalities';
import { isUndefined } from '@/utils/functions/check/js/core/isUndefined';
import { isFocusVisible as _isFocusVisible } from '@/utils/functions/events/focus/isFocusVisible';
import { interactionModality } from '@/utils/functions/events/interactions/interactionModality';
import { interactionModalityListeners } from '@/utils/functions/events/interactions/interactionModalityListeners';
import { isCapturing as _isCapturing } from '@/utils/functions/events/phases/isCapturing';
import { noop } from '@/utils/functions/misc/noop';
import type { Disablable } from '@/utils/types/props/Disablable';
import type { Changeable } from '@/utils/types/props/Changeable';

/**
 * A type alias used to avoid a line break in the 'extends' clause below.
 */
type ComposeProps<T> = Disablable & Changeable<T>;

/**
 * Functional dependencies used in the {@link useFocusEvents()} hook. This
 * object is provided in tests for mocking and spying.
 */
export interface UseFocusEventsDependencies {
	/**
	 * Checks if the provided event is currently in the capturing phase.
	 */
	readonly isCapturing?: typeof _isCapturing;

	/**
	 * Checks the current interaction modality to determine whether or not focus
	 * is visible.
	 */
	readonly isFocusVisible?: typeof _isFocusVisible;
}

/**
 * Destructured arguments provided to the {@link useFocusEvents()} hook.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 */
export interface UseFocusEventsInput<T = Element> extends ComposeProps<T> {
	/**
	 * [Optional] Used in tests for mocking and spying.
	 * @defaultValue - `{}`
	 */
	readonly _dependencies?: UseFocusEventsDependencies;
}

/**
 * Use a handler for mouse events, touch events, and keyboard events specifically
 * when 'Enter' or 'Space' is pressed. This makes it easier to achieve WCAG
 * compliance given how many different ways there are to interact with a
 * component.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 *
 * @param input - A {@link UseFocusEventsInput} object used for destructuring.
 *
 * @returns The element provided to `as` but type cast for use as a JSX element
 * in your component.
 */
export const useInteractionModality = <T = Element>({
	disabled = false,
	onChange = noop,
	_dependencies = {},
}: UseFocusEventsInput<T>) => {
	const { getModality } = interactionModality();

	const [modality, setModality] = useState<InteractionModality | null>(
		getModality(),
	);

	useEffect(() => {
		const { addListener, removeListener } = interactionModalityListeners();

		const listener = () => {
			const currentModality = getModality();

			setModality(currentModality);
		};

		addListener(listener);

		return () => {
			removeListener(listener);
		};
	}, []);

	return isUndefined(window) ? null : modality;
};
