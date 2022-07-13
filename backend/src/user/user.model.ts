import { IFields, IModels } from 'shared/database/types';
import bcrypt from 'bcrypt';
import { IUser } from './types';
import { Model } from 'sequelize';

class User extends Model implements IUser {
  id!: number;
  username!: string;
  password!: string;

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

      username: {
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

  static associate({ Message, Tag, Room, UserRoomInteraction, UserTag }: IModels) {
    this.hasMany(UserTag, {
      foreignKey: { name: 'userId', field: 'userId' },
    });
    this.belongsToMany(Tag, {
      through: UserTag,
      foreignKey: { name: 'userId', field: 'userId' },
    });

    this.hasMany(Message, {
      foreignKey: { name: 'userId', field: 'userId' },
    });
    this.belongsToMany(Room, {
      through: Message,
      foreignKey: { name: 'userId', field: 'userId' },
    });

    this.hasMany(UserRoomInteraction, {
      foreignKey: { name: 'userId', field: 'userId' },
    });
    this.belongsToMany(Room, {
      through: UserRoomInteraction,
      foreignKey: { name: 'userId', field: 'userId' },
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
      modelName: 'user',
      tableName: 'users',
      timestamps: false,
    };
  }

  passwordCompare(password: string) {
    return bcrypt.compare(password, this.password);
  }
}

export default User;
