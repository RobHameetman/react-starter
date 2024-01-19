import { $FC } from 'react';
import type { Identifiable } from '@app/utils/types/props/Identifiable';
import type { Polymorphic } from '@app/utils/types/props/Polymorphic';
import type { Stylable } from '@app/utils/types/props/Stylable';
import type { Testable } from '@app/utils/types/props/Testable';
import { useBreakpoints, useSemanticAsProp } from '../../../../hooks';
import styles from './ViewContent.module.css';

/**
 * Compositional prop types for the {@link ViewContent} component.
 */
type ComposedProps = Identifiable & Polymorphic & Stylable & Testable;

/**
 * Prop types for the {@link ViewContent} component.
 */
export type ViewContentProps = ComposedProps;

/**
 * Render the view/page content inside of this component. This component must be
 * included as a child of `<View />` for it to appear correctly.
 *
 * @example
 * ```TSX
 * <View>
 *   <View.Content>
 *     {...}
 *   </View.Content>
 * </View>
 * ```
 *
 * @param props - A {@link ViewContentProps} object.
 *
 * @returns A rendered page/view with content.
 */
export const ViewContent: $FC<ViewContentProps> = ({
	as: _as = 'main',
	className = '',
	children,
	id = 'main',
	testId = id,
	...props
}) => {
	const As = useSemanticAsProp({ as: _as });
	const { isMobile } = useBreakpoints();

	const cssSpacing = isMobile ? ` ${styles.mobile}` : '';
	const cssOverride = className ? ` ${className}` : '';

	return (
		<As
			className={`${styles.content}${cssSpacing}${cssOverride}`}
			id={id}
			tabIndex={-1}
			data-test-id={testId}
			{...props}
		>
			{children}
		</As>
	);
};
