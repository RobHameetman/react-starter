import {
	$FC,
	MouseEvent,
	MouseEventHandler,
	ReactElement,
	useCallback,
	useMemo,
} from 'react';
import { createPortal } from 'react-dom';
import { noop } from '@/utils/functions/misc/noop';
import { usePageContext } from '@/utils/pages/Page/hooks/usePageContext';
import { Clickable } from '@/utils/types/props/Clickable';
import type { Stylable } from '@/utils/types/props/Stylable';
import styles from './Overlay.module.css';

/**
 * Prop types for `<Overlay />`.
 */
export interface OverlayProps extends Clickable, Stylable {
	/**
	 * [Optional] If `true`, will display the overlay at the app level above all
	 * other content.
	 * @defaultValue - `false`
	 */
	readonly app?: boolean;

	/**
	 * [Optional] Add an animation to the overlay.
	 * @defaultValue - A no-op function.
	 */
	readonly renderOverlay?: ($overlay: ReactElement) => ReactElement;
}

/**
 * An overlay provides contextual information and options in form of an
 * additional layer on top of the current state of the interface. They are
 * either purposefully interruptive like modals or augmenting like popovers and
 * tooltips.
 */
export const Overlay: $FC<OverlayProps> = ({
	app = false,
	children,
	className = '',
	renderOverlay = noop,
	onClick = noop,
}) => {
	const { refs: { pageOverlay } } = usePageContext();

	const cssOverride = className ? ` ${className}` : '';
	const cssOverlayLevel = app ? ` ${styles.app}` : '';

	const _handleClick = useCallback<MouseEventHandler<HTMLDivElement>>(
		(e) => {
			e.stopPropagation();

			onClick(e);
		},
		[onClick],
	);

	const $overlay = useMemo(
		() => (
			<div
				className={`${styles.overlay}${cssOverride}`}
				role="overlay"
				onClick={_handleClick}
			/>
		),
		[_handleClick, cssOverride],
	);

	const $jsx = useMemo(
		() => (
			<div className={`${styles.container}${cssOverlayLevel}`}>
				<div className={styles.content}>{children}</div>
				{renderOverlay ? renderOverlay($overlay) as ReactElement : $overlay}
			</div>
		),
		[$overlay, children, cssOverlayLevel, renderOverlay],
	);

	return app && pageOverlay.current
		? createPortal($jsx, pageOverlay.current)
		: $jsx;
};

export default Overlay;
