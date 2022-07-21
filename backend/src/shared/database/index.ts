import { Attributes, DataTypes, Model, ModelStatic, Sequelize } from 'sequelize';
import { forEach, invoke } from 'lodash';
import { Hooks } from 'sequelize/types/hooks';
import { IModels } from './types';

import MessageModel from 'message/message.model';
import RoomModel from 'room/room.model';
import RoomTagModel from 'roomTag/roomTag.model';
import TagModel from 'tag/tag.model';
import UserModel from 'user/user.model';
import UserRoomInteractionModel from 'userRoomInteraction/userRoomInteraction.model';
import UserTagModel from 'userTag/userTag.model';

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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function defineModel(Model: any) {
  const fields = invoke(Model, 'fields', DataTypes, sequelize) || {};
  const dbOptions = invoke(Model, 'dbOptions', sequelize) || {};
  Object.assign(dbOptions, { sequelize });
  return Model.init(fields, dbOptions);
}

forEach(models, model => {
  invoke(model, 'associate', models);
  addHooks(model, models);
  addScopes(model);
});

function addHooks(model: ModelStatic<Model>, models: IModels) {
  const hooks = invoke(model, 'hooks', models);
  forEach(hooks, (hook, type) => model.addHook(type as Attributes<Hooks>, hook));
}

function addScopes(model: ModelStatic<Model>) {
  const scopes = invoke(model, 'scopes', models);
  forEach(scopes, (scope, name) => model.addScope(name, scope, { override: true }));
}

const { Message, Room, RoomTag, Tag, User, UserRoomInteraction, UserTag } = models;

export { Message, Room, RoomTag, Tag, User, UserRoomInteraction, UserTag };

export default sequelize;
