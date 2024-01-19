import { getCache, isTableCache } from '../../../../../../../modules';
import {
	atobSpy,
	btoaSpy,
	getItemMock,
	getItemSpy,
	tableCacheFixture,
} from '../../../../../../../../test';

describe('getCache()', (): void => {
	let name: string | null = null;
	let result: unknown = null;

	beforeEach((): void => {
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

	afterEach((): void => {
		name = null;
		result = null;
	});

	it('should use LocalStorage', (): void => {
		expect(window.localStorage.__proto__.getItem).toHaveBeenCalled();
	});

	it('should use an encoded key', (): void => {
		expect(window.btoa).toHaveBeenCalled();
	});

	it('should retrieve an encoded value', (): void => {
		expect(window.atob).toHaveBeenCalled();
	});

	it('should retrieve the current table cache', (): void => {
		expect(isTableCache(result)).toBe(true);
	});
});
