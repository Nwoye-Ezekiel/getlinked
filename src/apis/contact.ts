import makeApiCall from 'apis';
import { MessagePayload } from 'types';

export async function sendMessage(payload: MessagePayload) {
  return await makeApiCall('/hackathon/contact-form', 'post', payload);
}
