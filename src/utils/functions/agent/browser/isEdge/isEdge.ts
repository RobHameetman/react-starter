import { isTrident as _isTrident } from '@/utils/functions/agent/engines/isTrident';
import { isUndefined } from '@/utils/functions/check/js/core/isUndefined';
import { criteriaCount as _criteriaCount } from '@/utils/functions/misc/criteriaCount';
import { hasUserAgentBrand as _hasUserAgentBrand } from '@/utils/functions/misc/hasUserAgentBrand';

/**
 * Functional dependencies used in the {@link isEdge()} function. This object is
 * provided in tests for mocking and spying.
 */
export interface IsEdgeDependencies {
	/**
	 * Filter an array of boolean an expressions and return the count of how many
	 * are `false`.
	 */
	readonly criteriaCount?: typeof _criteriaCount;

	/**
	 * Check if the user agent includes a specific brand string.
	 */
	readonly hasUserAgentBrand?: typeof _hasUserAgentBrand;

	/**
	 * Checks if the current browser engine is Trident.
	 */
	readonly isTrident?: typeof _isTrident;
}

/**
 * Destructured arguments provided to the {@link isEdge()} function.
 */
export interface IsEdgeInput {
	/**
	 * [Optional] Bypass the user agent check.
	 * @defaultValue - `false`
	 */
	readonly bypassUserAgent?: boolean;

	/**
	 * [Optional] Used in tests for mocking and spying.
	 * @defaultValue - `{}`
	 */
	readonly _dependencies?: IsEdgeDependencies;
}

/**
 * Checks if the user's browser is MS Edge.
 *
 * @param input - A {@link IsEdgeInput} object used for destructuring.
 *
 * @returns A `boolean` which is `true` if the user's browser is MS Edge.
 */
export const isEdge = ({
	bypassUserAgent = false,
	_dependencies = {},
}: IsEdgeInput = {}) => {
	const {
		criteriaCount = _criteriaCount,
		hasUserAgentBrand = _hasUserAgentBrand,
		isTrident = _isTrident,
	} = _dependencies;

	if (isUndefined(window)) {
		return false;
	}

	const usingTrident = isTrident({ bypassUserAgent });

	if (!bypassUserAgent) {
		return hasUserAgentBrand(/Edg/i);
	}

	return (
		criteriaCount([
			'msWriteProfilerMark' in window,
			'MSStream' in window,
			'msLaunchUri' in navigator,
			'msSaveBlob' in navigator,
		]) >= 3 && !usingTrident
	);
};
