import { IFields, IModels } from 'shared/database/types';
import { Model } from 'sequelize';

class Room extends Model {
  static fields({ INTEGER, STRING }: IFields) {
    return {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      title: {
        type: STRING,
        allowNull: false,
      },

      description: {
        type: STRING,
        allowNull: false,
      },
    };
  }

  static associate({ Message, RoomTag, Tag, User, UserRoomInteraction }: IModels) {
    this.hasMany(RoomTag, {
      foreignKey: { name: 'roomId', field: 'roomId' },
    });
    this.belongsToMany(Tag, {
      through: RoomTag,
      foreignKey: { name: 'roomId', field: 'roomId' },
    });

    this.hasMany(Message, {
      foreignKey: { name: 'roomId', field: 'roomId' },
    });
    this.belongsToMany(User, {
      through: Message,
      foreignKey: { name: 'roomId', field: 'roomId' },
    });

    this.hasMany(UserRoomInteraction, {
      foreignKey: { name: 'roomId', field: 'roomId' },
    });
    this.belongsToMany(User, {
      through: UserRoomInteraction,
      foreignKey: { name: 'roomId', field: 'roomId' },
    });
  }

  static dbOptions() {
    return {
      modelName: 'room',
      tableName: 'rooms',
      timestamps: false,
    };
  }
}

export default Room;
