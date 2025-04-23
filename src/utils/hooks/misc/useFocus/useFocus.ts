import {
	FocusEvent,
	FocusEventHandler,
	ForwardedRef,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react';
import { noop } from '@/utils/functions/misc/noop';

/**
 * Destructured arguments provided to the {@link useFocus()} function.
 */
export interface UseFocusInput<T extends HTMLElement = HTMLElement> {
	/**
	 * A ref passed to the HTML element which will be focused.
	 */
	readonly ref?: ForwardedRef<T>;

	/**
	 * [Optional] A callback triggered when the current element receives a 'blur'
	 * event.
	 * @defaultValue - A no-op function.
	 */
	readonly onBlur?: FocusEventHandler<T>;

	/**
	 * [Optional] A callback triggered when the current element receives a 'focus'
	 * event.
	 * @defaultValue - A no-op function.
	 */
	readonly onFocus?: FocusEventHandler<T>;
}

/**
 * A hook which returns a boolean indicating whether the given media query
 * matches. It will also update the value when the media query changes.
 *
 * @param input - A {@link UseFocusInput} object used for destructuring.
 *
 * @returns A boolean which is `true` if the media query matches or `false`.
 */
export const useFocus = <T extends HTMLElement = HTMLElement>({
	ref: forwardedRef,
	onBlur = noop,
	onFocus = noop,
}: UseFocusInput<T>) => {
	const [focused, setFocused] = useState(false);
	const ref = useRef(null);

	const handleBlur = useCallback<FocusEventHandler<T> & EventListener>(
		(e) => {
			setFocused(false);
			onBlur(e as FocusEvent<T>);
		},
		[setFocused],
	);

	const handleFocus = useCallback<FocusEventHandler<T> & EventListener>(
		(e) => {
			setFocused(true);
			onFocus(e as FocusEvent<T>);
		},
		[setFocused],
	);

	useEffect(() => {
		const _ref = forwardedRef || ref;

		if (typeof _ref === 'object' && _ref !== null) {
			const { current: $element } = _ref;

			if ($element) {
				$element.addEventListener('blur', handleBlur);
				$element.addEventListener('focus', handleFocus);
			}

			return () => {
				if ($element) {
					$element.removeEventListener('blur', handleBlur);
					$element.removeEventListener('focus', handleFocus);
				}
			};
		}

		return noop;
	}, [handleBlur, handleFocus, ref]);

	return { focused, ref: forwardedRef || ref };
};

export default useFocus;
