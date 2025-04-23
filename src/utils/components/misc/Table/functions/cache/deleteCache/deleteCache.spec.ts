import { btoaSpy } from '@@/spies/encoding/btoaSpy';
import { removeItemSpy } from '@@/spies/storage/removeItemSpy';
import { TABLE_CACHE_KEY } from '../../../constants/TABLE_CACHE_KEY';
import { deleteCache } from '../../cache/deleteCache';

describe('deleteCache', () => {
	let name: string | null = null;

	beforeEach(() => {
		btoaSpy();
		removeItemSpy();

		name = 'Order History';

		deleteCache(name);
	});

	afterEach(() => {
		name = null;
	});

	it('should use LocalStorage', () => {
		expect(window.localStorage.__proto__.removeItem).toHaveBeenCalled();
	});

	it('should use an encoded key', () => {
		expect(window.btoa).toHaveBeenCalled();
	});

	it('should delete the current cache', () => {
		expect(
			window.localStorage.getItem(
				Buffer.from(`${TABLE_CACHE_KEY} ${name}`).toString('base64'),
			),
		).toBeNull();
	});
});
