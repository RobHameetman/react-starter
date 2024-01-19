export enum FormModes {
	Read,
	Write,
}

export const isFormModes = (value: unknown): value is FormModes => {
	return (
		FormModes.Read === value ||
		FormModes[FormModes.Read] === value ||
		FormModes.Write === value ||
		FormModes[FormModes.Write] === value
	);
};
