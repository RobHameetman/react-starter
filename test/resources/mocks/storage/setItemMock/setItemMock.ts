type Key = 'localStorage' | 'sessionStorage';

export const setItemMock = (key: Key = 'localStorage') => {
	window[key].__proto__.setItem = jest.fn(() => {});
};
