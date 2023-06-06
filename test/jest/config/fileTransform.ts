/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const camelcase = require('camelcase');

/**
 * This is a custom Jest transformer turning file imports into filenames.
 * @see http://facebook.github.io/jest/docs/en/webpack.html
 */
module.exports = {
	process(_: unknown, filename: string) {
		const assetFilename = JSON.stringify(path.basename(filename));

		if (filename.match(/\.svg$/)) {
			/**
			 * Based on how SVGR generates a component name:
			 * @see https://github.com/smooth-code/svgr/blob/01b194cf967347d43d4cbe6b434404731b87cf27/packages/core/src/state.js#L6
			 */
			const pascalCaseFilename = camelcase(path.parse(filename).name, {
				pascalCase: true,
			});

			const componentName = `Svg${pascalCaseFilename}`;

			return {
				code: `const React = require('react');
				module.exports = {
					__esModule: true,
					default: ${assetFilename},
					ReactComponent: React.forwardRef(function ${componentName}(props, ref) {
						return {
							$$typeof: Symbol.for('react.element'),
							type: 'svg',
							ref: ref,
							key: null,
							props: Object.assign({}, props, {
								children: ${assetFilename}
							})
						};
					}),
				};`,
			};
		}

		return {
			code: `module.exports = ${assetFilename};`,
		};
	},
};
