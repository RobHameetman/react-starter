type Key = 'localStorage' | 'sessionStorage';

export const removeItemMock = (key: Key = 'localStorage') => {
	window[key].__proto__.removeItem = jest.fn(() => {});
};
