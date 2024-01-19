import { faker } from '@faker-js/faker';
import { context } from './context';
import { RenderState } from './randomState';
import { Props } from './types';

export type Mocks = Record<string, jest.Mock>;

export const props = ({
	state,
	...overrideProps
}: Record<string, unknown> = {}) =>
	({
		disabled: state === 'disabled' || state === 'readonly',
		indeterminate: faker.datatype.boolean(),
		value: 'foo',
		onChange: jest.fn(),
		setChecked: jest.fn(),
		setIndeterminate: jest.fn(),
		...overrideProps,
		_dependencies: {
			dispatchReactEvent: jest.fn(),
			setNativeInputValue: jest.fn(),
			useCheckboxContext: jest.fn(() => context(state as RenderState)),
			...(overrideProps._dependencies || {}),
		},
	} as Props);

/*
 * export const props = ({
 * 	state = randomState(),
 * 	...overrideProps
 * }: Record<string, unknown> = {}) => {
 * 	const mockDispatchReactEvent = jest.fn();
 * 	const mockSetNativeInputValue = jest.fn();
 * 	const mockOnChange = jest.fn();
 * 	const mockSetChecked = jest.fn();
 * 	const mockSetIndeterminate = jest.fn();
 */

/*
 * 	const mockUseCheckboxContext = jest.fn(() => ({
 * 		addToGroupValue: jest.fn(() => 'foo,bar,baz'),
 * 		groupValueIncludes: jest.fn((value: string) => value === 'foo'),
 * 		getGroupValue: jest.fn(() => (state === 'grouped' ? '' : null)),
 * 		removeFromGroupValue: jest.fn(() => 'bar,baz'),
 * 		setGroupValue: jest.fn(),
 * 	}));
 */

/*
 * 	const mocks = {
 * 		mockDispatchReactEvent,
 * 		mockSetNativeInputValue,
 * 		mockOnChange,
 * 		mockSetChecked,
 * 		mockSetIndeterminate,
 * 		mockUseCheckboxContext,
 * 	};
 */

/*
 * 	const props = {
 * 		disabled: state === 'disabled' || state === 'readonly',
 * 		indeterminate: faker.datatype.boolean(),
 * 		value: 'foo',
 * 		onChange: mockOnChange,
 * 		setChecked: mockSetChecked,
 * 		setIndeterminate: mockSetIndeterminate,
 * 		_dependencies: {
 * 			dispatchReactEvent: mockDispatchReactEvent,
 * 			setNativeInputValue: mockSetNativeInputValue,
 * 			useCheckboxContext: mockUseCheckboxContext,
 * 		},
 * 		...overrideProps,
 * 	};
 */

/*
 * 	return { props, mocks };
 * };
 */
