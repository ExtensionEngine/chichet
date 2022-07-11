import sequelize, { Room, RoomTag, Tag, User, UserTag } from 'shared/database';
import express from 'express';

const app = express();

const port = 3001;

// test route
app.get('/', async (req, res) => {
  // const users = await User.findAll({ include: UserTag });
  console.log('\n Room - RoomTag \n\n');
  await Room.findAll({ include: RoomTag });

  console.log('\n Room - Tag \n\n');
  await Room.findAll({ include: Tag });

  console.log('\n RoomTag - Tag \n\n');
  await RoomTag.findAll({ include: Tag });

  console.log('\n RoomTag - Room \n\n');
  await RoomTag.findAll({ include: Room });

  console.log('\n Tag - RoomTag \n\n');
  await Tag.findAll({ include: RoomTag });

  console.log('\n Tag - Room \n\n');
  await Tag.findAll({ include: Room });

  res.sendStatus(200);
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
