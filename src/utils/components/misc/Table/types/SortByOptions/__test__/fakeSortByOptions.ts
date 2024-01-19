import { faker } from '@faker-js/faker';
import { SortByOptions } from '../SortByOptions';
import { SORT_TYPES } from '../../../enums/SortType';
import { fakeSortOption } from '../../SortOption/__test__';

export const fakeSortByOptions = ({
	...overrideProps
}: Record<string, unknown> = {}) => {
	const keys = faker.helpers.arrayElements(SORT_TYPES);

	return {
		...keys.reduce(
			(opts, key) => ({
				...opts,
				[key]: fakeSortOption(),
			}),
			{},
		),
		...overrideProps,
	} as SortByOptions;
};
