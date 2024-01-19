/// <reference types="@datadog/browser-logs" />
/// <reference types="@datadog/browser-rum" />

type GlobalThis = Window &
	typeof globalThis & {
		NaN: never;
		Infinity: never;
	};

declare global {
	/**
	 * @TODO: Update this type definition if you need to add to the Window object.
	 */
	interface Window {
		readonly DD_LOGS?: unknown;
		readonly DD_RUM?: unknown;
		readonly DD_RUM_SYNTHETICS?: unknown;
		readonly $events: unknown;
	}
}

export {}
