import { InteractionModality } from '@/utils/enums/InteractionModalities';
import { isVoidFunction } from '@/utils/functions/check/js/specialized/isVoidFunction';
import {
	NativeInteractionEvent,
	isNativeInteractionEvent,
} from '@/utils/types/events/NativeInteractionEvent';

/**
 * An event handler used in the `initGlobalEventHandlers` function to determine
 * if an interaction is the result of a user interaction or an automated
 * process, like calling `element.click()`.
 *
 * @param modality - The {@link InteractionModality} of the interaction.
 * @param event - The {@link NativeInteractionEvent} to check.
 */
export type NativeInteractionEventHandler = (
	modality: InteractionModality,
	event: NativeInteractionEvent,
) => void;

/**
 * Checks that an `unknown` value is a {@link NativeInteractionEventHandler} function.
 *
 * Requirements:
 *   - `value` must be a function which takes a {@link NativeInteractionEvent} and does not return a value.
 *
 * @param value - An `unknown` value.
 * @param event - [Optional] An `unknown` value. Expected to be an event.
 *
 * @returns The determination that `value` is or is not a {@link NativeInteractionEventHandler} function.
 */
export const isNativeInteractionEventHandler = (
	value: unknown,
	event?: Record<string, unknown>,
): value is NativeInteractionEventHandler =>
	/**
	 * value
	 */
	event
		? isVoidFunction<NativeInteractionEvent>(
				value,
				[event],
				isNativeInteractionEvent,
		  )
		: isVoidFunction(value);
