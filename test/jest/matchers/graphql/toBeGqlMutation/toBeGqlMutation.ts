const TO_BE_GQL_MUTATION = 'toBeGqlMutation';

expect.extend({
	[TO_BE_GQL_MUTATION](received) {
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

		const isDocumentNode = (value: Record<string, unknown>) =>
			'kind' in value &&
			value.kind === 'Document' &&
			'definitions' in value &&
			value.definitions instanceof Array;

		if (!isDocumentNode(received)) {
			throw new Error(
				matcherErrorMessage(
					matcherHint(TO_BE_GQL_MUTATION, undefined, '', options),
					`${RECEIVED_COLOR(
						'received',
					)} value must be a valid GraphQL DocumentNode`,
					printWithType('Received', received, printReceived),
				),
			);
		}

		const { operation } = received.definitions[0];
		const expectedOperation = 'mutation';
		const pass = operation === expectedOperation;

		const message = (): string =>
			`${matcherHint(TO_BE_GQL_MUTATION, 'received', '', options)}\n\n` +
			`Expected operation: ${printExpected(expectedOperation)}\n` +
			`Received operation: ${printReceived(operation)}`;

		return { pass, message };
	},
});
