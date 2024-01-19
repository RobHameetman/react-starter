import { getTableState, setTableState } from './TableState';

describe('getTableState()', (): void => {
	let result: unknown = null;

	beforeEach((): void => {
		result = getTableState('test');
	});

	afterEach((): void => {
		result = null;
	});

	it.skip('should return the expected output', (): void => {
		expect(result).not.toBeNull();
	});
});

describe('setTableState()', (): void => {
	let result: unknown = null;

	beforeEach((): void => {
		result = setTableState('test', {});
	});

	afterEach((): void => {
		result = null;
	});

	it.skip('should return the expected output', (): void => {
		expect(result).not.toBeNull();
	});
});
