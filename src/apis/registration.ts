import makeApiCall from 'apis';
import { Category, RegistrationPayload } from 'types';

export async function getCategories() {
  return await makeApiCall<Category[]>('/hackathon/categories-list');
}

export async function registerUser(payload: RegistrationPayload) {
  return await makeApiCall('/hackathon/registration', 'post', payload);
}
