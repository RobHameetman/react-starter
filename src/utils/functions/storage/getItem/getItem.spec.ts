import { faker } from '@faker-js/faker';
import { getItemMock } from '@test/mocks';
import { atobSpy, btoaSpy, getItemSpy } from '@test/spies';
import { getItem } from './getItem';

describe('getItem()', () => {
	let result: unknown = null;
	let key: string | null = null;
	let value: string | null = null;

	beforeEach(() => {
		key = 'test';
		value = faker.datatype.string();

		getItemSpy();
		getItemMock(btoa(value));

		atobSpy();
		btoaSpy();

		result = getItem(key);
	});

	afterEach(() => {
		result = null;
		key = null;
		value = null;

		jest.restoreAllMocks();
	});

	it('should use LocalStorage', () => {
		expect(window.localStorage.__proto__.getItem).toHaveBeenCalled();
	});

	it('should retrieve the value for the given key', () => {
		expect(result).toBe(value);
	});

	it('should use an encrypted key', () => {
		expect(btoa).toHaveBeenCalledWith(String(key));
	});

	it('should return a decrypted value', () => {
		expect(atob).toHaveBeenCalled();
	});
});
