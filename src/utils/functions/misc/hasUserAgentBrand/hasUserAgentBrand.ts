import { isUndefined } from '@app/utils/functions/check/js/core/isUndefined';
import { isUndefinedOrNull } from '@app/utils/functions/check/js/specialized/isUndefinedOrNull';

/**
 * Check if the user agent includes a specific brand string.
 *
 * @param expression - A regular expression used to test the user agent.
 *
 * @returns A `boolean` which is `true` if the user agent includes the brand.
 */
export const hasUserAgentBrand = (expression: RegExp) => {
	if (isUndefined(window) || isUndefinedOrNull(window.navigator)) {
		return false;
	}

	return (
		window.navigator.userAgentData?.brands.some(({ brand }) =>
			expression.test(brand),
		) || expression.test(window.navigator.userAgent)
	);
};
