/**
 * The format used to override the value of the `<title />` tag in the
 * `<head />` of the HTML document of the current view. The format is determined
 * by the `<DocumentTitle />` component provided by Recess, which uses
 * `react-helmet` under the hood, which itself uses {@link String.replace()}.
 *
 * For more details about template format:
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#specifying_a_string_as_the_replacement
 */
export const DOCUMENT_TITLE_TEMPLATE = `%s | ${
	process.env.APP_NAME || 'MyService'
}`;
