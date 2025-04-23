import { $FC, MouseEventHandler, useCallback } from 'react';
import { Button, ButtonProps } from '@/utils/components/misc/Button';
import { noop } from '@/utils/functions/misc/noop';
import { FormModes } from '../../enums';
import { useForm } from '../../hooks';

/**
 * Prop types for the {@link EditButton} component.
 */
export type EditButtonProps = ButtonProps;

/**
 * A short description of the component here.
 */
export const EditButton: $FC<EditButtonProps> = ({
	children = 'Edit',
	onClick: _handleClick = noop,
	...props
}) => {
	const { editable, mode, setModeWrite } = useForm();

	const handleEdit = useCallback<MouseEventHandler<HTMLElement>>((e) => {
		if (editable) {
			setModeWrite();
		}

		_handleClick(e);
	}, [_handleClick, editable, setModeWrite]);

	return editable && mode === FormModes.Read ? (
		<Button onClick={handleEdit} {...props}>
			{children}
		</Button>
	) : null;
};
