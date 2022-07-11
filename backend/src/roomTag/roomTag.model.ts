import { IFields } from 'shared/database/types';
import { Model } from 'sequelize';

class RoomTag extends Model {
  static fields({ INTEGER }: IFields) {
    return {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      roomId: {
        type: INTEGER,
        allowNull: false,
      },

      tagId: {
        type: INTEGER,
        allowNull: false,
      },
    };
  }

  static dbOptions() {
    return {
      modelName: 'RoomTag',
      tableName: 'roomTags',
      timestamps: false,
    };
  }
}

export default RoomTag;
