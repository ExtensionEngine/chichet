import { Model, ModelStatic } from 'sequelize';

type IModelKey = 'Message' | 'Room' | 'RoomTag' | 'Tag' | 'User' | 'UserRoomInteraction' | 'UserTag';

type IModel = {
  associate: (db: { [key in IModelKey]?: IModel }) => void;
} & ModelStatic<Model>;

type IModels = {
  [key in IModelKey]?: IModel;
};

export { IModelKey, IModel, IModels };
