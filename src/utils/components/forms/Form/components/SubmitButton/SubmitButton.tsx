import { $FC, useCallback, useState } from 'react';
import { noop } from '@app/utils/functions/misc/noop';
import {
	AsyncButton,
	AsyncButtonProps,
} from '@app/utils/components/misc/AsyncButton';
import { FormModes } from '../../enums';
import { useForm } from '../../hooks';
import { FormFields } from '../../types';

/**
 * Prop types for the {@link SubmitButton} component.
 */
export interface SubmitButtonProps extends Omit<AsyncButtonProps, 'onPress'> {
	/**
	 * [Optional] A callback function to be called when the button is clicked.
	 */
	readonly onPress?: (fields: FormFields) => void;
}

/**
 * A specialized submit button for form components.
 */
export const SubmitButton: $FC<SubmitButtonProps> = ({
	children = 'Submit',
	error: _error = false,
	onPress = noop,
	...props
}) => {
	const { editable, fields, mode, setModeRead } = useForm();
	const [error, setError] = useState(_error);

	const handleSubmit = useCallback(() => {
		if (editable) {
			setModeRead();
		}

		const hasErrors = Object.entries(fields).some(([_, { error }]) => error);

		if (!hasErrors) {
			onPress(fields);
		} else {
			setError(true);
		}
	}, [editable, fields, onPress, setModeRead]);

	return (editable && mode === FormModes.Write) || !editable ? (
		<AsyncButton
			onPress={handleSubmit}
			error={Boolean(_error || error)}
			{...props}
			submit
		>
			{children}
		</AsyncButton>
	) : null;
};
