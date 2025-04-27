import { $FC } from 'react';
import styles from './Badge.module.css';

export enum BadgeTypes {
	disabled,
	error,
	info,
	primary,
	secondary,
	success,
	warning,
}

export interface BadgeProps {
	/**
	 * @param className - [Optional] Pass in additional styling.
	 * @defaulValue - `''`
	 */
	readonly className?: string;
	/**
	 * @param disabled - [Optional] Determines if the button is in a disabled.
	 * @defaultValue - `false`
	 */
	readonly disabled?: boolean;
	/**
	 * @param type - [Optional] The stylized component variant to display.
	 * @defaultValue - `'primary'`
	 */
	readonly type?: BadgeTypes;
}

export const Badge: $FC<BadgeProps> = ({
	className = '',
	children,
	disabled = false,
	type = BadgeTypes.primary,
}) => {
	const cssType = styles[BadgeTypes[disabled ? BadgeTypes.disabled : type]];
	const cssClassName = className ? `${className} ` : '';

	return (
		<span className={`${styles.badge} ${cssType}${cssClassName}`}>
			{children}
		</span>
	);
};

export default Badge;
