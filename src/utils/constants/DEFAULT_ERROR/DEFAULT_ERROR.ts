/**
 * The default error used when props are not provided to the {@link ErrorView}
 * component.
 */
export const DEFAULT_ERROR = new Error(
	`Service "${process.env.APP_NAME}" crashed`,
);
