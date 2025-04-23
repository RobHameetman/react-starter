import { getTableState, setTableState } from './TableState';

describe('getTableState()', () => {
	let result: unknown = null;

	beforeEach(() => {
		result = getTableState('test');
	});

	afterEach(() => {
		result = null;
	});

	it.skip('should return the expected output', () => {
		expect(result).not.toBeNull();
	});
});

describe('setTableState()', () => {
	let result: unknown = null;

	beforeEach(() => {
		/* @ts-expect-error - Argument of type '{}' is not assignable to parameter of type 'TableState'. */
		result = setTableState('test', {});
	});

	afterEach(() => {
		result = null;
	});

	it.skip('should return the expected output', () => {
		expect(result).not.toBeNull();
	});
});
