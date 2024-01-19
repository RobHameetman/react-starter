/* eslint-disable prefer-const */

import type { Dispatch, SetStateAction } from 'react';
import { RenderHookResult, act, renderHook } from '@testing-library/react';
import { useControlProp } from './useControlProp';

type Result = [string, Dispatch<SetStateAction<string>>];
type Props = Record<string, string>;

let external = true;

describe('useControlProp()', () => {
	let initialResult: unknown = null;
	let result: RenderHookResult<Result, Props>['result'] | null = null;

	beforeEach(() => {
		let rerender: (props?: { prop: string }) => void;

		({
			result,
			rerender,
		} = renderHook(({ prop }) => useControlProp(prop), {
			initialProps: { prop: 'initial' },
		}));

		initialResult = result.current[0];

		if (external) {
			rerender({ prop: 'updatedByPropChange' });
			external = false;
		} else {
			/* @ts-expect-error - 'result' is possibly 'null'. */
			act(() => result.current[1]('updatedByStateChange'));
		}
	});

	afterEach(() => {
		initialResult = null;
		result = null;
	});

	it('should update the internal state when the external prop changes', () => {
		expect(initialResult).toBe('initial');
		expect(((result ?? {}).current || [])[0]).toBe('updatedByPropChange');
	});

	it('should update the internal state when the setter function is invoked', () => {
		expect(initialResult).toBe('initial');
		expect(((result ?? {}).current || [])[0]).toBe('updatedByStateChange');
	});
});
