import { useEffect, useState } from 'react';
import type { InteractionModality } from '@/utils/enums/InteractionModalities';
import { isUndefined } from '@/utils/functions/check/js/core/isUndefined';
import { isFocusVisible as _isFocusVisible } from '@/utils/functions/events/focus/isFocusVisible';
import { interactionModality } from '@/utils/functions/events/interactions/interactionModality';
import { interactionModalityListeners } from '@/utils/functions/events/interactions/interactionModalityListeners';
import { isCapturing as _isCapturing } from '@/utils/functions/events/phases/isCapturing';

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
export const useInteractionModality = () => {
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

export default useInteractionModality;
