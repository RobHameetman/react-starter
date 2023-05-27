type Key = 'localStorage' | 'sessionStorage';

export const removeItemSpy = (key: Key = 'localStorage') => {
	return jest.spyOn(window[key].__proto__, 'removeItem');
};
