import { renderHook, act } from '@testing-library/react-hooks';
import { useQueryParam } from './useQueryParam';

// Mock the useRouter hook
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('useQueryParam', () => {
  const mockReplace = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    useRouter.mockReturnValue({
      pathname: '/path/value',
      query: { param: 'value' },
      replace: mockReplace,
    });
  });

  it('should get the query parameter correctly', () => {
    const { result } = renderHook(() =>
      useQueryParam({ param: 'param', type: 'query' }),
    );

    const [param] = result.current;
    expect(param).toBe('value');
  });

  it('should set the query parameter correctly', () => {
    const { result } = renderHook(() =>
      useQueryParam({ param: 'param', type: 'query' }),
    );

    const [, setParam] = result.current;

    act(() => {
      setParam('newValue')
    });

    expect(mockReplace).toHaveBeenCalledWith({
      pathname: '/path/value',
      search: '?param=newValue',
    });
  });

  it('should handle multiple query parameters correctly', () => {
    useRouter.mockReturnValue({
      pathname: '/path/value',
      query: { param: ['value1', 'value2'] },
      replace: mockReplace,
    });

    const { result } = renderHook(() =>
      useQueryParam({ param: 'param', type: 'query' }),
    );

    const [param] = result.current;
    expect(param).toEqual(['value1', 'value2']);
  })

  it('should delete the query parameter correctly', () => {
    const { result } = renderHook(() =>
      useQueryParam({ param: 'param', type: 'query' }),
    );

    const [, setParam] = result.current;

    act(() => {
      setParam(undefined)
    });

    expect(mockReplace).toHaveBeenCalledWith({
      pathname: '/path/value',
      search: '',
    });
  })

  it('should handle path parameters correctly', () => {
    useRouter.mockReturnValue({
      pathname: '/path/value/param/value',
      query: {},
      replace: mockReplace,
    });

    const { result } = renderHook(() =>
      useQueryParam({ param: 'param', type: 'path' }),
    );

    const [param] = result.current;
    expect(param).toBe('value');
  })

  it('should set path parameters correctly', () => {
    useRouter.mockReturnValue({
      pathname: '/path/value/param/value',
      query: {},
      replace: mockReplace,
    });

    const { result } = renderHook(() =>
      useQueryParam({ param: 'param', type: 'path' }),
    );

    const [, setParam] = result.current;

    act(() => {
      setParam('newPathValue')
    });

    expect(mockReplace).toHaveBeenCalledWith({
      pathname: '/path/value/param/newPathValue',
      search: '',
    });
  });
});
