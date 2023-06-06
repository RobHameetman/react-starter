/// <reference types="@datadog/browser-logs" />
/// <reference types="@datadog/browser-rum" />

type GlobalThis = Window &
	typeof globalThis & {
		NaN: never;
		Infinity: never;
	};

declare global {
	interface Window {
		/**
		 * @TODO: Update this type definition if you need to add to the Window object.
		 */
		readonly DD_LOGS?: unknown;
		readonly DD_RUM?: Rum;
		readonly DD_RUM_SYNTHETICS?: Rum;
	}
}

export {}
