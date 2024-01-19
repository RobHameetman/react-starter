import { $FC, useCallback, useEffect, useMemo, useState } from 'react';
import { FormContext } from '../FormContext';
import { DEFAULT_FIELD } from '../../constants';
import { FormModes } from '../../enums';
import { deleteFormCache, getFormCache, setFormCache } from '../../functions';
import { CachedForm, FormField, FormFields } from '../../types';

export interface FormProviderProps {
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
	 * name - A name for the form used for caching.
	 */
	readonly name: string;

	/**
	 * [Optional] A control prop for the initial form mode.
	 * @defaultValue - `FormModes.Write`
	 */
	readonly mode?: FormModes;
}

/**
 * `<FormProvider>` is wrapped around `<Form />` content to provide a shared
 * state to the entire form.
 */
export const FormProvider: $FC<FormProviderProps> = ({
	children,
	disableCache,
	editable: _editable = true,
	name: formName,
	mode: _mode,
}) => {
	const [editable] = useState(_editable);

	const getCachedForm = useCallback(() => {
		const cached = getFormCache(formName);

		return cached || undefined;
	}, [formName]);

	const { fields: cachedFields = {}, mode: cachedMode = FormModes.Write } =
		useMemo(() => getCachedForm() || ({} as CachedForm), [getCachedForm]);

	const [mode, setMode] = useState(_mode || cachedMode);
	const [fields, setFields] = useState<FormFields>(cachedFields);

	const cacheForm = useCallback(() => {
		const _fields = Object.fromEntries(
			Object.entries(fields).map(
				([
					fieldName,
					{
						format: _,
						validateOnBlur: _vb,
						validateOnChange: _vc,
						validateOnFocus: _vf,
						validateOnSubmit: _vs,
						...field
					},
				]) => [fieldName, field],
			),
		);

		setFormCache(formName, {
			fields: _fields as FormFields<unknown>,
			mode,
		});
	}, [fields, formName, mode]);

	const setModeRead = useCallback(() => setMode(FormModes.Read), []);
	const setModeWrite = useCallback(() => setMode(FormModes.Write), []);

	const initField = useCallback(
		(fieldName: string, _field?: Partial<FormField<unknown>>) => {
			setFields((_fields) => ({
				..._fields,
				[fieldName]: {
					...DEFAULT_FIELD,
					...(_field || {}),
				},
			}));
		},
		[],
	);

	const setFieldValue = useCallback(
		(fieldName: string, value: unknown) => {
			const field = fields[fieldName];
			const { format } = field;

			const formattedValue =
				typeof value === 'string' && format ? format(value) : value;

			const updatedField = {
				...field,
				value: formattedValue,
			};

			const updatedFields = {
				...fields,
				[fieldName]: updatedField,
			};

			setFields(updatedFields);

			return updatedFields;
		},
		[fields],
	);

	const validateField = useCallback(
		(fieldName: string, fields: FormFields, type = 'change') => {
			const field = fields[fieldName];

			const {
				validateOnBlur = (..._args) => true,
				validateOnChange = (..._args) => true,
				validateOnFocus = (..._args) => true,
				validateOnSubmit = (..._args) => true,
				value,
			} = field;

			let isValid = true;

			switch (type) {
				case 'blur':
					isValid = validateOnBlur(value, fields);
					break;
				case 'change':
					isValid = validateOnChange(value, fields);
					break;
				case 'focus':
					isValid = validateOnFocus(value, fields);
					break;
				case 'submit':
					isValid = validateOnSubmit(value, fields);
					break;
				default:
					break;
			}

			const updatedField = {
				...field,
				error: !isValid ? 'Value is invalid' : null,
			};

			setFields((_fields) => ({
				..._fields,
				[fieldName]: updatedField,
			}));
		},
		[],
	);

	const resetForm = useCallback(() => {
		setFields((_fields) =>
			Object.fromEntries(
				Object.entries(_fields).map(([fieldName, field]) => [
					fieldName,
					{
						...field,
						value: field.initialValue,
					},
				]),
			),
		);
	}, []);

	useEffect(() => {
		if (disableCache) {
			deleteFormCache(formName);
		} else {
			cacheForm();
		}
	}, [disableCache, fields, mode]);

	return (
		<FormContext.Provider
			value={{
				editable,
				fields,
				mode,
				cacheForm,
				getCachedForm,
				initField,
				resetForm,
				setFieldValue,
				setModeRead,
				setModeWrite,
				validateField,
			}}
		>
			{children}
		</FormContext.Provider>
	);
};
