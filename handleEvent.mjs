import { client } from './line.mjs';

/**
 * @param {WebhookEvent} event
 */
export default async function handleEvent(event) {
  await client('POST', '/message/reply', {
    replyToken: event.replyToken,
    messages: [
      {
        type: 'text',
        text: 'hello world',
      },
    ],
  });
}
