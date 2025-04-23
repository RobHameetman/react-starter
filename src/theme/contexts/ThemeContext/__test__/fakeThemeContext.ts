import { faker } from '@faker-js/faker';

export const fakeThemeContext = ({
	...overrideProps
}: Record<string, unknown> = {}) => ({
	isDark: faker.datatype.boolean(),
	prefersDarkMode: faker.datatype.boolean(),
	theme: null,
	setDarkTheme: jest.fn(),
	setLightTheme: jest.fn(),
	setSystemTheme: jest.fn(),
	...overrideProps,
});
