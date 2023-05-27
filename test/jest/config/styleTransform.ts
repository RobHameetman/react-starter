/**
 * This is a custom Jest transformer turning style imports into empty objects.
 * @see http://facebook.github.io/jest/docs/en/webpack.html
 */
module.exports = {
	process() {
		return {
			code: 'module.exports = {};',
		};
	},
	getCacheKey() {
		return 'cssTransform';
	},
};
