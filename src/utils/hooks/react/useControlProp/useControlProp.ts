import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

/**
 * Use a prop externally and update the value of the prop internally even when
 * the external state is updated. Typically, React will not rerender a component
 * when props change. This hook allows you to use a prop as a controlled prop
 * which will trigger a rerender when the prop changes externally.
 *
 * @param prop - A prop provided to your component.
 *
 * @returns The element provided to `as` but type cast for use as a JSX element
 * in your component.
 */
export const useControlProp = <T>(prop: T) => {
	const [controlledProp, setControlledProp] = useState(prop);
	const renders = useRef(0);

	useEffect(() => {
		if (renders.current > 0) {
			setControlledProp(prop);
		}

		renders.current++;
	}, [prop]);

	return [controlledProp, setControlledProp] as [T, Dispatch<SetStateAction<T>>];
};
