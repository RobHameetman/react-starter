const TO_HAVE_TAB_INDEX = 'toHaveTabIndex';

/**
 * Jest uses `Object.is()` for equality checking, which distinguishes 0 from -0,
 * which can cause false negatives (literally!) when we try to use `.toBe(0)` or
 * `.toEqual(0)`.
 *
 * @see https://github.com/jasmine/jasmine/issues/496
 */
expect.extend({
	[TO_HAVE_TAB_INDEX](received, expected) {
		const {
			RECEIVED_COLOR,
			matcherErrorMessage,
			matcherHint,
			printExpected,
			printReceived,
			printWithType,
		} = this.utils;

		const options = {
			isNot: this.isNot,
			promise: this.promise,
		};

		if (!(received instanceof HTMLElement)) {
			throw new Error(
				matcherErrorMessage(
					matcherHint(TO_HAVE_TAB_INDEX, undefined, '', options),
					/* eslint-disable-next-line new-cap */
					`${RECEIVED_COLOR('received')} value must be an HTMLElement`,
					printWithType('Recieved', received, printReceived),
				),
			);
		}

		if (!(typeof expected === 'number')) {
			throw new Error(
				matcherErrorMessage(
					matcherHint(TO_HAVE_TAB_INDEX, undefined, '', options),
					/* eslint-disable-next-line new-cap */
					`${RECEIVED_COLOR('expected')} value must be a number`,
					printWithType('Expected', expected, printReceived),
				),
			);
		}

		const receivedTabIndex = received.getAttribute('tabindex');

		const pass =
			receivedTabIndex !== null && String(expected) === receivedTabIndex;

		const message = (): string =>
			`${matcherHint(TO_HAVE_TAB_INDEX, 'received', '', options)}\n\n` +
			`Expected ${printReceived(receivedTabIndex)}${
				pass ? '' : ' not'
			} to have a tab index of ${printExpected(expected)}\n`;

		return { pass, message };
	},
});
