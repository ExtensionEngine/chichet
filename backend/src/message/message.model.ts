import { IFields } from 'shared/database/types';
import { Model } from 'sequelize';

class Message extends Model {
  static fields({ DATE, INTEGER, STRING }: IFields) {
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
        type: STRING,
        allowNull: false,
      },

      createdAt: {
        type: DATE,
        allowNull: false,
      },
    };
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
