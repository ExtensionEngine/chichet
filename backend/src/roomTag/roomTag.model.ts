import { IFields, IModels } from 'shared/database/types';
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

  static associate({ Room, Tag }: IModels) {
    this.belongsTo(Room, {
      foreignKey: { name: 'roomId', field: 'roomId' },
    });

    this.belongsTo(Tag, {
      foreignKey: { name: 'tagId', field: 'tagId' },
    });
  }

  static dbOptions() {
    return {
      modelName: 'roomTag',
      tableName: 'roomTags',
      timestamps: false,
    };
  }
}

export default RoomTag;
