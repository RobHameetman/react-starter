import { isEventHandler } from '@app/utils/functions/check/react/isEventHandler';
import { isNonEmptyObject } from '@app/utils/functions/check/js/specialized/isNonEmptyObject';
import {
	HandlerPropName,
	isHandlerPropName,
} from '@app/utils/types/react/HandlerPropName';

/**
 * From props of type `P`, pick a set of props extracted from keys of `P` which
 * are a {@link HandlerPropName}.
 *
 * @typeParam P - The type of props passed to a component.
 */
export type HandlerPropsOf<P> = Pick<P, Extract<keyof P, HandlerPropName>>;

/**
 * Extract from props of type `P` all props used for handling events.
 *
 * @typeParam P - The type of props passed to a component.
 */
export const handlerPropsOf = <P>(props: P) =>
	Object.fromEntries(
		Object.entries(props as Record<string, unknown>).filter(
			([propName, propValue]) =>
				isHandlerPropName(propName) && isEventHandler(propValue),
		),
	) as HandlerPropsOf<P>;

/**
 * Checks that an `unknown` value is a set of {@link HandlerPropsOf}.
 *
 * Requirements:
 *   - `value` must be a non-empty object.
 *   - `value` must have all keys of type {@link HandlerPropName}.
 *   - `value` must have all values which are event handlers.
 *   - `value` must have all keys which are also keys of `props` of type `P` if `props` are provided.
 *
 * @typeParam P - The type of props passed to a component.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a set of {@link HandlerPropsOf}.
 */
export const isHandlerPropsOf = <P>(
	value: unknown,
	props?: P,
	isP = (_value: unknown): _value is P => true,
): value is HandlerPropsOf<P> =>
	/**
	 * value
	 */
	isNonEmptyObject(value) &&
	Object.keys(value).every(isHandlerPropName) &&
	Object.values(value).every((prop) => isEventHandler(prop)) &&
	/**
	 * props
	 */
	(props
		? isP(props) &&
		  Object.keys(value).every(
				(prop) => prop in (props as Record<string, unknown>),
		  )
		: true);
