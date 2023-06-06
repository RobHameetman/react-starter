import { FC, PropsWithChildren, ReactElement } from 'react';
import { useSemanticAsProp } from '../../../../hooks';

/**
 * Prop types for the View.{@link Content} component.
 */
export interface ContentProps extends PropsWithChildren {
	/**
	 * [Optional] Semantic "as" prop. Override the root node.
	 * @defaultValue `'main'`
	 */
	readonly as?: ReactElement<unknown, string> | keyof JSX.IntrinsicElements;
	/**
	 * The "id" attribute of the root node.
	 * @defaultValue `'main'`
	 */
	readonly id?: string;
	/**
	 * The "data-testid" attribute of the root node.
	 * @defaultValue `'main'`
	 */
	readonly testId?: string;
}

/**
 * Render the view/page content inside of this component. This component must be
 * included as a child of `<View />` for navigation to appear.
 *
 * @param props - A View.{@link ContentProps} object.
 *
 * @example
 * ```
 * <View>
 *   <View.Content>
 *     {...}
 *   </View.Content>
 * </View>
 * ```
 *
 * @returns A rendered page/view-level navigation bar.
 */
export const Content: FC<ContentProps> = ({
	as: _as = 'main',
	children,
	id = 'main',
	testId = id,
}) => {
	const RootNodeAs = useSemanticAsProp({ as: _as });

	return (
		<RootNodeAs id={id} tabIndex={-1} data-testid={testId} as>
			{children}
		</RootNodeAs>
	);
};
