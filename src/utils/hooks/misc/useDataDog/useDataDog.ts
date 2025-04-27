import { datadogRum } from '@datadog/browser-rum';
import { datadogLogs } from '@datadog/browser-logs';
import '@datadog/browser-logs/bundle/datadog-logs';

export interface UseDataDogInput {
	readonly logs?: boolean;
	readonly rum?: boolean;
}

/**
 * Initialize an instance of DataDog RUM for logging. This hook is used once
 * as the application begins to render in `src/App.tsx`.
 */
export const useDataDog = ({ logs = true, rum = true } = {}) => {
	const {
		APP_NAME,
		APP_VERSION,
		DATADOG_APPLICATION_ID,
		DATADOG_CLIENT_TOKEN,
		DATADOG_ENV,
		DATADOG_LOGS_ENABLED,
		DATADOG_RUM_ENABLED,
	} = process.env;

	const logsEnabled = DATADOG_LOGS_ENABLED && logs;
	const rumEnabled = DATADOG_RUM_ENABLED && rum;

	if (logsEnabled && DATADOG_CLIENT_TOKEN) {
		datadogLogs.init({
			clientToken: DATADOG_CLIENT_TOKEN,
			site: 'datadoghq.com',
			forwardErrorsToLogs: true,
			sessionSampleRate: 100,
		});
	}

	if (rumEnabled && DATADOG_APPLICATION_ID && DATADOG_CLIENT_TOKEN) {
		datadogRum.init({
			applicationId: DATADOG_APPLICATION_ID,
			clientToken: DATADOG_CLIENT_TOKEN,
			env: DATADOG_ENV || 'development',
			// sampleRate: 100,
			service: APP_NAME,
			site: 'datadoghq.com',
			trackLongTasks: true,
			trackResources: true,
			trackUserInteractions: true,
			version: APP_VERSION || '0.0.0',
		});
	}
};
