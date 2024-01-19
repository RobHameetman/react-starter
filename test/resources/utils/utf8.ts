/**
 * Use this when testing caching functions which need to test whether or not
 * `atob()` is called. This will allow you to encode something without using
 * this function yourself and potentially skewing test results.
 */
export const utf8 = (str: string) => Buffer.from(str).toString('utf-8');
