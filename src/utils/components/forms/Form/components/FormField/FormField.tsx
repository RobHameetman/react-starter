import {
	ChangeEventHandler,
	FocusEventHandler,
	ForwardRefExoticComponent,
	forwardRef,
	useCallback,
	useEffect,
	useState,
} from 'react';
import { isString } from '@/utils/functions/check/js/core/isString';
import { noop } from '@/utils/functions/misc/noop';
import { Polymorphic } from '@/utils/types/props/Polymorphic';
import { FormModes } from '../../enums';
import { useForm } from '../../hooks';
import { FormField as Field } from '../../types';

/**
 * Compositional prop types for the {@link FormField} component.
 */
type ComposedProps = Polymorphic;

/**
 * Prop types for the {@link FormField} component.
 */
export interface FormFieldProps extends ComposedProps {
	/**
	 * The name of the field used for state management.
	 */
	readonly name: string;

	/**
	 * [Optional] A control prop for the current field value.
	 * @defaultValue - `''`
	 */
	readonly value?: Field['value'];

	/**
	 * [Optional] A formatting function for string values.
	 * @defaultValue - A no-op function.
	 */
	readonly format?: Field['format'];

	/**
	 * [Optional] A handler fired when the field loses focus.
	 * @defaultValue - A no-op function.
	 */
	readonly onBlur?: (value: unknown) => void;

	/**
	 * [Optional] A handler fired when the field value changes.
	 * @defaultValue - A no-op function.
	 */
	readonly onChange?: (value: unknown) => void;

	/**
	 * [Optional] A validation function for determining error states on blur.
	 * @defaultValue - A no-op function.
	 */
	readonly validateOnBlur?: Field['validateOnBlur'];

	/**
	 * [Optional] A validation function for determining error states on change.
	 * @defaultValue - A no-op function.
	 */
	readonly validateOnChange?: Field['validateOnChange'];

	/**
	 * [Optional] A validation function for determining error states on focus.
	 * @defaultValue - A no-op function.
	 */
	readonly validateOnFocus?: Field['validateOnFocus'];

	/**
	 * [Optional] A validation function for determining error states on submit.
	 * @defaultValue - A no-op function.
	 */
	readonly validateOnSubmit?: Field['validateOnSubmit'];
}

/**
 * A polymorphic form field component. Use the "as" prop to render the specific
 * type of field you need.
 */
export const FormField: ForwardRefExoticComponent<FormFieldProps> = forwardRef(
	(
		{
			as: As = 'input',
			name,
			value: _value,
			format = (value: string) => value,
			onBlur = noop,
			onChange = noop,
			validateOnBlur = () => true,
			validateOnChange = () => true,
			...props
		},
		ref,
	) => {
		const { fields, mode, initField, setFieldValue, validateField } = useForm();
		const [initialized, setInitialized] = useState(false);

		const thisField = fields[name];
		const { value = _value } = thisField || {};

		const handleBlur = useCallback<FocusEventHandler>(
			(e) => {
				validateField(name, fields, 'blur');
				onBlur(e);
			},
			[fields, name, onBlur, validateField],
		);

		const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
			(e) => {
				const updatedFields = setFieldValue(name, e.target.value);

				validateField(name, updatedFields, 'change');
				onChange(e.target.value);
			},
			[name, onChange, setFieldValue, validateField],
		);

		const formattedValue = useCallback(
			() =>
				isString(_value) && isString(value)
					? format(_value || value)
					: _value || value,
			[_value, format, value],
		);

		useEffect(() => {
			if (!initialized) {
				initField(name, {
					initialValue: formattedValue(),
					value: formattedValue(),
					format,
					validateOnBlur,
					validateOnChange,
				});

				setInitialized(true);
			} else {
				setFieldValue(name, _value);
				onChange(_value);
			}
		}, [_value]);

		return (
			<>
				<As
					name={name}
					value={value || _value}
					error={thisField && thisField.error}
					disabled={mode === FormModes.Read}
					onBlur={handleBlur}
					onChange={handleChange}
					ref={ref}
					{...props}
				/>
				{thisField && thisField.error && (
					<span className="f1 ruby-500">{thisField.error}</span>
				)}
			</>
		);
	},
);
