import { DataTypes, Model, ModelStatic, Sequelize } from 'sequelize';
import { forEach, invoke } from 'lodash';
import { IModels } from './types';

import MessageModel from './Message';
import RoomModel from './Room';
import RoomTagModel from './RoomTag';
import TagModel from './Tag';
import UserModel from './User';
import UserRoomInteractionModel from './UserRoomInteraction';
import UserTagModel from './UserTag';

const sequelize = new Sequelize(
  process.env.POSTGRES_DB || '',
  process.env.POSTGRES_USER || '',
  process.env.POSTGRES_PASSWORD || '',
  {
    dialect: 'postgres',
    host: process.env.POSTGRES_HOST,
  },
);

const models: IModels = {
  Message: defineModel(MessageModel),
  Room: defineModel(RoomModel),
  RoomTag: defineModel(RoomTagModel),
  Tag: defineModel(TagModel),
  User: defineModel(UserModel),
  UserRoomInteraction: defineModel(UserRoomInteractionModel),
  UserTag: defineModel(UserTagModel),
};

function defineModel(Model: ModelStatic<Model>) {
  const fields = invoke(Model, 'fields', DataTypes, sequelize) || {};
  const dbOptions = invoke(Model, 'dbOptions') || {};
  Object.assign(dbOptions, { sequelize });
  return Model.init(fields, dbOptions);
}

forEach(models, model => {
  invoke(model, 'associate', models);
  addScopes(model);
});

function addScopes(model: ModelStatic<Model>) {
  const scopes = invoke(model, 'scopes', models);
  forEach(scopes, (scope, name) => model.addScope(name, scope, { override: true }));
}

const { Message, Room, RoomTag, Tag, User, UserRoomInteraction, UserTag } = models;

export { Message, Room, RoomTag, Tag, User, UserRoomInteraction, UserTag };

export default sequelize;
