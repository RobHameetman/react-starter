import { isEnumValue } from './EnumValues';

describe('isEnumValue()', () => {
  it("should return true given the string value 'This'", () => {
    expect(isEnumValue('This')).toBe(true);
  });

  it("should return true given the string value 'That'", () => {
    expect(isEnumValue('That')).toBe(true);
  });

  it('should return false given an empty string', () => {
    expect(isEnumValue('')).toBe(false);
  });
});
