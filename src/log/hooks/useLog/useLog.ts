import { ErrorInfo, useCallback, useEffect } from 'react';
import { StatusType, datadogLogs } from '@datadog/browser-logs';

/**
 * Functional dependencies used in the {@link useLog()} hook. This object is
 * provided in tests for mocking and spying.
 */
export interface UseLogDependencies {
	/**
	 * [Optional] Calculate the position offset of the chat button.
	 */
	readonly log?: typeof datadogLogs.logger.log;
}

/**
 * An input object provided to {@link useLog()} used for destructuring.
 */
export interface UseLogInput {
	/**
	 * [Optional] Set to `true` to log in a {@link useEffect()} callback.
	 * @defaultValue - `false`
	 */
	readonly auto?: boolean;
	/**
	 * [Optional] The error to log.
	 */
	readonly error?: Error;
	/**
	 * [Optional] The severity at which the given message will be logged.
	 * May be "debug", "error", "info", or "warn".
	 * @defaultValue - `"info"`
	 */
	readonly severity?: StatusType;
	/**
	 * [Optional] Extra information to log.
	 */
	readonly extra?: ErrorInfo | Record<string, unknown> | string;
	/**
	 * [Optional] The message string provided as the first argument to
	 * {@link datadogLogs.logger.log()}. This string is appended with the given
	 * log type (e.g. providing a message "Something went down" with a log type
	 * of "info" will send DataDog the string "[Info] Something went down").
	 */
	readonly message?: string;
	/**
	 * [Optional] Set to `true` to prevent logging to the console.
	 * @defaultValue - `false`
	 */
	readonly silent?: boolean;
	/**
	 * [Optional] Used in tests for mocking and spying.
	 * @defaultValue `{}`
	 */
	readonly _dependencies?: UseLogDependencies;
}

/**
 * Used to log an event at the given severity. May be used to provide a function
 * used as a handler or as an abstraction for a {@link useEffect()} in which
 * such a function would be called.
 *
 * @example
 * useLog({
 *   auto: true,
 *   type: 'info',
 *   message: 'Log this',
 * });
 *
 * --OR--
 *
 * const { log } = useLog();
 *
 * ...
 *
 * const handleErrorAsWarning = useCallback(
 *   (err) => log({
 *     type: 'warn',
 *     message: err.message,
 *   }),
 *   [log],
 * );
 */
export const useLog = ({
	auto = false,
	error: _error,
	extra: _extra,
	severity: _severity = 'info',
	message: _message,
	silent: _silent,
	_dependencies = {},
}: UseLogInput = {}) => {
	const { log: _log = datadogLogs.logger.log } = _dependencies;

	const errorMessageNotFound = 'Please provide a valid message to log.';

	const log = useCallback(
		({
			error = _error,
			extra = _extra,
			severity = _severity,
			message = _message,
			silent = _silent,
		} = {}) => {
			if (!message) {
				throw new Error(errorMessageNotFound);
			}

			const timestamp = new Date().toISOString();

			let context = Object.freeze({
				message: error?.message || message,
				timestamp,
			});

			if (error) {
				context = Object.freeze({
					...context,
					name: error.name,
					stack: error.message,
				});
			}

			if (extra) {
				context = Object.freeze({
					...context,
					extra,
				});
			}

			if (!silent) {
				/* eslint-disable-next-line no-console */
				console[severity](message);
			}

			_log(
				`(${timestamp}) [${severity.toLocaleUpperCase()}]: ${message}`,
				context,
				severity,
			);
		},
		[],
	);

	useEffect(() => {
		if (auto && Boolean(process.env.DATADOG_ENABLED) !== false) {
			if (!_message) {
				throw new Error(errorMessageNotFound);
			}

			log();
		}
	}, []);

	return { log };
};
