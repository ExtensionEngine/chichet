import createEndpoint from 'shared/utils/createEndpoint';
import express from 'express';
import sequelize from 'shared/database';

// eslint-disable-next-line sort-imports
import message from 'message';
import room from 'room';
import tag from 'tag';
import user from 'user';

const app = express();

const port = process.env.PORT || 3001;

app.use(express.json());

app.use(createEndpoint(message.path), message.router);
app.use(createEndpoint(room.path), room.router);
app.use(createEndpoint(tag.path), tag.router);
app.use(createEndpoint(user.path), user.router);

// test database connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connected to the database.');
  } catch {
    console.error('Unable to connect to the database');
  }
})();

app.listen(port, function () {
  console.log(`App is listening on port ${port} !`);
});
