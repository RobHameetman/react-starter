const TO_EQUAL_ZERO = 'toEqualZero';

/**
 * Jest uses `Object.is()` for equality checking, which distinguishes 0 from -0,
 * which can cause false negatives (literally!) when we try to use `.toBe(0)` or
 * `.toEqual(0)`.
 *
 * @see https://github.com/jasmine/jasmine/issues/496
 */
expect.extend({
	[TO_EQUAL_ZERO](received) {
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

		if (!(typeof received === 'number')) {
			throw new Error(
				matcherErrorMessage(
					matcherHint(TO_EQUAL_ZERO, undefined, '', options),
					/* eslint-disable-next-line new-cap */
					`${RECEIVED_COLOR('received')} value must be a number`,
					printWithType('Received', received, printReceived),
				),
			);
		}

		const pass = received === 0;

		const message = (): string =>
			`${matcherHint(TO_EQUAL_ZERO, 'received', '', options)}\n\n` +
			`Expected ${printReceived(received)}${
				pass ? '' : ' not'
			} to equal ${printExpected(0)}\n`;

		return { pass, message };
	},
});
