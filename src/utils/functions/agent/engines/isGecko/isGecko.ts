import { isUndefined } from '@/utils/functions/check/js/core/isUndefined';
import { criteriaCount as _criteriaCount } from '@/utils/functions/misc/criteriaCount';
import { hasUserAgentBrand as _hasUserAgentBrand } from '@/utils/functions/misc/hasUserAgentBrand';

/**
 * Functional dependencies used in the {@link isGecko()} function. This object
 * is provided in tests for mocking and spying.
 */
export interface IsGeckoDependencies {
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
 * Destructured arguments provided to the {@link isGecko()} function.
 */
export interface IsGeckoInput {
	/**
	 * [Optional] Bypass the user agent check.
	 * @defaultValue - `false`
	 */
	readonly bypassUserAgent?: boolean;

	/**
	 * [Optional] Used in tests for mocking and spying.
	 * @defaultValue - `{}`
	 */
	readonly _dependencies?: IsGeckoDependencies;
}

/**
 * Checks if the current browser engine is Gecko.
 *
 * @param input - A {@link IsGeckoInput} object used for destructuring.
 *
 * @returns A `boolean` which is `true` if the current browser engine is Gecko.
 */
export const isGecko = ({
	bypassUserAgent = false,
	_dependencies = {},
}: IsGeckoInput = {}) => {
	const {
		criteriaCount = _criteriaCount,
		hasUserAgentBrand = _hasUserAgentBrand,
	} = _dependencies;

	if (isUndefined(window)) {
		return false;
	}

	if (!bypassUserAgent) {
		return hasUserAgentBrand(/(?<!like\s)Gecko/i);
	}

	return (
		criteriaCount([
			'buildId' in navigator,
			'MozAppearance' in (document.documentElement?.style ?? {}),
			'onmoxfullscreenchange' in window,
			'moxInnerScreenX' in window,
			'CSSMozDocumentRule' in window,
			'CanvasCaptureMediaStream' in window,
		]) >= 4
	);
};
