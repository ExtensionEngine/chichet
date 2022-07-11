import { IFields, IModels } from 'shared/database/types';
import { Model } from 'sequelize';

class User extends Model {
  static fields({ INTEGER, STRING }: IFields) {
    return {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      firstName: {
        type: STRING,
        allowNull: true,
      },

      lastName: {
        type: STRING,
        allowNull: true,
      },

      nickname: {
        type: STRING,
        allowNull: false,
        unique: true,
      },

      password: {
        type: STRING,
        allowNull: false,
      },
    };
  }

  static associate({ Tag, UserTag }: IModels) {
    this.hasMany(UserTag, {
      foreignKey: { name: 'userId', field: 'userId' },
    });
    this.belongsToMany(Tag, {
      through: UserTag,
      foreignKey: { name: 'tagId', field: 'tagId' },
    });
  }

  static scopes() {
    return {
      defaultScope: {
        attributes: { exclude: ['password'] },
      },
    };
  }

  static dbOptions() {
    return {
      modelName: 'User',
      tableName: 'users',
      timestamps: false,
    };
  }
}

export default User;
