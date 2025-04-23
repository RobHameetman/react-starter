import { faker } from '@faker-js/faker';
import { mockRoute } from '@@/utils';
import { getSubdomain } from './getSubdomain';

describe('getSubdomain()', () => {
	describe('given no subdomain or www', () => {
		beforeEach(() => {
			mockRoute(
				`https://${faker.datatype.boolean() ? 'www.' : ''}{{hostname}}/`,
			);
		});

		it('should return undefined', () => {
			expect(getSubdomain()).toBeUndefined();
		});
	});

	describe('given a project subdomain', () => {
		beforeEach(() => {
			mockRoute('https://{{subdomain}}.{{hostname}}/');
		});

		it('should return the project subdomain', () => {
			expect(getSubdomain()).toBe('{{subdomain}}');
		});
	});
});
