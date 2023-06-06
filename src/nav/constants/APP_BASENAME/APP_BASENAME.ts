/**
 * Ensures the `path` begins with a leading `'/'` character and normalizes the
 * `publicPath` format for PR apps (e.g. `'/pr-123-myDopePr'`). This is used as
 * the value of the `basename` prop in `react-router`'s `<Router />` component.
 * It provides the base URL for all locations. If your app is served from a
 * sub-directory on your server, you’ll want to set this to the sub-directory.
 */
export const APP_BASENAME = '/';
