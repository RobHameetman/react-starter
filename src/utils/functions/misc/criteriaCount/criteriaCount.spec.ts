import { faker } from '@faker-js/faker';
import { criteriaCount } from './criteriaCount';

describe('criteriaCount()', () => {
	let error: Error | null = null;
	let expected: number | null = null;
	let result: unknown = null;

	beforeEach(() => {
		const criteria = Array.from(
			{ length: faker.number.int({ min: 0, max: 20 }) },
			() => faker.datatype.boolean(),
		);

		expected = criteria.filter((c) => c === false).length;

		try {
			result = criteriaCount(criteria);
		} catch (thrown) {
			error = !(thrown instanceof Error) ? (thrown as Error) : new Error();
			console.error(thrown);
		}
	});

	afterEach(() => {
		jest.restoreAllMocks();

		error = null;
		expected = null;
		result = null;
	});

	it('should not throw an error', () => {
		expect(error).toBeNull();
	});

	it('should return the number of items in the array which are true given a non-empty array of valid criteria', () => {
		expect(result).toBe(expected);
	});
});
