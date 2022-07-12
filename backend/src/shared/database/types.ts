import { DataType, Model, ModelStatic } from 'sequelize';

interface IFields {
  DATE?: DataType;
  INTEGER?: DataType;
  STRING?: DataType;
  TEXT?: DataType;
  VIRTUAL?: DataType;
}

type IModelKey = 'Message' | 'Room' | 'RoomTag' | 'Tag' | 'User' | 'UserRoomInteraction' | 'UserTag';

type IModels = {
  [key in IModelKey]: ModelStatic<Model>;
};

export { IFields, IModels };
