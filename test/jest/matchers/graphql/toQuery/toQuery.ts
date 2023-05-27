const TO_QUERY = 'toQuery';

expect.extend({
	[TO_QUERY](received, expected) {
		const {
			EXPECTED_COLOR,
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

		const isDocumentNode = (value: Record<string, unknown>) =>
			'kind' in value &&
			value.kind === 'Document' &&
			'definitions' in value &&
			value.definitions instanceof Array;

		if (!(typeof expected === 'string')) {
			throw new Error(
				matcherErrorMessage(
					matcherHint(TO_QUERY, undefined, '', options),
					`${EXPECTED_COLOR('expected')} value must be a string`,
					printWithType('Received', expected, printExpected),
				),
			);
		}

		if (!isDocumentNode(received)) {
			throw new Error(
				matcherErrorMessage(
					matcherHint(TO_QUERY, undefined, '', options),
					`${RECEIVED_COLOR(
						'received',
					)} value must be a valid GraphQL DocumentNode`,
					printWithType('Received', received, printReceived),
				),
			);
		}

		const { value: name } =
			received.definitions[0].selectionSet.selections[0].name;

		const pass = name === expected;

		const message = (): string =>
			`${matcherHint(TO_QUERY, 'received', '', options)}\n\n` +
			`Expected ${printReceived(received)}${
				pass ? '' : ' not'
			} to equal ${printExpected(expected)}\n`;

		return { pass, message };
	},
});
