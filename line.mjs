import * as line from '@line/bot-sdk';

const config = {
  channelAccessToken: process.env.LINE_CHANNEL_TOKEN,
  channelSecret: process.env.LINE_CHANNEL_SECRET,
};

export const client = new line.default.Client(config);
export const lineMiddleware = line.default.middleware(config);
