declare global {
	/**
	 * Support for the experimental User-Agent Client Hints API.
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/User-Agent_Client_Hints_API
	 * @see https://wicg.github.io/ua-client-hints
	 */
	interface Navigator extends NavigatorUA {}
	interface WorkerNavigator extends NavigatorUA {}

	/**
	 * @see https://wicg.github.io/ua-client-hints/#navigatorua
	 */
	interface NavigatorUA {
		readonly userAgentData?: NavigatorUAData;
	}

	/**
	 * @see https://wicg.github.io/ua-client-hints/#dictdef-navigatoruabrandversion
	 */
  interface NavigatorUABrandVersion {
		readonly brand: string;
		readonly version: string;
	}

	type NavigatorUABrandVersions = Array<NavigatorUABrandVersion>;

	/**
	 * @see https://wicg.github.io/ua-client-hints/#dictdef-uadatavalues
	 */
	interface UADataValues {
    readonly architecture?: string;
    readonly bitness?: string;
    readonly brands?: NavigatorUABrandVersions;
		readonly fullVersionList?: NavigatorUABrandVersions;
    readonly mobile?: boolean;
    readonly model?: string;
    readonly platform?: string;
    readonly platformVersion?: string;
		readonly wow64?: boolean;
    /**
		 *  @deprecated in favour of fullVersionList
		 */
    readonly uaFullVersion?: string;
	}

	/**
	 * @see https://wicg.github.io/ua-client-hints/#dictdef-ualowentropyjson
	 */
	interface UALowEntropyJSON {
    readonly brands: NavigatorUABrandVersions;
    readonly mobile: boolean;
    readonly platform: string;
	}

	/**
	 * @see https://wicg.github.io/ua-client-hints/#navigatoruadata
	 */
	interface NavigatorUAData extends UALowEntropyJSON {
		readonly getHighEntropyValues: (hints: ReadonlyArray<string>) => Promise<UADataValues>;
		readonly toJSON: () => UALowEntropyJSON;
	}

	class NavigatorUAData {
		readonly brands: NavigatorUABrandVersions;
    readonly mobile: boolean;
    readonly platform: string;
		readonly getHighEntropyValues: (hints: ReadonlyArray<string>) => Promise<UADataValues>;
		readonly toJSON: () => UALowEntropyJSON;

		private constructor();
	}
}

export {}
