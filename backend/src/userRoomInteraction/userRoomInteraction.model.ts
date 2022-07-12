import { IFields, IModels } from 'shared/database/types';
import { Model } from 'sequelize';

class UserRoomInteraction extends Model {
  static fields({ DATE, INTEGER }: IFields) {
    return {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      userId: {
        type: INTEGER,
        allowNull: false,
      },

      roomId: {
        type: INTEGER,
        allowNull: false,
      },

      joinedAt: {
        type: DATE,
        allowNull: false,
      },

      leftAt: {
        type: DATE,
        allowNull: false,
      },
    };
  }

  static associate({ Room, User }: IModels) {
    this.belongsTo(Room, {
      foreignKey: { name: 'roomId', field: 'roomId' },
    });

    this.belongsTo(User, {
      foreignKey: { name: 'userId', field: 'userId' },
    });
  }

  static dbOptions() {
    return {
      modelName: 'userRoomInteraction',
      tableName: 'userRoomInteractions',
      timestamps: false,
    };
  }
}

export default UserRoomInteraction;
