import { IFields } from 'models/types';
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

  static dbOptions() {
    return {
      modelName: 'Room',
      tableName: 'rooms',
      timestamps: false,
    };
  }
}

export default Room;
