import { faker } from '@faker-js/faker';
import { fakeTableState } from '../../../state/TableState/__test__';
import { setPageSize } from './setPageSize';

describe('setPageSize()', () => {
	let result: unknown = null;

	beforeEach(() => {
		result = setPageSize(
			faker.number.int({ min: 1, max: 500 }),
			fakeTableState(),
		);
	});

	afterEach(() => {
		result = null;
	});

	it.skip('should return the expected output', () => {
		expect(result).not.toBeNull();
	});
});
