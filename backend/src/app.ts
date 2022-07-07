import express, { Application } from 'express';

const app: Application = express();

const port = 3001

app.listen(port, function () {
  console.log(`App is listening on port ${port} !`);
});
