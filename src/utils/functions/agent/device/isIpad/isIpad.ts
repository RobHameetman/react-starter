import { isMac as _isMac } from '@app/utils/functions/agent/device/isMac';
import { isUndefined } from '@app/utils/functions/check/js/core/isUndefined';
import { criteriaCount as _criteriaCount } from '@app/utils/functions/misc/criteriaCount';
import { hasUserAgentPlatform as _hasUserAgentPlatform } from '@app/utils/functions/misc/hasUserAgentPlatform';

/**
 * Functional dependencies used in the {@link isIpad()} function. This object is
 * provided in tests for mocking and spying.
 */
export interface IsIpadDependencies {
	/**
	 * Filter an array of boolean an expressions and return the count of how many
	 * are `false`.
	 */
	readonly criteriaCount?: typeof _criteriaCount;

	/**
	 * Check if the user agent includes a specific platform string.
	 */
	readonly hasUserAgentPlatform?: typeof _hasUserAgentPlatform;

	/**
	 * Checks if the user is on a Mac.
	 */
	readonly isMac?: typeof _isMac;
}

/**
 * Destructured arguments provided to the {@link isIpad()} function.
 */
export interface IsIpadInput {
	/**
	 * [Optional] Bypass the user agent check.
	 * @defaultValue - `false`
	 */
	readonly bypassUserAgent?: boolean;

	/**
	 * [Optional] Used in tests for mocking and spying.
	 * @defaultValue - `{}`
	 */
	readonly _dependencies?: IsIpadDependencies;
}

/**
 * Checks if the user is on an iPad.
 *
 * @param input - A {@link IsIpadInput} object used for destructuring.
 *
 * @returns A `boolean` which is `true` if the user is on an iPad.
 *
 * @privateRemarks
 * iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch
 * support.
 */
export const isIpad = ({
	bypassUserAgent = false,
	_dependencies = {},
}: IsIpadInput = {}) => {
	const {
		criteriaCount = _criteriaCount,
		hasUserAgentPlatform = _hasUserAgentPlatform,
		isMac = _isMac,
	} = _dependencies;

	if (isUndefined(window)) {
		return false;
	}

	if (!bypassUserAgent) {
		return (
			hasUserAgentPlatform(/^iPad/i) ||
			(isMac({ bypassUserAgent }) && navigator.maxTouchPoints > 1)
		);
	}

	const screenRatio = screen.width / screen.height;

	return (
		criteriaCount([
			'MediaSource' in window,
			'webkitRequestFullscreen' in Element.prototype,
			screenRatio > 0.65 && screenRatio < 0.8,
		]) >= 2
	);
};
