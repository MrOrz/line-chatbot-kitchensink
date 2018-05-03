import * as line from '@line/bot-sdk';
import fetch from 'node-fetch';

export const lineMiddleware = line.default.middleware({
  channelAccessToken: process.env.LINE_CHANNEL_TOKEN,
  channelSecret: process.env.LINE_CHANNEL_SECRET,
});

/**
 * Sends request to LINE messaging API
 *
 * @param {'GET'|'POST'} method - Endpoint method
 * @param {string} endpoint - URL endpoint after /v2/bot
 * @param {object} body - request body
 * @param {object} options - other options to feed to fetch()
 */
export async function client(
  method = 'POST',
  endpoint = '',
  body = {},
  options = {}
) {
  const { headers = {}, ...otherOptions } = options;
  const resp = await fetch(`https://api.line.me/v2/bot${endpoint}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.LINE_CHANNEL_TOKEN}`,
      ...headers,
    },
    ...otherOptions,
    body: JSON.stringify(body),
  });

  const result = await resp.json();

  if (resp.status !== 200) {
    console.error(`${method} ${endpoint} returned error`, resp.status);
    console.error('--- BODY ---');
    console.log(JSON.stringify(body, null, '  '));
    console.error('--- RESP ---');
    console.log(JSON.stringify(result, null, '  '));
    console.error('------------');
  }

  return result;
}
