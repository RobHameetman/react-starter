const TO_CALL_ZENDESK = 'toCallZendesk';
const PRINT_LIMIT = 3;

expect.extend({
	[TO_CALL_ZENDESK](received) {
		const {
			DIM_COLOR,
			RECEIVED_COLOR,
			iterableEquality,
			matcherErrorMessage,
			matcherHint,
			printExpected,
			printReceived,
			printWithType,
			stringify,
		} = this.utils;

		const options = {
			isNot: this.isNot,
			promise: this.promise,
		};

		const isMockOrSpy = (value: unknown) => {
			return (
				value &&
				(value as Record<string, unknown>)._isMockFunction === true &&
				typeof (value as Record<string, unknown>).mock === 'object'
			);
		};

		const printReceivedArgs = (
			receivedArgs: Array<unknown>,
			expected?: Array<unknown>,
		): string =>
			receivedArgs.length === 0
				? 'called with 0 arguments'
				: receivedArgs
						.map((arg, index) =>
							Array.isArray(expected) &&
							index < expected.length &&
							this.equals(expected, received, [iterableEquality])
								? DIM_COLOR(stringify(arg))
								: printReceived(arg),
						)
						.join(', ');

		const receivedName = (name = 'spy') => (received ? name : 'window.zE');
		const mockOrSpy = received || window.zE;

		if (!isMockOrSpy(mockOrSpy)) {
			throw new Error(
				matcherErrorMessage(
					matcherHint(TO_CALL_ZENDESK, undefined, '', options),
					`${RECEIVED_COLOR(
						receivedName('received'),
					)} value must be a mock or spy function`,
					printWithType('Received', received, printReceived),
				),
			);
		}

		const calls: Array<Array<string>> = mockOrSpy.mock.calls;
		const count = calls.length;
		const pass = count > 0;

		const message = (): string =>
			`${matcherHint(TO_CALL_ZENDESK, receivedName(), '', options)}\n\n` +
			`Expected number of calls: ${pass ? '' : '>= '}${printExpected(
				pass ? 0 : 1,
			)}\n` +
			`Received number of calls: ${pass ? '' : '   '}${printReceived(count)}` +
			`${
				pass
					? `\n\n${calls
							.reduce<Array<string>>((lines, args, i) => {
								return lines.length < PRINT_LIMIT
									? [...lines, `${i + 1}: ${printReceivedArgs(args)}`]
									: lines;
							}, [])
							.join('\n')}`
					: ''
			}`;

		return { pass, message };
	},
});
