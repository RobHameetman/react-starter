import { FC } from 'react';
import { isArray } from '@app/utils/functions/check/js/core/isArray';
import { cssClasses } from '@app/utils/functions/misc/cssClasses';
import { withId } from '@app/utils/hocs/withId';
import { useSemanticAsProp } from '@app/utils/hooks/react/useSemanticAsProp';
import type { Identifiable } from '@app/utils/types/props/Identifiable';
import { Polymorphic } from '@app/utils/types/props/Polymorphic';
import type { Stylable } from '@app/utils/types/props/Stylable';
import { KBD_MAP } from './constants';
import { KbdModifier } from './enums';
import styles from './Kbd.module.css';

type ComposedProps = Identifiable & Polymorphic & Stylable;

/**
 * Prop types for {@link Kbd}.
 */
export interface KbdProps extends ComposedProps {
	/**
	 * The keyboard key that is represented by the component.
	 */
	readonly children: string;

	/**
	 * [Optional] One or more modifier keys that are used in conjunction with
	 * the key specified by the child of the component.
	 */
	readonly modifiedBy?: KbdModifier | ReadonlyArray<KbdModifier>;

	/**
	 * [Optional] Disable the warning that is logged to the console when the
	 * component is rendered without a child.
	 * @defaultValue - `false`
	 */
	readonly silent?: boolean;
}

/**
 * @TODO - A short description of the component here.
 */
export const Kbd: FC<KbdProps> = withId(
	({
		as: _as = 'kbd',
		className = '',
		children,
		id,
		modifiedBy,
		silent = false,
		...props
	}) => {
		const As = useSemanticAsProp({ as: _as });
		const css = cssClasses(styles.kbd, className);

		const modifiers = isArray<KbdModifier>(modifiedBy)
			? Array.from(new Set(modifiedBy))
			: [modifiedBy as KbdModifier];

		if (!children.length && !modifiedBy && !silent) {
			console.warn(
				'Kbd component rendered without a child. If this is intentional, use the `silent` prop to disable this warning.',
			);
		}

		return (
			<As className={css} role="presentation" id={id} {...props}>
				{modifiers.map((modifier) => (
					<abbr
						key={modifier}
						id={`${id}-${modifier}`}
						title={`${modifier} key`}
					>
						{KBD_MAP[modifier]}
					</abbr>
				))}
				<span>{children}</span>
			</As>
		);
	},
);
