import { render } from '@testing-library/react';
import { SortOrder } from '../../enums/SortOrder';
import { SortType } from '../../enums/SortType';
import { TableProvider } from './TableProvider';

describe('TableProvider', () => {
	let html: string | undefined;
	let error: Error | null = null;

	beforeEach(() => {
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
									/* @ts-expect-error - Type 'unknown' is not assignable to type 'Record<string, string>'. */
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
			error = err as Error;
		}
	});

	afterEach(() => {
		html = undefined;
		error = null;
	});

	it.skip('should render', async () => {
		expect(html).not.toBeNull();
		expect(error).toBeNull();
	});

	it.skip('should not regress', async () => {
		expect(html).toMatchSnapshot();
	});
});
