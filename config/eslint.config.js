/**
 * This config file reintroduces support for configuration in package.json files.
 */
const pkgJson = require('../package.json');

const defaultConfig = 'recommended';

const eslintConfig = 'eslint';
const hasConfig = eslintConfig in pkgJson;
const extendsConfig = hasConfig && 'extends' in pkgJson[eslintConfig];

const extendsScoped =
	extendsConfig &&
	pkgJson[eslintConfig].extends.startsWith('@') &&
	pkgJson[eslintConfig].extends.includes('/');

const config = extendsConfig
	? pkgJson[eslintConfig].extends.match(/^(?:\@[a-zA-Z0-9-_\.]+\/)?[a-zA-Z0-9-_\.]+\/([a-zA-Z0-9-_\.]+)$/)?.at(1) || defaultConfig
	: defaultConfig;

const importFrom = extendsConfig
	? extendsScoped && pkgJson[eslintConfig].extends.endsWith('/')
		? `${pkgJson[eslintConfig].extends}eslint-plugin`
		: pkgJson[eslintConfig].extends
	: '@rob.hameetman/eslint-plugin';

const { configs, plugin } = require(importFrom);

module.exports = [
	...(configs[config] instanceof Array ? configs[config] : []),
	...(hasConfig
		? pkgJson[eslintConfig].flatMap((config) => ([
			{
				plugins: {
					'@rob.hameetman': plugin,
				},
				ignores:
					'ignores' in config
						? config.ignores
						: ['tailwind.config.js', 'config/webpack.config.js', 'typings/'],
				rules: {
					...('rules' in config ? config.rules : {}),
				},
			},
			...('overrides' in config
				? config.overrides.map(({ name, files, ignores, rules, plugins, settings }) => ({
						name,
						files,
						ignores,
						rules,
						settings,
						...(plugins
							? {
									plugins: {
										...plugins.map((plugin) => require(
											plugin.startsWith('@')
												? `${plugin}/eslint-plugin`
												: `eslint-plugin-${plugin}`
										)),
										'@rob.hameetman': plugin,
									},
								}
							: {}),
					}))
				: []),
		]))
		: []),
];
