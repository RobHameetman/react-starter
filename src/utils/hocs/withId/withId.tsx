import { $FC, ReactNode } from 'react';
import { uniqueId } from '@app/utils/functions/misc/uniqueId';
import type { CC } from '@app/utils/types/react/CC';

/**
 * Type aliases used below to infer the prop types of a component or compound
 * component.
 */
type HasId<T> = T & { id: string };
type PropsOfFC<T> = T extends $FC<infer P> ? P : never;
type PropsOfCC<T> = T extends CC<unknown, infer P> ? P : never;
type PropsOf<T> = T extends CC<unknown, unknown> ? PropsOfCC<T> : PropsOfFC<T>;

/**
 * This HOC injects a stable ID into a component if one is not provided. This
 * is useful for certain form components where the ID is optional. For example,
 * the `<Checkbox />` and `<Radio />` components, as well as their corresponding
 * group components, take an optional `id`, which is used as the default `name`,
 * which is used as the default `value` when the component does not have any
 * children. If neither `id` or `name` or `value` are provided and the component
 * has no children, simply calling `uniqueId()` will not work, as the ID will
 * change on every render which could lead to an infinite-render loop. This HOC
 * solves that problem by creating a unique ID on the first render and then
 * using that ID for all subsequent renders.
 *
 * @typeParam C - A component of type `$FC` or `CC`.
 *
 * @param Component - A component which will be injected with a stable ID if one
 * is not provided.
 *
 * @returns A new component with a stable ID.
 */
export const withId = <C,>(Component: $FC<HasId<PropsOf<C>>>) => {
	/* @ts-expect-error - Properties do not exist on type `unknown` */
	return (({ children, id, ...props }: PropsOf<C>) => {
		const _id = id || uniqueId();

		return (
			<Component id={_id} {...props}>
				{children as ReactNode}
			</Component>
		);
	}) as C;
};
