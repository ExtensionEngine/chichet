import { DataTypes, Model, ModelStatic, Sequelize } from 'sequelize';
import fs from 'fs';
import path from 'path';

const sequelize = new Sequelize(
  process.env.POSTGRES_DB || '',
  process.env.POSTGRES_USER || '',
  process.env.POSTGRES_PASSWORD || '',
  {
    dialect: 'postgres',
    host: process.env.POSTGRES_HOST,
  },
);

type IModelKey = 'Message' | 'Room' | 'RoomTag' | 'Tag' | 'User' | 'UserRoomInteraction' | 'UserTag';

type IModel = {
  associate: (db: { [key in IModelKey]?: IModel }) => void;
} & ModelStatic<Model>;

type IModels = {
  [key in IModelKey]?: IModel;
};

const basename = path.basename(__filename);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const db: IModels = {};

fs.readdirSync(__dirname)
  .filter(file => {
    return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.ts';
  })
  .forEach(file => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const model: IModel = require(path.join(__dirname, file))(sequelize, DataTypes);
    db[model.name as IModelKey] = model;
  });

let modelName: IModelKey;
for (modelName in db) {
  if (db[modelName]?.associate) {
    db[modelName]?.associate(db);
  }
}

export { sequelize, IModels, IModel };
export default db;
