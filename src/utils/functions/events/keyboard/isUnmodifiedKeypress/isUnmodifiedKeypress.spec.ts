import { faker } from '@faker-js/faker';
import { onTest } from '@test/utils/onTest';
import { fakeKeyboardEvent } from '@/utils/functions/check/react/isKeyboardEvent/__test__';
import { isUnmodifiedKeypress } from './isUnmodifiedKeypress';

describe('isUnmodifiedKeypress()', () => {
	let error: Error | null = null;
	let event: KeyboardEvent | null = null;
	let result: unknown = null;
	let index = 0;

	beforeEach(() => {
		try {
			index++;

			const modifierIsCurrentKey = faker.datatype.boolean();

			onTest(index, {
				1: () => {
					event = fakeKeyboardEvent();
				},
				2: () => {
					event = fakeKeyboardEvent({
						altKey: true,
						ctrlKey: false,
						metaKey: false,
						key: faker.string.alpha(1),
						shiftKey: false,
					});
				},
				3: () => {
					event = fakeKeyboardEvent({
						altKey: false,
						ctrlKey: !modifierIsCurrentKey,
						metaKey: false,
						key: modifierIsCurrentKey ? 'Control' : faker.string.alpha(1),
						shiftKey: false,
					});
				},
				4: () => {
					event = fakeKeyboardEvent({
						altKey: false,
						ctrlKey: false,
						metaKey: !modifierIsCurrentKey,
						key: modifierIsCurrentKey ? 'Meta' : faker.string.alpha(1),
						shiftKey: false,
					});
				},
				5: () => {
					event = fakeKeyboardEvent({
						altKey: false,
						ctrlKey: false,
						metaKey: false,
						key: 'Shift',
						shiftKey: false,
					});
				},
				6: () => {
					event = fakeKeyboardEvent({
						altKey: false,
						ctrlKey: false,
						metaKey: false,
						key: faker.string.alpha(1),
						shiftKey: true,
					});
				},
				7: () => {
					event = fakeKeyboardEvent({
						altKey: false,
						ctrlKey: false,
						metaKey: false,
						key: faker.string.alpha(1),
						shiftKey: false,
					});
				},
			});

			result = isUnmodifiedKeypress(event as KeyboardEvent);
		} catch (thrown) {
			error = !(thrown instanceof Error) ? (thrown as Error) : new Error();
			console.error(thrown);
		}
	});

	afterEach(() => {
		event = null;
		result = null;
		error = null;
	});

	it('should not throw an error', () => {
		expect(index).toBe(1);
		expect(error).toBeNull();
	});

	it('should return `false` given a KeyboardEvent with a "alt" key pressed', () => {
		expect(index).toBe(2);
		expect(result).toBe(false);
	});

	it('should return `false` given a KeyboardEvent with a "control" key pressed', () => {
		expect(index).toBe(3);
		expect(result).toBe(false);
	});

	it('should return `false` given a KeyboardEvent with a "meta" key pressed', () => {
		expect(index).toBe(4);
		expect(result).toBe(false);
	});

	it('should return `false` given a KeyboardEvent when "shift" is the current key being pressed', () => {
		expect(index).toBe(5);
		expect(result).toBe(false);
	});

	it('should return `true` given a KeyboardEvent when "shift" is not the current key being pressed', () => {
		expect(index).toBe(6);
		expect(result).toBe(true);
	});

	it('should return `true` given a KeyboardEvent when no modifier key is being pressed', () => {
		expect(index).toBe(7);
		expect(result).toBe(true);
	});
});
