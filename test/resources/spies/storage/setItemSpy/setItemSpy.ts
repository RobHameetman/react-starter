type Key = 'localStorage' | 'sessionStorage';

export const setItemSpy = (key: Key = 'localStorage') => {
	return jest.spyOn(window[key].__proto__, 'setItem');
};
