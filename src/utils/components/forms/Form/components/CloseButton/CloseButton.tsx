import { $FC, MouseEvent, useCallback } from 'react';
import { noop } from '@/utils/functions/misc/noop';
import { Button, ButtonProps } from '@/utils/components/misc/Button';
import { CloseEventHandler } from '@/utils/types/handlers/CloseEventHandler';
import { FormModes } from '../../enums';
import { useForm } from '../../hooks';

/**
 * Prop types for the {@link CloseButton} component.
 */
export type CloseButtonProps = ButtonProps;

/**
 * A button which "closes" the form, meaning that it will switch the form back
 * into read mode and reset the form when the user presses it.
 */
export const CloseButton: $FC<CloseButtonProps> = ({
	children = 'Cancel',
	onPress = noop,
	...props
}) => {
	const { editable, mode, resetForm, setModeRead } = useForm();

	const handleClose = useCallback<CloseEventHandler<HTMLElement>>(
		(e: MouseEvent<HTMLButtonElement>) => {
			e.preventDefault();

			if (editable && mode === FormModes.Write) {
				setModeRead();
			}

			resetForm();
			onPress(e);
		},
		[editable, mode, onPress, resetForm, setModeRead],
	);

	return (editable && mode === FormModes.Write) || !editable ? (
		<Button onPress={handleClose} {...props}>
			{children}
		</Button>
	) : null;
};
