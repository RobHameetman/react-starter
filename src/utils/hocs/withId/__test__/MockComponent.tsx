/* eslint-disable import/no-mutable-exports */

import { FC, useState } from 'react';

export interface MockComponentProps {
	id: string;
}

export let increment = () => {};
export let decrement = () => {};

export const MockComponent: FC<MockComponentProps> = ({ id }) => {
	const [count, setCount] = useState(0);

	increment = () => setCount((currentCount) => currentCount + 1);
	decrement = () => setCount((currentCount) => currentCount - 1);

	return (
		<div id={id} role="none">
			{count}
		</div>
	);
};
