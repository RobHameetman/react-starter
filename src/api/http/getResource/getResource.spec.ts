import { faker } from '@faker-js/faker';
import { getResource } from './getResource';

type Resource = Record<string, unknown>;

/**
 * @TODO - Import this from elsewhere.
 */
const isResource = (value: unknown): value is Resource => true;

/**
 * @TODO - Import this from elsewhere.
 */
const fakeResource = (resource: Record<string, unknown>): Resource => resource;

/**
 * We only need to test that the method is correct here because our type-checking
 * will ensure that `getResource()` cannot be called with a different method or with a
 * `'body'` property.
 */
describe('getResource()', () => {
	let result: unknown = null;
	let testId: string | null = null;
	let mockGetRequest: jest.Mock | null = null;

	beforeEach(async () => {
		testId = faker.string.uuid();

		mockGetRequest = jest.fn(() =>
			Promise.resolve(fakeResource({ id: testId })),
		);

		result = await getResource({
			id: testId,
			_dependencies: { getRequest: mockGetRequest },
		});
	});

	afterEach(() => {
		jest.resetAllMocks();

		result = null;
		testId = null;
		mockGetRequest = null;
	});

	it('should make a request for the correct resource at the correct endpoint', () => {
		expect(mockGetRequest).toBeCalledWith(
			expect.objectContaining({ at: `/resource/${testId}` }),
		);
	});

	it('should return a Resource with the corrrect ID', () => {
		expect(isResource(result)).toBe(true);
		expect(result).toBe(expect.objectContaining({ id: testId }));
	});
});
