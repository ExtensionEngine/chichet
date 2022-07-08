import express from 'express';
import { sequelize } from 'models';

const app = express();

const port = 3001;

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

app.listen(port, function () {
  console.log(`App is listening on port ${port} !`);
});
