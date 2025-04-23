import { $FC } from 'react';
import styles from './Chip.module.css';

export enum ChipTypes {
	disabled,
	error,
	info,
	primary,
	secondary,
	success,
	warning,
}

export interface ChipProps {
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
	readonly type?: ChipTypes;
}

export const Chip: $FC<ChipProps> = ({
	className = '',
	children,
	disabled = false,
	type = ChipTypes.primary,
}) => {
	const cssType = styles[ChipTypes[disabled ? ChipTypes.disabled : type]];
	const cssClassName = className ? `${className} ` : '';

	return (
		<span className={`${styles.chip} ${cssType}${cssClassName}`}>
			{children}
		</span>
	);
};

export default Chip;
