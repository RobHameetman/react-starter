import { isGenericType } from './GenericType';
import { fakeGenericType } from './__test__';

type T = string;
type U = boolean;

describe('isGenericType()', () => {
  it('should return true given a valid GenericType', () => {
    expect(isGenericType<T, U>(fakeGenericType<T, U>())).toBe(true);
  });

  it('should return false given an invalid GenericType', () => {
    expect(isGenericType<T, U>(fakeGenericType<T, U>({ required: null }))).toBe(false);
  });
});