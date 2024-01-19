import { isUndefined } from '@app/utils/functions/check/js/core/isUndefined';
import { criteriaCount as _criteriaCount } from '@app/utils/functions/misc/criteriaCount';
import { hasUserAgentBrand as _hasUserAgentBrand } from '@app/utils/functions/misc/hasUserAgentBrand';

/**
 * Functional dependencies used in the {@link isTrident()} function. This object
 * is provided in tests for mocking and spying.
 */
export interface IsTridentDependencies {
	/**
	 * Filter an array of boolean an expressions and return the count of how many
	 * are `false`.
	 */
	readonly criteriaCount?: typeof _criteriaCount;

	/**
	 * Check if the user agent includes a specific brand string.
	 */
	readonly hasUserAgentBrand?: typeof _hasUserAgentBrand;
}

/**
 * Destructured arguments provided to the {@link isTrident()} function.
 */
export interface IsTridentInput {
	/**
	 * [Optional] Bypass the user agent check.
	 * @defaultValue - `false`
	 */
	readonly bypassUserAgent?: boolean;

	/**
	 * [Optional] Used in tests for mocking and spying.
	 * @defaultValue - `{}`
	 */
	readonly _dependencies?: IsTridentDependencies;
}

/**
 * Checks if the current browser engine is Trident.
 *
 * @param input - A {@link IsTridentInput} object used for destructuring.
 *
 * @returns A `boolean` which is `true` if the current browser engine is Trident.
 */
export const isTrident = ({
	bypassUserAgent = false,
	_dependencies = {},
}: IsTridentInput = {}) => {
	const {
		criteriaCount = _criteriaCount,
		hasUserAgentBrand = _hasUserAgentBrand,
	} = _dependencies;

	if (isUndefined(window)) {
		return false;
	}

	if (!bypassUserAgent) {
		return hasUserAgentBrand(/Trident/i);
	}

	return (
		criteriaCount([
			'MSCSSMatrix' in window,
			'msSetImmediate' in window,
			'msIndexedDB' in window,
			'msMaxTouchPoints' in navigator,
			'msPointerEnabled' in navigator,
		]) >= 4
	);
};
