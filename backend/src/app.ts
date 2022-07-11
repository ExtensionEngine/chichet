import sequelize, { User, UserTag } from 'shared/database';
import express from 'express';

const app = express();

const port = 3001;

// test route
app.get('/', async (req, res) => {
  const users = await User.findAll({ include: UserTag });
  res.json(users);
});

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
