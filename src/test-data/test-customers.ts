import { Customer } from '../types/customer';
import { faker } from '@faker-js/faker';

export const customer: Customer = {
  fistName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  postalCode: faker.location.zipCode(),
};
