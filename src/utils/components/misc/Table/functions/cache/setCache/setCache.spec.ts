import {
	TABLE_CACHE_KEY,
	TableCache,
	setCache,
} from '../../../../../../../modules';
import {
	btoaSpy,
	setItemSpy,
	tableCacheFixture,
} from '../../../../../../../../test';

describe('setCache', (): void => {
	let _btoaSpy: jest.SpyInstance | null = null;
	let name: string | null = null;
	let result: unknown = null;

	beforeEach((): void => {
		_btoaSpy = btoaSpy();
		setItemSpy();

		name = 'Order History';
		setCache(name, tableCacheFixture.tableCache as TableCache);

		result = window.localStorage.getItem(
			Buffer.from(`${TABLE_CACHE_KEY} ${name}`).toString('base64'),
		);
	});

	afterEach((): void => {
		_btoaSpy?.mockReset();

		_btoaSpy = null;
		name = null;
		result = null;
	});

	it('should use LocalStorage', (): void => {
		expect(window.localStorage.__proto__.setItem).toHaveBeenCalled();
	});

	it('should use an encoded key and encode the state', (): void => {
		expect(window.btoa).toHaveBeenCalledTimes(2);
	});

	it('should set the current table cache', (): void => {
		expect(result).toBe(
			JSON.stringify(
				Buffer.from(JSON.stringify(tableCacheFixture.tableCache)).toString(
					'base64',
				),
			),
		);
	});
});
