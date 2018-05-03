import { client } from './line.mjs';

/**
 * @param {WebhookEvent} event
 */
export default async function handleEvent(event) {
  await client.replyMessage(event.replyToken, {
    type: 'text',
    text: 'hello world',
  });
}
