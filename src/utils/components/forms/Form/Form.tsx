import { FormEventHandler, MouseEvent, useCallback } from 'react';
import { noop } from '@app/utils/functions/misc/noop';
import { CC } from '@app/utils/types/react/CC';
import type { Stylable } from '@app/utils/types/props/Stylable';
import {
	FormButtons,
	CloseButton,
	EditButton,
	FormField,
	SubmitButton,
} from './components';
import { FormProvider } from './contexts';
import { FormModes } from './enums';

/**
 * Compositional prop types for the {@link FormButtons} component.
 */
type ComposedProps = Stylable;

/**
 * Prop types for the {@link Form} component.
 */
export interface FormProps extends ComposedProps {
	/**
	 * [Optional] Override the default form mode.
	 * @defaultValue - `FormModes.Write`
	 */
	readonly defaultMode?: FormModes;

	/**
	 * [Optional] Set to `true` to prevent the form state from persisting in LocalStorage.
	 * @defaultValue - `false`
	 */
	readonly disableCache?: boolean;

	/**
	 * [Optional] Set to `false` to make the form "write-only".
	 * @defaultValue - `true`
	 */
	readonly editable?: boolean;

	/**
	 * A name for the form used for caching.
	 */
	readonly name: string;

	/**
	 * [Optional] A name for the form used for caching.
	 * @defaultValue - A no-op function.
	 */
	readonly onSubmit?: FormEventHandler;
}

export interface FormComponents {
	Buttons: typeof FormButtons;
	Close: typeof CloseButton;
	Edit: typeof EditButton;
	Field: typeof FormField;
	Submit: typeof SubmitButton;
}

/**
 * A short description of the component here.
 */
export const Form: CC<FormComponents, FormProps> = ({
	className = '',
	children,
	defaultMode = FormModes.Write,
	disableCache = false,
	editable = true,
	name,
	onSubmit = noop,
}) => {
	const cssOverrides = className ? ` ${className}` : '';

	const _handleSubmit = useCallback((e: MouseEvent<HTMLFormElement>) => {
		e.preventDefault();

		onSubmit(e);
	}, []);

	return (
		<FormProvider
			name={name}
			disableCache={disableCache}
			editable={editable}
			mode={editable ? defaultMode : FormModes.Write}
		>
			<form className={cssOverrides} onSubmit={_handleSubmit}>
				{children}
			</form>
		</FormProvider>
	);
};

Form.Buttons = FormButtons;
Form.Close = CloseButton;
Form.Edit = EditButton;
Form.Field = FormField;
Form.Submit = SubmitButton;
