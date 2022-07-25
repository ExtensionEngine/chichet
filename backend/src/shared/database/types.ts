import { DataType } from 'sequelize';

import Message from 'message/message.model';
import Room from 'room/room.model';
import RoomTag from 'roomTag/roomTag.model';
import Tag from 'tag/tag.model';
import User from 'user/user.model';
import UserRoomInteraction from 'userRoomInteraction/userRoomInteraction.model';
import UserTag from 'userTag/userTag.model';

interface IFields {
  DATE?: DataType;
  INTEGER?: DataType;
  STRING?: DataType;
  TEXT?: DataType;
  VIRTUAL?: DataType;
}

type IModels = {
  Message: typeof Message;
  Room: typeof Room;
  RoomTag: typeof RoomTag;
  Tag: typeof Tag;
  User: typeof User;
  UserRoomInteraction: typeof UserRoomInteraction;
  UserTag: typeof UserTag;
};

export { IFields, IModels };
