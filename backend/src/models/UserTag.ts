import { IFields } from 'models/types';
import { Model } from 'sequelize';

class UserTag extends Model {
  static fields({ INTEGER }: IFields) {
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

      tagId: {
        type: INTEGER,
        allowNull: false,
      },
    };
  }

  static dbOptions() {
    return {
      modelName: 'UserTag',
      tableName: 'userTags',
      timestamps: false,
    };
  }
}

export default UserTag;
