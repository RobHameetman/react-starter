import { faker } from '@faker-js/faker';

export const fakeNewBrandedType = ({ ...overrideProps } = {}) => {
  const newType = {
    required: faker.datatype.string(),
    method: jest.fn(() => faker.datatype.string()),
    __type: 'NewBrandedType',
  } as Record<string, unknown>;

  faker.helpers.maybe(() => {
    newType.optional = faker.datatype.string();
  });

  return {
    ...newType,
    ...overrideProps,
  };
};
