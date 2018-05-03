# line-chatbot-kitchensink

## Setup

```bash
$ npm install
```

Copy `.env.sample` to `.env` and fill in its content.

## Run

```bash
$ npm start
```

The server will be running at http://localhost:3000, with its webhook URL being
http://localhost:3000/webhook.

To run on local machine, you may need to tunnel the webhook server using [serveo](https://serveo.net/).

## Development

To start a server that automatically reloads after file save, run:

```bash
$ npm run dev
```

## Deploy

This repo is ready to be deployed to Heroku.
After setting up Heroku repo & env config, just add git remote and push.
