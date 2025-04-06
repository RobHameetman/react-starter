import { useCallback, useEffect, useState } from 'react';
import { hasMediaQuery as _hasMediaQuery } from '@/utils/functions/misc/hasMediaQuery';

/**
 * Functional dependencies used in the {@link useMediaQuery()} hook. This object
 * is provided in tests for mocking and spying.
 */
export interface UseMediaQueryDependencies {
	/**
	 * @TODO
	 */
	readonly hasMediaQuery?: typeof _hasMediaQuery;
}

/**
 * Destructured arguments provided to the {@link useMediaQuery()} function.
 */
export interface UseMediaQueryInput {
	/**
	 * The media query to match (e.g. `'(min-width: 768px)'`).
	 */
	readonly query: string;

	/**
	 * [Optional] Used in tests for mocking and spying.
	 * @defaultValue - `{}`
	 */
	readonly _dependencies?: UseMediaQueryDependencies;
}

/**
 * A hook which returns a boolean indicating whether the given media query
 * matches. It will also update the value when the media query changes.
 *
 * @param input - A {@link UseMediaQueryInput} object used for destructuring.
 *
 * @returns A boolean which is `true` if the media query matches or `false`.
 */
export const useMediaQuery = ({
	query,
	_dependencies = {},
}: UseMediaQueryInput) => {
	const { hasMediaQuery = _hasMediaQuery } = _dependencies;
	const [matches, setMatches] = useState(hasMediaQuery(query));

	const handleChange = useCallback(() => {
		setMatches(hasMediaQuery(query));
	}, [query]);

	useEffect(() => {
		const matchMedia = window.matchMedia(query);

		handleChange();

		if (matchMedia.addListener) {
			matchMedia.addListener(handleChange);
		} else {
			matchMedia.addEventListener('change', handleChange);
		}

		return () => {
			if (matchMedia.removeListener) {
				matchMedia.removeListener(handleChange);
			} else {
				matchMedia.removeEventListener('change', handleChange);
			}
		};
	}, [handleChange, hasMediaQuery, query]);

	return matches;
};
