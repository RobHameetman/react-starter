import { Children, PropsWithChildren, cloneElement, useEffect } from 'react';
import { isFunction as _isFunction } from '@app/utils/functions/check/js/core/isFunction';
import { isReactElement as _isReactElement } from '@app/utils/functions/check/react/isReactElement';

/**
 * Functional dependencies used in the {@link usePropsWithChildren()} hook. This object
 * is provided in tests for mocking and spying.
 */
export interface UsePropsWithChildrenDependencies {
	/**
	 * Checks that an `unknown` value is a function.
	 */
	readonly isFunction?: typeof _isFunction;

	/**
	 * Checks that an `unknown` value is a {@link ReactElement}.
	 */
	readonly isReactElement?: typeof _isReactElement;
}

/**
 * Destructured arguments provided to the {@link usePropsWithChildren()} hook.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 */
export interface UsePropsWithChildrenInput<P = Record<string, never>> {
	/**
	 * A callback function that is called when a user presses the space bar.
	 */
	readonly children: PropsWithChildren<P>['children'];

	/**
	 * Add conditional logic to props. Keys for this object must match keys in the
	 * `props` object.
	 * @defaultValue - `{}`
	 */
	readonly criteria?: Record<
		string,
		(childProps: Record<string, unknown>, value: unknown) => unknown
	>;

	/**
	 * The props applied to all children.
	 * @defaultValue - `{}`
	 */
	readonly props?: P;

	/**
	 * [Optional] Used in tests for mocking and spying.
	 * @defaultValue - `{}`
	 */
	readonly _dependencies?: UsePropsWithChildrenDependencies;
}

/**
 * Apply props to all children of a React component.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 *
 * @param input - A {@link UsePropsWithChildrenInput} object used for destructuring.
 *
 * @returns The element provided to `as` but type cast for use as a JSX element
 * in your component.
 */
export const usePropsWithChildren = <
	P extends Record<string, unknown> = Record<string, never>,
>({
	children,
	criteria = {},
	props = {} as P,
	_dependencies = {},
}: UsePropsWithChildrenInput<P>) => {
	const { isFunction = _isFunction, isReactElement = _isReactElement } =
		_dependencies;

	return Children.map(children, (child) => {
		if (isReactElement(child)) {
			return cloneElement(child, {
				...child.props,
				...Object.fromEntries(
					Object.entries(props).filter(([_, value]) => value !== undefined),
				),
				...Object.fromEntries(
					Object.entries(criteria)
						.map(([key, callback]) => [key, callback(child.props, props[key])])
						.filter(([_, result]) => result !== null),
				),
			});
		}

		return child;
	});
};
