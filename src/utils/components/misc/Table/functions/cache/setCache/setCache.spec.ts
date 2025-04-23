import tableCacheFixture from '@@/fixtures/tableCacheFixture.json';
import { btoaSpy } from '@@/spies/encoding/btoaSpy';
import { setItemSpy } from '@@/spies/storage/setItemSpy';
import { TABLE_CACHE_KEY } from '../../../constants/TABLE_CACHE_KEY';
import { TableCache } from '../../../types/TableCache';
import { setCache } from './setCache';

describe('setCache()', () => {
	let _btoaSpy: jest.SpyInstance | null = null;
	let name: string | null = null;
	let result: unknown = null;

	beforeEach(() => {
		_btoaSpy = btoaSpy();
		setItemSpy();

		name = 'Order History';
		setCache(name, tableCacheFixture.tableCache as TableCache);

		result = window.localStorage.getItem(
			Buffer.from(`${TABLE_CACHE_KEY} ${name}`).toString('base64'),
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

	it('should set the current table cache', () => {
		expect(result).toBe(
			JSON.stringify(
				Buffer.from(JSON.stringify(tableCacheFixture.tableCache)).toString(
					'base64',
				),
			),
		);
	});
});
