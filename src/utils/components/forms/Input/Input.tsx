import { ReactElement, forwardRef, useCallback, useState } from 'react';
import { Button, ButtonFills } from '@/utils/components/misc/Button';
import { cssClasses } from '@/utils/functions/misc/cssClasses';
import { noop } from '@/utils/functions/misc/noop';
import { useFocus } from '@/utils/hooks/misc/useFocus';
import { VisibilityOffIcon } from '@/utils/icons/VisibilityOffIcon';
import { VisibilityOnIcon } from '@/utils/icons/VisibilityOnIcon';
import { Changeable } from '@/utils/types/props/Changeable';
import { Disablable } from '@/utils/types/props/Disablable';
import { Errorable } from '@/utils/types/props/Errorable';
import { Expansible } from '@/utils/types/props/Expansible';
import { Focusable } from '@/utils/types/props/Focusable';
import { Loadable } from '@/utils/types/props/Loadable';
import { Nameable } from '@/utils/types/props/Nameable';
import { Requirable } from '@/utils/types/props/Requirable';
import type { Stylable } from '@/utils/types/props/Stylable';
import { Valuable } from '@/utils/types/props/Valuable';
import styles from './Input.module.css';

export enum InputTypes {
	standard = 'standard',
	outlined = 'outlined',
	transparent = 'transparent',
}

/**
 * Compositional props used in the prop types below.
 */
type ComposedProps = Changeable &
	Disablable &
	Errorable<HTMLInputElement> &
	Expansible &
	Focusable &
	Loadable &
	Nameable &
	Requirable &
	Stylable &
	Valuable;

/**
 * Prop types for the {@link Input} component.
 */
export interface InputProps extends ComposedProps {
	/**
	 * [Optional] A control prop for the `autocomplete` attribute.
	 */
	readonly autocomplete?: string;

	/**
	 * [Optional] An icon to display next to the input field.
	 * @defaultValue - `null`
	 */
	readonly icon?: ReactElement | null;

	/**
	 * [Optional] The label text
	 */
	readonly label?: string;

	/**
	 * [Optional] A value for the <input> `type` attribute.
	 */
	readonly password?: boolean;

	/**
	 * [Optional] A placeholder value displayed when the <input> does not have a
	 * value.
	 */
	readonly placeholder?: string;

	/**
	 * [Optional] A value for the <input> `type` attribute.
	 */
	readonly type?: InputTypes;
}

/**
 * An input component used for entering data, typically in a single line.
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
	(
		{
			autocomplete = 'on',
			className = 'mh0 mb2 mt4',
			disabled = false,
			fullWidth = false,
			icon = null,
			label = '',
			name = '',
			password = false,
			placeholder = '',
			required = false,
			type = InputTypes.standard,
			onBlur: handleBlur = noop,
			onChange: handleChange = noop,
			onFocus: handleFocus = noop,
			value,
			...props
		},
		_ref,
	) => {
		const [passwordVisible, setPasswordVisible] = useState(false);
		const { focused, ref } = useFocus({ ref: _ref });

		const isOutlined = type === InputTypes.outlined;

		const containerCss = cssClasses(
			styles.container,
			styles[InputTypes[type]],
			{
				[styles.focused]: focused,
				'w-100': fullWidth,
			},
			className,
		);

		const inputCss = cssClasses(styles.input, {
			'w-100': required,
		});

		const togglePasswordVisibility = useCallback(() => {
			setPasswordVisible((visible) => !visible);
		}, []);

		return (
			<div className={containerCss}>
				{label && (
					<label htmlFor={name} className={styles.label}>
						{label}
						{required && <span className={styles.asterisk}>*</span>}
						<br />
					</label>
				)}
				{icon && <span className={styles.icon}>{icon}</span>}
				<input
					aria-label={name}
					autoComplete={autocomplete}
					className={inputCss}
					disabled={disabled}
					id={name}
					name={name}
					required={required}
					placeholder={placeholder}
					type={password && !passwordVisible ? 'password' : 'text'}
					value={value}
					ref={ref}
					onBlur={handleBlur}
					onChange={handleChange}
					onFocus={handleFocus}
					{...props}
				/>
				{password && (
					<Button
						className={styles.showPasswordBtn}
						icon={
							passwordVisible ? <VisibilityOnIcon /> : <VisibilityOffIcon />
						}
						fill={isOutlined ? ButtonFills.outlined : ButtonFills.filled}
						onClick={togglePasswordVisibility}
					/>
				)}
				{label && isOutlined && (
					<fieldset className={styles.outline} aria-hidden="true">
						<legend className={styles.label}>
							{label}
							{required && <span className={styles.asterisk}>*</span>}
						</legend>
					</fieldset>
				)}
			</div>
		);
	},
);
