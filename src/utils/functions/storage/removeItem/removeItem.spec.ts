import { btoaSpy, removeItemSpy } from '@@/spies';
import { removeItem } from './removeItem';

describe('removeItem()', () => {
	let key: string | null = null;

	beforeEach(() => {
		btoaSpy();
		removeItemSpy();

		key = 'key';

		removeItem(key);
	});

	afterEach(() => {
		key = null;
	});

	it('should use LocalStorage', () => {
		expect(window.localStorage.__proto__.removeItem).toHaveBeenCalled();
	});

	it('should use an encoded key', () => {
		expect(window.btoa).toHaveBeenCalledWith(String(key));
	});

	it('should delete the given item', () => {
		expect(
			window.localStorage.getItem(Buffer.from(String(key)).toString('base64')),
		).toBeNull();
	});
});
