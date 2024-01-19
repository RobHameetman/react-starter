import { btoaSpy, setItemSpy } from '@test/spies';
import { b64 } from '@test/utils/b64';
import { setFormCache } from './setFormCache';
import { isCachedForm } from '../../../types/CachedForm';
import { fakeCachedForm } from '../../../types/CachedForm/__test__';

describe('setFormCache()', () => {
	let _btoaSpy: jest.SpyInstance | null = null;
	let name: string | null = null;
	let result: unknown = null;

	beforeEach(() => {
		_btoaSpy = btoaSpy();
		setItemSpy();

		name = 'Contact Info';
		setFormCache(name, fakeCachedForm());

		result = JSON.parse(
			atob(window.localStorage.getItem(b64('contact_info_form')) ?? b64('{}')),
		);
	});

	afterEach(() => {
		_btoaSpy?.mockReset();

		_btoaSpy = null;
		name = null;
		result = null;
	});

	it('should use LocalStorage', () => {
		expect(window.localStorage.__proto__.setItem).toHaveBeenCalled();
	});

	it('should use an encoded key and encode the state', () => {
		expect(window.btoa).toHaveBeenCalledTimes(2);
	});

	it('should set the current form cache', () => {
		expect(isCachedForm(result)).toBe(true);
	});
});
