import { hasMediaQuery as _hasMediaQuery } from '@/utils/functions/misc/hasMediaQuery';

/**
 * Functional dependencies used in the {@link prefersReducedMotion()} function.
 * This object is provided in tests for mocking and spying.
 */
export interface PrefersReducedMotionDependencies {
	/**
	 * @TODO
	 */
	readonly hasMediaQuery?: typeof _hasMediaQuery;
}

/**
 * Destructured arguments provided to the {@link prefersReducedMotion()}
 * function.
 */
export interface PrefersReducedMotionInput {
	/**
	 * [Optional] Used in tests for mocking and spying.
	 * @defaultValue - `{}`
	 */
	readonly _dependencies?: PrefersReducedMotionDependencies;
}

/**
 * @TODO
 *
 * @param input - A {@link PrefersReducedMotionInput} object used for
 * destructuring.
 */
export const prefersReducedMotion = ({
	_dependencies = {},
}: PrefersReducedMotionInput = {}) => {
	const { hasMediaQuery = _hasMediaQuery } = _dependencies;

	return hasMediaQuery('prefers-reduced-motion: reduce');
};
