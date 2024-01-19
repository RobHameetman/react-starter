import { hasMediaQuery as _hasMediaQuery } from '@app/utils/functions/misc/hasMediaQuery';

/**
 * Functional dependencies used in the {@link prefersContrast()} function. This
 * object is provided in tests for mocking and spying.
 */
export interface PrefersContrastDependencies {
	/**
	 * @TODO
	 */
	readonly hasMediaQuery?: typeof _hasMediaQuery;
}

/**
 * Destructured arguments provided to the {@link prefersContrast()}
 * function.
 */
export interface PrefersContrastInput {
	/**
	 * [Optional] Used in tests for mocking and spying.
	 * @defaultValue - `{}`
	 */
	readonly _dependencies?: PrefersContrastDependencies;
}

/**
 * @TODO
 *
 * @param input - A {@link PrefersContrastInput} object used for
 * destructuring.
 */
export const prefersContrast = ({
	_dependencies = {},
}: PrefersContrastInput = {}) => {
	const { hasMediaQuery = _hasMediaQuery } = _dependencies;

	return (
		hasMediaQuery('forced-colors: active') ||
		hasMediaQuery('prefers-contrast: more') ||
		hasMediaQuery('prefers-contrast: custom')
	);
};
