/* eslint-disable @typescript-eslint/naming-convention */

/**
 * If you look in the `webpack.config.js` file in the config/ directory, you'll see
 * at the top where we "import" our environment variables that we're using the
 * `dotenv` package as usual but we're also passing the output of that process
 * to a package named `dotenv-conversion`, which handles type conversion in some
 * cases (e.g. converting the string `'true'` to the boolean value `true`). We
 * can use the type definition below to tell the TypeScript compiler what types
 * specific environment variables should be after they're converted.
 */
declare global {
	type Envs = 'DEV' | 'PROD' | 'QA';

	namespace NodeJS {
		type ConvertedProcessEnv = ProcessEnv & {
			APP_DEBUG?: boolean;
			APP_ENV?: Envs;
			APP_NAME?: string;
			APP_VERSION?: string;
			APP_ENDPOINT?: string;
			HOST?: string;
			PORT?: number;
			PUBLIC_PATH?: string;
			WEBPACK_ANALYZE_BUNDLE?: boolean;
		};

		interface Process {
			env: ConvertedProcessEnv;
		}
	}
}

export {};
