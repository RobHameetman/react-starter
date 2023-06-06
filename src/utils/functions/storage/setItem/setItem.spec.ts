import { faker } from '@faker-js/faker';
import { btoaSpy, setItemSpy } from '@test/spies';
import { setItem } from './setItem';

describe('setItem()', () => {
	let result: unknown = null;
	let key: string | null = null;
	let value: string | null = null;

	beforeEach(() => {
		key = 'test';
		value = faker.system.semver();

		btoaSpy();
		setItemSpy();

		setItem(key, value);

		result = atob(window.localStorage.getItem(btoa(key)) ?? '');
	});

	afterEach(() => {
		result = null;
		key = null;
		value = null;
	});

	it('should use LocalStorage', () => {
		expect(window.localStorage.__proto__.setItem).toHaveBeenCalled();
	});

	it('should set the provided value for the given key', () => {
		expect(result).toBe(value);
	});

	it('should set an encrypted value', () => {
		expect(btoa).toHaveBeenCalled();
	});
});
