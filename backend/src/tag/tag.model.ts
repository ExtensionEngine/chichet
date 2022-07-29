import { IFields, IModels } from 'shared/database/types';
import { ITag } from './types';
import { Model } from 'sequelize';
import { User } from 'shared/database';

class Tag extends Model implements ITag {
  id!: number;
  label!: string;
  users!: typeof User[];

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

  static associate({ Room, RoomTag, User, UserTag }: IModels) {
    this.hasMany(UserTag, {
      foreignKey: { name: 'tagId', field: 'tagId' },
    });
    this.belongsToMany(User, {
      through: UserTag,
      foreignKey: { name: 'tagId', field: 'tagId' },
    });

    this.hasMany(RoomTag, {
      foreignKey: { name: 'tagId', field: 'tagId' },
    });
    this.belongsToMany(Room, {
      through: RoomTag,
      foreignKey: { name: 'tagId', field: 'tagId' },
    });
  }

  static dbOptions() {
    return {
      modelName: 'tag',
      tableName: 'tags',
      timestamps: false,
    };
  }
}

export default Tag;
