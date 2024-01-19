/* eslint-disable @typescript-eslint/no-empty-function */

/**
 * A no-op function used to reduce bloat from conditional logic in cases where
 * functional arguments and event handler props are optional.
 */
export const noop = (..._args: ReadonlyArray<unknown>) => {};
