import type { MutableRefObject } from 'react';

export const fakeMutableRefObject = <T = null>(
	/* @ts-expect-error - 'T' could be instantiated with an arbitrary type which could be unrelated to 'null'. */
	value: T = null,
	invalid = false,
) => {
	const ref: Partial<MutableRefObject<T | null>> = {
		current: value,
	};

	if (invalid) {
		delete ref.current;
	}

	return ref;
};
