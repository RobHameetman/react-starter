type Key = 'localStorage' | 'sessionStorage';

export const getItemMock = (value: string, key: Key = 'localStorage') => {
	window[key].__proto__.getItem = jest.fn(() => value);
};
