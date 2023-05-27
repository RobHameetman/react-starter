const path = require('path');
const FriendlyErrorsPlugin = require('@soda/friendly-errors-webpack-plugin');
const FastRefresh = require('@pmmmwh/react-refresh-webpack-plugin');
const FastRefreshTS = require('react-refresh-typescript');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const EslintWebpackPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StylelintWebpackPlugin = require('stylelint-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { AggressiveMergingPlugin } = require('webpack').optimize;
const { DefinePlugin, EnvironmentPlugin, IgnorePlugin, ProvidePlugin } = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const WebpackDevServerWaitpage = require('webpack-dev-server-waitpage');
const { default: envs } = require('dotenv-conversion');
const dotenv = require('dotenv');

/**
 * Here we use dotenv-conversion to cast env variable values into their expected
 * types, either a string or number or boolean or null. Env variables with no
 * value are cast as `''` rather than `undefined`.
 */
envs.make(dotenv.config());

/**
 * We do not want to override process.env in memory, so we create a copy with
 * the type-cast env variables from above to pass to webpack later.
 *
 * @type {Record<string, string | number | boolean | null>}
 */
const PROCESS_ENV = envs.getenv();

/**
 * Allowed values for the `APP_ENV` environment variable.
 *
 * @type {['DEV', 'QA', 'PROD']}
 */
const APP_ENVS = Object.freeze([
	'DEV',
	'QA',
	'PROD',
]);

const ENV_FILE_PREFIXES = Object.freeze([
	'APP_',
	'CYPRESS_',
	'REACT_APP_',
]);

/**
 * Derive build environment predicates from `NODE_ENV`.
 */
const isProduction = PROCESS_ENV.NODE_ENV === 'production';
const isDevelopment = PROCESS_ENV.NODE_ENV === 'development';

/**
 * Derive webpack settings from .env
 */
const HOST = PROCESS_ENV.HOST || 'localhost';
const PORT = PROCESS_ENV.PORT || 8080;
const ANALYZE_BUNDLE = PROCESS_ENV.ANALYZE_BUNDLE;

/**
 * Set the `PUBLIC_PATH` from .env or use `'/'` by default.
 */
const PUBLIC_PATH = (PROCESS_ENV.PUBLIC_PATH || '').endsWith('/')
	? PROCESS_ENV.PUBLIC_PATH
	: `${PROCESS_ENV.PUBLIC_PATH || ''}/`;

/**
 * Include variables with supported prefixes in the runtime environment and
 * provide environment-specific overrides.
 *
 * @param {Record<string, string | number | boolean | null>} processEnv 
 *
 * @returns The loaded process env object with environment-specific suffixes
 * taking precedent over non-suffixed variables.
 */
const loadAppEnvVars = (processEnv = PROCESS_ENV) => {
	const envVars = {};
	const { APP_ENV = '' } = processEnv;

  if (typeof APP_ENV !== 'string') {
    throw new Error('Environment variable APP_ENV must be a string.');
  } else if (!APP_ENVS.includes(APP_ENV)) {
    throw new Error('Environment variable APP_ENV must be either "DEV" or "QA" or "PROD".');
  }

	Object.keys(processEnv).forEach((envVariable) => {
		const noMatchingPrefix = !ENV_FILE_PREFIXES.some((prefix) =>
			envVariable.includes(prefix),
		);

		if (noMatchingPrefix) {
			return;
		}

		const envKey = `${envVariable}_${APP_ENV.toUpperCase()}`;

		if (APP_ENV && envKey in processEnv) {
			delete processEnv[envVariable];
			envVars[envVariable] = processEnv[envKey];
		} else {
			envVars[envVariable] = processEnv[envVariable];
		}
	});

	return envVars;
};

const STYLE_LOADERS = {
	css: {
		default: {
			loader: 'css-loader',
			options: {
				url: false,
			},
		},
		module: {
			loader: 'css-loader',
			options: {
				url: false,
				importLoaders: 2,
				modules: {
					exportLocalsConvention: 'camelCase',
					localIdentName: '[name]__[local]--[hash:base64:5]',
				},
			},
		},
	},
	default: isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
	postCss: 'postcss-loader',
	scss: {
		loader: 'sass-loader',
		options: {
			sassOptions: {
				includePaths: [path.join(__dirname, 'node_modules')],
			},
		},
	},
};

/**
 * Configure Webpack build pipeline.
 */
module.exports = () => ({
	entry: ['./src/polyfills.ts', './src/index.ts'],
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: isDevelopment ? `/` : PUBLIC_PATH,
		filename: isDevelopment ? '[name].js' : '[name].[contenthash].min.js',
		chunkFilename: isDevelopment ? '[name].js' : '[name].[contenthash].min.js',
	},
	mode: isProduction ? 'production' : 'development',
	devServer: {
		host: HOST || 'localhost',
		open: true,
		port: PORT || 8080,
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': '*',
			'Access-Control-Allow-Headers': '*',
			'Cache-Control':
				'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
		},
		client: {
			logging: 'error',
			overlay: {
				errors: true,
				warnings: false,
			},
		},
		historyApiFallback: {
			index: '/index.html',
		},
		hot: true,
		compress: true,
		devMiddleware: {
			writeToDisk: PROCESS_ENV.WEBPACK_SERVE_FROM_DISK || isProduction,
		},
		setupMiddlewares: (middlewares, server) => {
			server.app.use(WebpackDevServerWaitpage(server, { theme: 'dark' }));

			return middlewares;
		},
	},
	devtool: isDevelopment ? 'eval-cheap-module-source-map' : undefined,
	stats: 'none',
	optimization: {
		chunkIds: isDevelopment ? 'named' : 'natural',
		emitOnErrors: isProduction,
		nodeEnv: isDevelopment ? 'development' : 'production',
		minimize: isProduction,
		minimizer: [
			new TerserPlugin({
				extractComments: false,
				terserOptions: {
					format: {
						comments: false,
					},
				},
			}),
		],
		moduleIds: isDevelopment ? 'named' : 'natural',
		runtimeChunk: false,
		splitChunks: false,
	},
	performance: {
		hints: isDevelopment ? 'error' : false,
		maxEntrypointSize: isDevelopment ? 512000000 : 244000,
		maxAssetSize: isDevelopment ? 512000000 : 244000,
	},
	plugins: [
		new HtmlWebpackPlugin({
			minify: isProduction && {
				removeComments: true,
				collapseWhitespace: false,
				removeAttributeQuotes: true,
			},
			template: './public/index.html',
			templateParameters: (compilation, assets, assetTags, options) => ({
				compilation,
				webpackConfig: compilation.options,
				htmlWebpackPlugin: {
					files: assets,
					tags: {
						...assetTags,
					},
					options,
				},
			}),
		}),
		new EslintWebpackPlugin({
			files: [
				isDevelopment && '/src/**/!(__test__)/!(*.spec.ts?(x))',
				isDevelopment && '/src/!(*.spec.ts?(x))',
			].filter(Boolean),
			extensions: ['js', 'jsx', 'ts', 'tsx'],
			failOnWarning: isProduction,
			lintDirtyModulesOnly: isDevelopment,
			threads: true,
			cache: isDevelopment,
		}),
		new StylelintWebpackPlugin({
			extensions: ['css', 'scss'],
			failOnWarning: isProduction,
			lintDirtyModulesOnly: isDevelopment,
			threads: true,
			cache: isDevelopment,
		}),
		new EnvironmentPlugin({
			...loadAppEnvVars(),
			BUILD_ENVIRONMENT: PROCESS_ENV.NODE_ENV || undefined,
			NODE_ENV: PROCESS_ENV.NODE_ENV || 'development',
			SOURCE_VERSION: PROCESS_ENV.GITHUB_SHA || '',
			PUBLIC_PATH,
		}),
		new CaseSensitivePathsPlugin(),
		new DefinePlugin({
			__EVENTS__: 'window.$events',
			__DEV__: PROCESS_ENV.NODE_ENV === 'development',
			__PROD__: PROCESS_ENV.NODE_ENV === 'production',
			__TEST__: PROCESS_ENV.NODE_ENV === 'test',
		}),
		new CleanWebpackPlugin(),
		isDevelopment && new FastRefresh(),
		new FriendlyErrorsPlugin(),
		new ProvidePlugin({
			process: 'process/browser',
		}),
		isProduction && new CssMinimizerPlugin(),
		isProduction &&
			new MiniCssExtractPlugin({
				filename: '[name].[chunkhash].min.css',
			}),
		isProduction &&
			new IgnorePlugin({
				resourceRegExp: /^\.\/locale$/,
				contextRegExp: /moment$/,
			}),
		isProduction && new AggressiveMergingPlugin(),
		ANALYZE_BUNDLE && new BundleAnalyzerPlugin(),
	].filter(Boolean),
	module: {
		rules: [
			{
				test: /\.ts(x)?$/,
				use: [
					{
						loader: 'ts-loader',
						options: {
							allowTsInNodeModules: true,
							getCustomTransformers: () => ({
								before: [isDevelopment && FastRefreshTS()].filter(Boolean),
							}),
							transpileOnly: isDevelopment,
						},
					},
				],
				exclude: ['/node_modules/'],
			},
			{
				test: /\.(css|scss)$/,
				exclude: /\.module\.(css|scss)$/,
				use: [
					STYLE_LOADERS.default,
					STYLE_LOADERS.css.default,
					STYLE_LOADERS.postCss,
					STYLE_LOADERS.scss,
				],
			},
			{
				test: /\.module\.(css|scss)$/,
				use: [
					STYLE_LOADERS.default,
					STYLE_LOADERS.css.module,
					STYLE_LOADERS.postCss,
					STYLE_LOADERS.scss,
				],
			},
			{
				test: /\.(gql|graphql)$/,
				exclude: /node_modules/,
				loader: 'graphql-tag/loader',
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)$/i,
				type: 'asset',
			},
			{
				test: /\.(png|jpg|gif)$/i,
				type: 'asset/resource',
				generator: {
          emit: false,
        },
			},
			/**
			 * @see https://github.com/microsoft/PowerBI-visuals-tools/issues/365#issuecomment-1099716186
			 */
			{
				test: /\.m?js/,
				resolve: {
					fullySpecified: false,
				},
			},
		],
	},
	resolve: {
		alias: {
			'@app': path.resolve(__dirname, 'src/'),
			'@test': path.resolve(__dirname, 'test/resources/'),
		},
		extensions: ['.tsx', '.ts', '.css', '.scss', '.js'],
		fallback: {
			buffer: false,
			crypto: 'crypto-browserify',
			path: 'path-browserify',
			stream: 'stream-browserify',
			util: 'util',
		},
		modules: ['src', 'node_modules'],
	},
	cache: isDevelopment,
});
