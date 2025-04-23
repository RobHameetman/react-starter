import * as React from 'react';

declare module 'react' {
	export interface $FunctionComponent<P = {}, R = HTMLElement> {
		(props: PropsWithChildren<P & HTMLAttributes<R>>, context?: unknown): ReturnType<FunctionComponent<P & HTMLAttributes<R>>>;
		/**
		 * Note that we have to use key reference types here instead of simply
		 * extending the {@link FunctionComponent} type because doing so causes the
		 * `children` prop to be improperly typed as a union type.
		 */
		propTypes?: FunctionComponent<P & HTMLAttributes<R>>['propTypes'];
		contextTypes?: FunctionComponent<P & HTMLAttributes<R>>['contextTypes'];
		defaultProps?: FunctionComponent<P & HTMLAttributes<R>>['defaultProps'];
		displayName?: FunctionComponent<P & HTMLAttributes<R>>['displayName'];
	}

	export type $FC<P = {}, R = HTMLElement> = $FunctionComponent<P & HTMLAttributes<R>>;
	export type $ComponentClass<P = {}, S = ComponentState> = ComponentClass<PropsWithChildren<P>, S>;
	export class $Component<P = {}, S = Record<string, unknown>, R = HTMLElement> extends Component<PropsWithChildren<P & HTMLAttributes<R>>, S> {}
	// export type $ComponentType<P = {}> = ComponentType<PropsWithChildren<P>>;
	export type $ComponentType<P = {}, R = HTMLElement> = $ComponentClass<P, any> | $FunctionComponent<P, R>;

	export type Subcomponents =
		Record<string, $ComponentType<unknown>>;

	/**
 * Compound components are an essential React component pattern used to dissect
 * components with relational overlap. The classic example of this is Kent C.
 * Dodds' `<Toggle />` component, which is composed of `<Toggle.On />` and
 * `<Toggle.Off />`. This highlights one way to use compound components:
 * by partitioning your state.
 *
 * Another way to use compound components is to segment abstract visual spaces
 * in template/view-level components. For instance, a view component
 * `<MyView />` could be composed of something like `<MyView.LeftColumn>` and
 * `<MyView.RightColumn />` or, if the sizing is more dynamic, multiple
 * `<MyView.Section>`s.
 *
 * One thing to remember with compound components is that the inner components
 * may be coupled to the outer component. Though compound components are an
 * essential React component pattern, they are not exclusive to React. The
 * `<select>` HTML element is a good example of this, as `<option>` elements
 * may only be used inside of a `<select>` element. A common example of this in
 * React with MUI is a compound component where the outer component wraps its
 * `children` with `<Grid container>`, so the root node of any inner component
 * must be a `<Grid item />`.
 *
 * @typeParam `S` - The interface mapping {@link Subcomponents} to their prop types.
 * @typeParam `P` - Prop type for the parent component.
 *
 * @see https://kentcdodds.com/blog/compound-components-with-react-hooks/
 */
	export type CompoundComponent<
		P = Record<string, never>,
		S = Subcomponents,
	> =
		$ComponentType<P> & S;

	export type CC<
		P = Record<string, never>,
		S = Subcomponents,
	> = CompoundComponent<P, S>;

	export function forwardRef<T, P, S = Subcomponents>(
			render: ForwardRefRenderFunction<T, PropsWithChildren<P>>,
	): ForwardRefExoticComponent<PropsWithChildren<PropsWithoutRef<P> & RefAttributes<T>>> & CC<P, S>;

	// type EventHandler<E extends SyntheticEvent<any>> = { bivarianceHack(event: E): void }["bivarianceHack"];

	type $ReactEventHandler<T = Element> = <U extends T = T>(event: SyntheticEvent<U>) => void;
	type $ClipboardEventHandler<T = Element> = <U extends T = T>(event: ClipboardEvent<U>) => void
	type $CompositionEventHandler<T = Element> = <U extends T = T>(event: CompositionEvent<U>) => void
	type $DragEventHandler<T = Element> = <U extends T = T>(event: DragEvent<U>) => void
	type $FocusEventHandler<T = Element> = <U extends T = T>(event: FocusEvent<U>) => void
	type $FormEventHandler<T = Element> = <U extends T = T>(event: FormEvent<U>) => void
	type $ChangeEventHandler<T = Element> = <U extends T = T>(event: ChangeEvent<U>) => void
	type $KeyboardEventHandler<T = Element> = <U extends T = T>(event: KeyboardEvent<U>) => void
	type $MouseEventHandler<T = Element> = <U extends T = T>(event: MouseEvent<U>) => void
	type $TouchEventHandler<T = Element> = <U extends T = T>(event: TouchEvent<U>) => void
	type $PointerEventHandler<T = Element> = <U extends T = T>(event: PointerEvent<U>) => void
	type $UIEventHandler<T = Element> = <U extends T = T>(event: UIEvent<U>) => void
	type $WheelEventHandler<T = Element> = <U extends T = T>(event: WheelEvent<U>) => void
	type $AnimationEventHandler<T = Element> = <U extends T = T>(event: AnimationEvent<U>) => void
	type $TransitionEventHandler<T = Element> = <U extends T = T>(event: TransitionEvent<U>) => void
}
