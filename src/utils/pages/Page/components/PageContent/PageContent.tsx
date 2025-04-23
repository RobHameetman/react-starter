import { $FC } from 'react';
import type { Identifiable } from '@/utils/types/props/Identifiable';
import type { Polymorphic } from '@/utils/types/props/Polymorphic';
import type { Stylable } from '@/utils/types/props/Stylable';
import type { Testable } from '@/utils/types/props/Testable';
import { useBreakpoints } from '@/utils/hooks/misc/useBreakpoints';
import styles from './PageContent.module.css';

/**
 * Compositional prop types for the {@link PageContent} component.
 */
type ComposedProps = Identifiable & Polymorphic & Stylable & Testable;

/**
 * Prop types for the {@link PageContent} component.
 */
export type PageContentProps = ComposedProps;

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
 * @param props - A {@link PageContentProps} object.
 *
 * @returns A rendered page/view with content.
 */
export const PageContent: $FC<PageContentProps> = ({
	as: As = 'main',
	className = '',
	children,
	id = 'main',
	testId = id,
	...props
}) => {
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

export default PageContent;
