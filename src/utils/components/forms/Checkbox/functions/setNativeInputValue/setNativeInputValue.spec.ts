import { setNativeInputValue } from './setNativeInputValue';

describe('setNativeInputValue()', () => {
	let $input: HTMLInputElement | null = null;
	let error: Error | null = null;
	let updatedValue: string | null = null;

	beforeEach(() => {
		try {
			$input = document.createElement('input');
			$input.value = 'initial value';

			document.body.appendChild($input);
			updatedValue = 'test';

			setNativeInputValue({
				target: $input,
				value: updatedValue,
			});
		} catch (thrown) {
			error = !(thrown instanceof Error) ? (thrown as Error) : new Error();
			console.error(thrown);
		}
	});

	afterEach(() => {
		if ($input) {
			document.body.removeChild($input);
		}

		$input = null;
		error = null;
		updatedValue = null;
	});

	it('should not throw an error', () => {
		expect(error).toBeNull();
	});

	it('should set the input value using the native setter', () => {
		expect($input?.value).toBe(updatedValue);
	});
});
