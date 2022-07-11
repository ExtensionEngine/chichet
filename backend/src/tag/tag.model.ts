import { IFields, IModels } from 'shared/database/types';
import { Model } from 'sequelize';

class Tag extends Model {
  static fields({ INTEGER, STRING }: IFields) {
    return {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      label: {
        type: STRING,
        allowNull: false,
        unique: true,
      },
    };
  }

  static associate({ User, UserTag }: IModels) {
    this.hasMany(UserTag, {
      foreignKey: { name: 'tagId', field: 'tagId' },
    });
    this.belongsToMany(User, {
      through: UserTag,
      foreignKey: { name: 'tagId', field: 'tagId' },
    });
  }

  static dbOptions() {
    return {
      modelName: 'Tag',
      tableName: 'tags',
      timestamps: false,
    };
  }
}

export default Tag;
