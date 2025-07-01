import { Customer } from '../../src/types/customer';
import { faker } from '@faker-js/faker';

export const customer: Customer = {
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  postalCode: faker.location.zipCode(),
};
