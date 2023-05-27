type Key = 'localStorage' | 'sessionStorage';

export const getItemSpy = (key: Key = 'localStorage') => {
	return jest.spyOn(window[key].__proto__, 'getItem');
};
