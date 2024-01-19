import { faker } from '@faker-js/faker';
import { onTest } from '@test/utils/onTest';
import { getInitials } from './getInitials';

describe('getInitials()', () => {
	let error: Error | null = null;
	let result: unknown = null;
	let index = 1;

	beforeEach(() => {
		try {
			result = onTest(index, {
				1: () =>
					getInitials(`${faker.person.firstName()} ${faker.person.lastName()}`),
				2: () =>
					getInitials(
						`${faker.person.firstName()} ${faker.person.middleName()} ${faker.person.lastName()}`,
					),
				3: () =>
					getInitials(
						`${faker.person.firstName()} ${faker.person.lastName()}-${faker.person.lastName()}`,
					),
				4: () => {
					const prefix = faker.helpers.arrayElement([
						'Mr.',
						'Ms.',
						'Mrs.',
						'Dr.',
					]);

					return getInitials(
						`${prefix} ${faker.person.firstName()} ${faker.person.lastName()}`,
					);
				},
				5: () => {
					const suffix = faker.helpers.arrayElement([
						'Jr.',
						'I',
						'II',
						'IV',
						'CPA',
					]);

					return getInitials(
						`${faker.person.firstName()} ${faker.person.lastName()} ${suffix}`,
					);
				},
				6: () => getInitials('X Æ A-12 Musk'),
				7: () => getInitials('X Æ A-12'),
				8: () => getInitials(faker.person.firstName()),
				9: () => getInitials(''),
				10: () => getInitials(),
			});
		} catch (thrown) {
			error = !(thrown instanceof Error) ? (thrown as Error) : new Error();
			console.error(thrown);
		}
	});

	afterEach(() => {
		error = null;
		result = null;

		index++;
	});

	it('should return two initials as a string given a full name with a surname and forename', () => {
		expect(index).toBe(1);
		expect(error).toBeNull();

		expect(result).toStrictEqual(expect.any(String));
		expect(result).toHaveLength(2);
	});

	it('should return two initials as a string given a full name with a surname, middle name, and forename', () => {
		expect(index).toBe(2);
		expect(error).toBeNull();

		expect(result).toStrictEqual(expect.any(String));
		expect(result).toHaveLength(2);
	});

	it('should return two initials as a string given a full name with a double-barreled surname and forename', () => {
		expect(index).toBe(3);
		expect(error).toBeNull();

		expect(result).toStrictEqual(expect.any(String));
		expect(result).toHaveLength(2);
	});

	it('should return two initials as a string given a full name with a prefix', () => {
		expect(index).toBe(4);
		expect(error).toBeNull();

		expect(result).toStrictEqual(expect.any(String));
		expect(result).toHaveLength(2);
	});

	it('should return two initials as a string given a full name with a suffix', () => {
		expect(index).toBe(5);
		expect(error).toBeNull();

		expect(result).toStrictEqual(expect.any(String));
		expect(result).toHaveLength(2);
	});

	it('should return two initials as a string given a full name with non-standard characters', () => {
		expect(index).toBe(6);
		expect(error).toBeNull();

		expect(result).toStrictEqual(expect.any(String));
		expect(result).toHaveLength(2);
	});

	it('should return two initials as a string given only a forename containing spaces', () => {
		expect(index).toBe(7);
		expect(error).toBeNull();

		expect(result).toStrictEqual(expect.any(String));
		expect(result).toHaveLength(2);
	});

	it('should return one initial as a string given only a forename', () => {
		expect(index).toBe(8);
		expect(error).toBeNull();

		expect(result).toStrictEqual(expect.any(String));
		expect(result).toHaveLength(1);
	});

	it('should return undefined given an empty string', () => {
		expect(index).toBe(9);
		expect(error).toBeNull();

		expect(result).toBeUndefined();
	});

	it('should return undefined given nothing', () => {
		expect(index).toBe(10);
		expect(error).toBeNull();

		expect(result).toBeUndefined();
	});
});
