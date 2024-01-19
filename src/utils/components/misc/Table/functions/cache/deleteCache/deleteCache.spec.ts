import { TABLE_CACHE_KEY, deleteCache } from '../../../../../../../modules';
import { btoaSpy, removeItemSpy } from '../../../../../../../../test';

describe('deleteCache', (): void => {
	let name: string | null = null;

	beforeEach((): void => {
		btoaSpy();
		removeItemSpy();

		name = 'Order History';

		deleteCache(name);
	});

	afterEach((): void => {
		name = null;
	});

	it('should use LocalStorage', (): void => {
		expect(window.localStorage.__proto__.removeItem).toHaveBeenCalled();
	});

	it('should use an encoded key', (): void => {
		expect(window.btoa).toHaveBeenCalled();
	});

	it('should delete the current cache', (): void => {
		expect(
			window.localStorage.getItem(
				Buffer.from(`${TABLE_CACHE_KEY} ${name}`).toString('base64'),
			),
		).toBeNull();
	});
});
