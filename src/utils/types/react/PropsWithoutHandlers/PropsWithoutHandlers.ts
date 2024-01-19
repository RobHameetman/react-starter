import { isEventHandler } from '@app/utils/functions/check/react/isEventHandler';
import { isObject } from '@app/utils/functions/check/js/core/isObject';
import {
	HandlerPropName,
	isHandlerPropName,
} from '@app/utils/types/react/HandlerPropName';

/**
 * From props of type `P`, pick a set of props extracted from keys of `P` which
 * are not a {@link HandlerPropName}.
 *
 * @typeParam P - The type of props passed to a component.
 */
export type PropsWithoutHandlers<P> = Omit<
	P,
	Extract<keyof P, HandlerPropName>
>;

/**
 * Extract from props of type `P` all props used for handling events.
 *
 * @typeParam P - The type of props passed to a component.
 */
export const propsWithoutHandlers = <P>(props: P) =>
	Object.fromEntries(
		Object.entries(props as Record<string, unknown>).filter(
			([propName, propValue]) =>
				!(isHandlerPropName(propName) && isEventHandler(propValue)),
		),
	) as PropsWithoutHandlers<P>;

/**
 * Checks that an `unknown` value is a set of {@link PropsWithoutHandlers}.
 *
 * Requirements:
 *   - `value` must be an object.
 *   - `value` must have all keys which are either not of type {@link HandlerPropName} or are of type {@link HandlerPropName} and are not event handlers.
 *   - `value` must have all keys which are also keys of `props` of type `P` if `props` are provided.
 *
 * @typeParam P - The type of props passed to a component.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a set of {@link PropsWithoutHandlers}.
 */
export const isPropsWithoutHandlers = <P>(
	value: unknown,
	props?: P,
	isP = (_value: unknown): _value is P => true,
): value is PropsWithoutHandlers<P> =>
	/**
	 * value
	 */
	isObject(value) &&
	Object.entries(value).every(
		([key, val]) =>
			!isHandlerPropName(key) ||
			(isHandlerPropName(key) && !isEventHandler(val)),
	) &&
	/**
	 * props
	 */
	(props
		? isP(props) &&
		  Object.keys(value).every(
				(prop) => prop in (props as Record<string, unknown>),
		  )
		: true);
