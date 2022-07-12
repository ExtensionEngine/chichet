import { IFields, IModels } from 'shared/database/types';
import { Model } from 'sequelize';

class Message extends Model {
  static fields({ DATE, INTEGER, TEXT }: IFields) {
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

      content: {
        type: TEXT,
        allowNull: false,
      },

      createdAt: {
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

  static scopes() {
    return {
      defaultScope: {
        attributes: { exclude: ['roomId'] },
      },
    };
  }

  static dbOptions() {
    return {
      modelName: 'message',
      tableName: 'messages',
      timestamps: false,
    };
  }
}

export default Message;
