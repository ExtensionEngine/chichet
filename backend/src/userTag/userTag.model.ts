import { IFields, IModels } from 'shared/database/types';
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

  static associate({ Tag, User }: IModels) {
    this.belongsTo(Tag, {
      foreignKey: { name: 'tagId', field: 'tagId' },
    });

    this.belongsTo(User, {
      foreignKey: { name: 'userId', field: 'userId' },
    });
  }

  static dbOptions() {
    return {
      modelName: 'userTag',
      tableName: 'userTags',
      timestamps: false,
      uniqueKeys: {
        user_tags_unique: {
          fields: ['userId', 'tagId'],
        },
      },
    };
  }
}

export default UserTag;
