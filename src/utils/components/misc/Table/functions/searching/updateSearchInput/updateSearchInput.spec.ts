import { faker } from '@faker-js/faker';
import { updateSearchInput } from './updateSearchInput';
import { fakeTableState } from '../../../state/TableState/__test__';

describe('updateSearchInput()', () => {
	let result: unknown = null;

	beforeEach(() => {
		result = updateSearchInput(faker.lorem.words(), fakeTableState());
	});

	afterEach(() => {
		result = null;
	});

	it.skip('should return the expected output', () => {
		expect(result).not.toBeNull();
	});
});
