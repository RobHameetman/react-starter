import { faker } from '@faker-js/faker';
import { InteractionModality } from '@/utils/enums/InteractionModalities';
import { onTest } from '@test/utils/onTest';
import { isFocusVisible } from './isFocusVisible';

describe('isFocusVisible()', () => {
	let error: Error | null = null;
	let modality: InteractionModality | null = null;
	let result: unknown = null;
	let index = 0;

	beforeEach(() => {
		try {
			index++;

			onTest(index, {
				2: () => {
					modality = faker.helpers.arrayElement(['keyboard', 'virtual']);
				},
				3: () => {
					modality = 'pointer';
				},
			});

			const mockInteractionModality = jest.fn(() => ({
				getModality: jest.fn(() => modality),
				setModality: jest.fn(),
				resetModality: jest.fn(),
			}));

			result = isFocusVisible({
				_dependencies: {
					interactionModality: mockInteractionModality,
				},
			});
		} catch (thrown) {
			error = !(thrown instanceof Error) ? (thrown as Error) : new Error();
			console.error(thrown);
		}
	});

	afterEach(() => {
		error = null;
		modality = null;
		result = null;
	});

	it('should not throw an error', () => {
		expect(index).toBe(1);
		expect(error).toBeNull();
	});

	it('should return `true` when the current interaction modality is not "pointer"', () => {
		expect(index).toBe(2);
		expect(modality).not.toBe('pointer');
		expect(result).toBe(true);
	});

	it('should return `false` when the current interaction modality is "pointer"', () => {
		expect(index).toBe(3);
		expect(modality).toBe('pointer');
		expect(result).toBe(false);
	});
});
