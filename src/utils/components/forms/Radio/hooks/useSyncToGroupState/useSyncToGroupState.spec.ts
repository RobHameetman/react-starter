import { useEffect } from 'react';
import { renderHook } from '@testing-library/react';
import { onTest } from '@@/utils/onTest';
import { useSyncToGroupState } from './useSyncToGroupState';
import { Props } from './__test__';

jest.mock('react', () => ({
	...jest.requireActual('react'),
	useEffect: jest.fn((callback) => callback()),
}));

describe('useSyncToGroupState()', () => {
	let currentGroupValue: string | null = null;
	let error: Error | null = null;
	let mockAddToGroupValue: jest.Mock | null = null;
	let value: string | null = null;
	let index = 0;

	beforeEach(() => {
		index++;

		try {
			value = 'bar';
			currentGroupValue = 'foo';
			mockAddToGroupValue = jest.fn(() => `${currentGroupValue},${value}`);

			onTest(index, {
				/**
				 * should not throw an error
				 */
				1: () => {
					const props = {
						checked: true,
						disabled: false,
						indeterminate: false,
						value,
						_dependencies: {
							useCheckboxContext: jest.fn(() => ({
								addToGroupValue: mockAddToGroupValue,
								setGroupValue: jest.fn((callback) =>
									callback(currentGroupValue),
								),
							})),
						},
					};

					renderHook(
						(initialProps: Props) => useSyncToGroupState(initialProps),
						/* @ts-expect-error - "value" is not `null` */
						{ initialProps: props },
					);
				},
				/**
				 * should not throw an error
				 */
				2: () => {
					const props = {
						checked: true,
						disabled: false,
						indeterminate: false,
						value,
						_dependencies: {
							useCheckboxContext: jest.fn(() => ({
								addToGroupValue: mockAddToGroupValue,
								setGroupValue: jest.fn((callback) =>
									callback(currentGroupValue),
								),
							})),
						},
					};

					renderHook(
						(initialProps: Props) => useSyncToGroupState(initialProps),
						/* @ts-expect-error - "value" is not `null` */
						{ initialProps: props },
					);
				},
				/**
				 * should add the checkbox value to the group value when the checkbox is checked given a checkbox which is not indeterminate or disabled
				 */
				3: () => {
					const props = {
						checked: true,
						disabled: false,
						indeterminate: false,
						value,
						_dependencies: {
							useCheckboxContext: jest.fn(() => ({
								addToGroupValue: mockAddToGroupValue,
								setGroupValue: jest.fn((callback) =>
									callback(currentGroupValue),
								),
							})),
						},
					};

					renderHook(
						(initialProps: Props) => useSyncToGroupState(initialProps),
						/* @ts-expect-error - "value" is not `null` */
						{ initialProps: props },
					);
				},
				/**
				 * should not add the checkbox value to the group value when the checkbox is not checked given a checkbox which is not indeterminate or disabled
				 */
				4: () => {
					const props = {
						checked: false,
						disabled: false,
						indeterminate: false,
						value,
						_dependencies: {
							useCheckboxContext: jest.fn(() => ({
								addToGroupValue: mockAddToGroupValue,
								setGroupValue: jest.fn((callback) =>
									callback(currentGroupValue),
								),
							})),
						},
					};

					renderHook(
						(initialProps: Props) => useSyncToGroupState(initialProps),
						/* @ts-expect-error - "value" is not `null` */
						{ initialProps: props },
					);
				},
				/**
				 * should not add the checkbox value to the group value when the checkbox is checked given a checkbox which is indeterminate
				 */
				5: () => {
					const props = {
						checked: true,
						disabled: false,
						indeterminate: true,
						value,
						_dependencies: {
							useCheckboxContext: jest.fn(() => ({
								addToGroupValue: mockAddToGroupValue,
								setGroupValue: jest.fn((callback) =>
									callback(currentGroupValue),
								),
							})),
						},
					};

					renderHook(
						(initialProps: Props) => useSyncToGroupState(initialProps),
						/* @ts-expect-error - "value" is not `null` */
						{ initialProps: props },
					);
				},
				/**
				 * should not add the checkbox value to the group value when the checkbox is not checked given a checkbox which is indeterminate
				 */
				6: () => {
					const props = {
						checked: false,
						disabled: false,
						indeterminate: true,
						value,
						_dependencies: {
							useCheckboxContext: jest.fn(() => ({
								addToGroupValue: mockAddToGroupValue,
								setGroupValue: jest.fn((callback) =>
									callback(currentGroupValue),
								),
							})),
						},
					};

					renderHook(
						(initialProps: Props) => useSyncToGroupState(initialProps),
						/* @ts-expect-error - "value" is not `null` */
						{ initialProps: props },
					);
				},
				/**
				 * should not add the checkbox value to the group value when the checkbox is checked given a checkbox which is disabled
				 */
				7: () => {
					const props = {
						checked: true,
						disabled: true,
						indeterminate: false,
						value,
						_dependencies: {
							useCheckboxContext: jest.fn(() => ({
								addToGroupValue: mockAddToGroupValue,
								setGroupValue: jest.fn((callback) =>
									callback(currentGroupValue),
								),
							})),
						},
					};

					renderHook(
						(initialProps: Props) => useSyncToGroupState(initialProps),
						/* @ts-expect-error - "value" is not `null` */
						{ initialProps: props },
					);
				},
				/**
				 * should not add the checkbox value to the group value when the checkbox is not checked given a checkbox which is disabled
				 */
				8: () => {
					const props = {
						checked: false,
						disabled: true,
						indeterminate: false,
						value,
						_dependencies: {
							useCheckboxContext: jest.fn(() => ({
								addToGroupValue: mockAddToGroupValue,
								setGroupValue: jest.fn((callback) =>
									callback(currentGroupValue),
								),
							})),
						},
					};

					renderHook(
						(initialProps: Props) => useSyncToGroupState(initialProps),
						/* @ts-expect-error - "value" is not `null` */
						{ initialProps: props },
					);
				},
			});
		} catch (thrown) {
			error = !(thrown instanceof Error) ? (thrown as Error) : new Error();
		}
	});

	afterAll(() => {
		jest.restoreAllMocks();
	});

	afterEach(() => {
		mockAddToGroupValue?.mockReset();

		currentGroupValue = null;
		error = null;
		mockAddToGroupValue = null;
		value = null;
	});

	it('should not throw an error', () => {
		expect(index).toBe(1);
		expect(error).toBeNull();
	});

	it('should use "useEffect()"', () => {
		expect(index).toBe(2);
		expect(error).toBeNull();

		expect(useEffect).toBeCalled();
	});

	it('should add the checkbox value to the group value when the checkbox is checked given a checkbox which is not indeterminate or disabled', () => {
		expect(index).toBe(3);
		expect(error).toBeNull();

		expect(mockAddToGroupValue).toBeCalledWith(value, currentGroupValue);
	});

	it('should not add the checkbox value to the group value when the checkbox is not checked given a checkbox which is not indeterminate or disabled', () => {
		expect(index).toBe(4);
		expect(error).toBeNull();

		expect(mockAddToGroupValue).not.toBeCalled();
	});

	it('should not add the checkbox value to the group value when the checkbox is checked given a checkbox which is indeterminate', () => {
		expect(index).toBe(5);
		expect(error).toBeNull();

		expect(mockAddToGroupValue).not.toBeCalled();
	});

	it('should not add the checkbox value to the group value when the checkbox is not checked given a checkbox which is indeterminate', () => {
		expect(index).toBe(6);
		expect(error).toBeNull();

		expect(mockAddToGroupValue).not.toBeCalled();
	});

	it('should not add the checkbox value to the group value when the checkbox is checked given a checkbox which is disabled', () => {
		expect(index).toBe(7);
		expect(error).toBeNull();

		expect(mockAddToGroupValue).not.toBeCalled();
	});

	it('should not add the checkbox value to the group value when the checkbox is not checked given a checkbox which is disabled', () => {
		expect(index).toBe(8);
		expect(error).toBeNull();

		expect(mockAddToGroupValue).not.toBeCalled();
	});
});
