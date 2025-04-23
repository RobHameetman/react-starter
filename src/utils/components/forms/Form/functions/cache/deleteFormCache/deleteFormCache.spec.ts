import { btoaSpy, removeItemSpy } from '@@/spies';
import { b64 } from '@@/utils/b64';
import { deleteFormCache } from './deleteFormCache';

describe('deleteFormCache()', () => {
	let name: string | null = null;

	beforeEach(() => {
		btoaSpy();
		removeItemSpy();

		name = 'Contact Info';

		deleteFormCache(name);
	});

	afterEach(() => {
		name = null;
	});

	it('should use LocalStorage', () => {
		expect(window.localStorage.__proto__.removeItem).toHaveBeenCalled();
	});

	it('should use an encoded key', () => {
		expect(window.btoa).toHaveBeenCalledWith('contact_info_form');
	});

	it('should delete the current cache', () => {
		expect(window.localStorage.getItem(b64('contact_info_form'))).toBeNull();
	});
});
