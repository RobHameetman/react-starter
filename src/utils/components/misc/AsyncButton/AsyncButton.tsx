import { $FC, useMemo } from 'react';
import { ErrorIcon } from '@app/utils/icons/ErrorIcon';
import { SuccessIcon } from '@app/utils/icons/SuccessIcon';
import { LoadingElipsisAnimation } from '@app/utils/components/animations/LoadingElipsisAnimation';
import { useControlProp } from '@app/utils/hooks/react/useControlProp';
import { Button, ButtonProps } from '@app/utils/components/misc/Button';

/**
 * Prop types for the {@link AsyncButton} component.
 */
export interface AsyncButtonProps extends ButtonProps {
	/**
	 * [Optional] Should be `true` when the async operation has completed
	 * successfully.
	 * @defaultValue - `false`
	 */
	readonly success?: boolean;

	/**
	 * [Optional] Should be `true` when the async operation has completed
	 * erroneously.
	 * @defaultValue - `false`
	 */
	readonly error?: boolean;

	/**
	 * [Optional] Should be `true` while the async operation has not completed.
	 * @defaultValue - `false`
	 */
	readonly loading?: boolean;
}

/**
 * A button that can be used to represent the state of an async operation. An
 * example of where this is used is the login page.
 */
export const AsyncButton: $FC<AsyncButtonProps> = ({
	children,
	error: _error = false,
	icon = null,
	loading: _loading = false,
	success: _success = false,
	...props
}) => {
	const [error] = useControlProp(_error);
	const [loading] = useControlProp(_loading);
	const [success] = useControlProp(_success);

	const $successIcon = useMemo(() => success && <SuccessIcon />, [success]);
	const $errorIcon = useMemo(() => error && <ErrorIcon />, [error]);

	let type = 'standard';

	if (success) {
		type = 'success';
	}

	if (error) {
		type = 'error';
	}

	return (
		<Button
			icon={$successIcon || $errorIcon || icon}
			disabled={loading}
			type={type}
			{...props}
		>
			{loading ? <LoadingElipsisAnimation /> : children}
		</Button>
	);
};
