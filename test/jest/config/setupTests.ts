/**
 * `jest-dom` adds custom Jest matchers for asserting on DOM nodes.
 * This allows you to do things like:
 *
 * ```
 * expect(element).toHaveTextContent(/hello/i);
 * ```
 *
 * @see https://github.com/testing-library/jest-dom
 */
import '@testing-library/jest-dom/extend-expect';
import { configure } from '@testing-library/react';
import '../matchers';

configure({
	testIdAttribute: 'data-testid',
});
