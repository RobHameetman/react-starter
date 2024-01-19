import { isNewBrandedType } from './NewBrandedType';
import { fakeNewBrandedType } from './__test__';

describe('isNewBrandedType()', () => {
  it('should return true given a valid NewBrandedType', () => {
    expect(isNewBrandedType(fakeNewBrandedType())).toBe(true);
  });

  it('should return false given an invalid NewBrandedType', () => {
    expect(isNewBrandedType(fakeNewBrandedType({ __type: null }))).toBe(false);
  });
});