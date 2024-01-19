import { faker } from '@faker-js/faker';
import { GenericType } from '../GenericType';

export const fakeGenericType = <T, U = unknown>({ ...overrideProps } = {}) => {
  const genericType = {
    required: faker.datatype.string() as T,
    method: jest.fn(() => faker.datatype.boolean() as U),
  } as GenericType<T, U>;

  faker.helpers.maybe(() => {
    /* @ts-expect-error - Cannot assign to 'optional' because it is a read-only property. */
    genericType.optional = faker.datatype.string() as T;
  });

  return {
    ...genericType,
    ...overrideProps,
  };
};
