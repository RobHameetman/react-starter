import { isNewType } from './NewType';
import { fakeNewType } from './__test__';

describe('isNewType()', () => {
  it('should return true given a valid NewType', () => {
    expect(isNewType(fakeNewType())).toBe(true);
  });

  it('should return false given an invalid NewType', () => {
    expect(isNewType(fakeNewType({ required: null }))).toBe(false);
  });
});
