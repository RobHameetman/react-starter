/**
 * Use this when testing caching functions which need to test whether or not
 * `btoa()` is called. This will allow you to encode something without using
 * this function yourself and potentially skewing test results.
 */
export const b64 = (str: string) => Buffer.from(str).toString('base64');
