import express from 'express';
import { lineMiddleware } from './line';
import handleEvent from './handleEvent';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello world!'));
app.post('/webhook', lineMiddleware, ({ body: { events } }, res) => {
  console.log('events', events);
  res.status(200).json({});
  events.forEach(event =>
    handleEvent(event).catch(err => {
      console.error('Error handling event:', event);
      console.error(err);
    })
  );
});

app.listen(PORT, () => console.log(`Listening at port ${PORT}`));
