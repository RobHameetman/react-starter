import tableCacheFixture from '@@/fixtures/tableCacheFixture.json';
import { getItemMock } from '@@/mocks/storage/getItemMock';
import { atobSpy } from '@@/spies/encoding/atobSpy';
import { btoaSpy } from '@@/spies/encoding/btoaSpy';
import { getItemSpy } from '@@/spies/storage/getItemSpy';
import { isTableCache } from './../../../types/TableCache';
import { getCache } from './getCache';

describe('getCache()', () => {
	let name: string | null = null;
	let result: unknown = null;

	beforeEach(() => {
		atobSpy();
		btoaSpy();

		getItemSpy();

		getItemMock(
			JSON.stringify(
				Buffer.from(JSON.stringify(tableCacheFixture.tableCache)).toString(
					'base64',
				),
			),
		);

		name = 'Order History';
		result = getCache(name);
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

	it('should retrieve the current table cache', () => {
		expect(isTableCache(result)).toBe(true);
	});
});
