import { atobSpy, btoaSpy, getItemSpy } from '@test/spies';
import { getItemMock } from '@test/mocks/storage/getItemMock';
import { b64 } from '@test/utils/b64';
import { getFormCache } from './getFormCache';
import { isCachedForm } from '../../../types/CachedForm';
import { fakeCachedForm } from '../../../types/CachedForm/__test__';

describe('getFormCache()', () => {
	let name: string | null = null;
	let result: unknown = null;

	beforeEach(() => {
		atobSpy();
		btoaSpy();

		getItemSpy();

		getItemMock(b64(JSON.stringify(fakeCachedForm())));

		name = 'Contact Info';
		result = getFormCache(name);
	});

	afterEach(() => {
		name = null;
		result = null;
	});

	it('should use LocalStorage', () => {
		expect(window.localStorage.__proto__.getItem).toHaveBeenCalled();
	});

	it('should use an encoded key', () => {
		expect(window.btoa).toHaveBeenCalled();
	});

	it('should retrieve an encoded value', () => {
		expect(window.atob).toHaveBeenCalled();
	});

	it('should retrieve the current form cache', () => {
		expect(isCachedForm(result)).toBe(true);
	});
});
