import { isUndefined } from '@app/utils/functions/check/js/core/isUndefined';
import { isUndefinedOrNull } from '@app/utils/functions/check/js/specialized/isUndefinedOrNull';

/**
 * Check if the user agent includes a specific platform string.
 *
 * @param expression - A regular expression used to test the user agent.
 *
 * @returns A `boolean` which is `true` if the user agent includes the platform.
 */
export const hasUserAgentPlatform = (expression: RegExp) => {
	if (isUndefined(window) || isUndefinedOrNull(window.navigator)) {
		return false;
	}

	return expression.test(
		window.navigator.userAgentData?.platform || window.navigator.platform,
	);
};
