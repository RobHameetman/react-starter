import { InteractionModality } from '@app/utils/enums/InteractionModalities';
import { randomInteractionModality } from '@app/utils/enums/InteractionModalities/__test__';
import { Func } from '@app/utils/types/misc/Func';
import { onTest } from '@test/utils/onTest';
import { interactionModality } from './interactionModality';

describe('interactionModality()', () => {
	let error: Error | null = null;
	let expectedModality: InteractionModality | null = null;
	let getModality: unknown = null;
	let setModality: unknown = null;
	let resetModality: unknown = null;
	let index = 0;

	beforeAll(() => {
		expectedModality = randomInteractionModality();
	});

	beforeEach(() => {
		try {
			index++;

			({ getModality, setModality, resetModality } = interactionModality());

			onTest(index, {
				3: () => {
					(setModality as Func)(expectedModality);
				},
				5: () => {
					(resetModality as Func)();
				},
			});
		} catch (thrown) {
			error = !(thrown instanceof Error) ? (thrown as Error) : new Error();
			console.error(thrown);
		}
	});

	afterEach(() => {
		jest.restoreAllMocks();

		getModality = null;
		setModality = null;
		resetModality = null;
		error = null;
	});

	afterAll(() => {
		expectedModality = null;
	});

	it('should not throw an error', () => {
		expect(index).toBe(1);
		expect(error).toBeNull();
	});

	it('should return a set of functions for getting and setting the current interaction modality', () => {
		expect(index).toBe(2);

		expect(getModality).toStrictEqual(expect.any(Function));
		expect(setModality).toStrictEqual(expect.any(Function));
		expect(resetModality).toStrictEqual(expect.any(Function));
	});

	it('should set the current interaction modality when "setModality()" is called', () => {
		expect(index).toBe(3);

		expect((getModality as Func)()).toBe(expectedModality);
	});

	it('should get the current interaction modality when "getModality()" is called', () => {
		expect(index).toBe(4);

		expect((getModality as Func)()).toBe(expectedModality);
	});

	it('should reset the current interaction modality when "resetModality()" is called', () => {
		expect(index).toBe(5);

		expect((getModality as Func)()).toBeNull();
	});
});
