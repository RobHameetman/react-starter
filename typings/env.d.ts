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
			/* App */
			APP_NAME?: string;
			APP_DEBUG?: boolean;
			APP_BACKEND_SERVICE?: string;
			APP_ENABLE_SERVER_COMPONENTS?: boolean;
			APP_ENV?: Envs;
			APP_VERSION?: string;

			/* Auth */
			AUTH_ENABLED?: boolean;
			AUTH_LOGIN_ON_START?: boolean;
			AUTH_CLIENT_ID?: string;
			AUTH_CLIENT_SECRET?: string;
			AUTH_CLIENT_USERNAME?: string;
			AUTH_USE_REFRESH_TOKEN?: boolean;
			AUTH_REDIRECT_URI?: string;

			/* Observability */
			DATADOG_APPLICATION_ID?: string;
			DATADOG_CLIENT_TOKEN?: string;
			DATADOG_ENV?: 'development' | 'production';
			DATADOG_LOGS_ENABLED?: boolean;
			DATADOG_RUM_ENABLED?: boolean;

			/* Build */
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
