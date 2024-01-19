import React from 'react';
import { renderHook } from '@testing-library/react';
import { isFunction } from '@app/utils/functions/check/js/core/isFunction';
import { mockCloneElement } from '@test/mocks/react/mockCloneElement';
import { mockUseLayoutEffect } from '@test/mocks/react/mockUseLayoutEffect';
import { usePropsWithChildren } from './usePropsWithChildren';
import { children } from './__test__';

describe('usePropsWithChildren()', () => {
	let expectedSize: string | null = null;
	let firstChildSize: string | null = null;
	let secondChildSize: string | null = null;
	let propsFromParent: Record<string, unknown> | null = null;

	beforeEach(() => {
		jest
			.spyOn(React, 'useLayoutEffect')
			.mockImplementation(mockUseLayoutEffect);

		jest.spyOn(React, 'cloneElement').mockImplementation(
			mockCloneElement(({ type, props }) => {
				const component = isFunction(type) ? type.name : (type as string);

				switch (component) {
					case 'FirstChild':
						firstChildSize = props.size;

						break;
					case 'SecondChild':
						secondChildSize = props.size;

						break;
					default:
						break;
				}
			}),
		);

		expectedSize = 'sm';
		propsFromParent = { size: expectedSize };

		renderHook(() => {
			/* @ts-expect-error - Type signatures don't match */
			usePropsWithChildren({ children, props: propsFromParent });
		});
	});

	afterEach(() => {
		expectedSize = null;
		firstChildSize = null;
		secondChildSize = null;
		propsFromParent = null;
	});

	it('should apply props from the parent component to all children', () => {
		expect(firstChildSize).toBe(expectedSize);
		expect(secondChildSize).toBe(expectedSize);
	});

	it('should trigger before the component is rendered', () => {
		expect(mockUseLayoutEffect).toHaveBeenCalled();
	});
});
