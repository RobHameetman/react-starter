import React from 'react';
import { render } from '@testing-library/react';
import { SortOrder, SortType, TableProvider } from '../../../../../../modules';

describe('TableProvider', (): void => {
	let html: string | undefined;
	let error: Error | null = null;

	beforeEach((): void => {
		try {
			const { container } = render(
				<TableProvider
					name="Tesr Table"
					initialData={[]}
					state={{
						columns: 0,
						data: {
							buffer: null,
							displayedData: [],
							initialData: [jest.fn()],
							maxRows: 5,
							paginatedData: null,
						},
						features: {
							filterable: true,
							searchable: true,
							paginated: true,
							virtual: false,
						},
						filter: {
							filterBy: ['Sell'],
							searchBy: '',
							onFilter: jest.fn(),
							searchAgainst: jest.fn(),
						},
						loading: false,
						name: 'OpenOrders',
						sort: {
							active: SortType.DATE,
							direction: SortOrder.ASC,
							options: {
								[SortType.DATE]: {
									sortBy: ({ date }: Record<string, string>) => new Date(date),
									sortOrder: SortOrder.ASC,
								},
							},
						},
						pagination: {
							count: 1000,
							currentPage: 2,
							pageSize: 10,
						},
					}}
					setState={jest.fn()}
				/>,
			);

			html = container.innerHTML;
		} catch (err) {
			error = err;
		}
	});

	afterEach((): void => {
		html = undefined;
		error = null;
	});

	it.skip('should render', async (): Promise<void> => {
		expect(html).not.toBeNull();
		expect(error).toBeNull();
	});

	it.skip('should not regress', async (): Promise<void> => {
		expect(html).toMatchSnapshot();
	});
});
