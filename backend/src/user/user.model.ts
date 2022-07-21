import { CreationOptional, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import { IFields, IModels } from 'shared/database/types';
import Audience from 'shared/auth/audience';
import bcrypt from 'bcrypt';
import { IJwtOptions } from './types';
import jwt from 'jsonwebtoken';

// eslint-disable-next-line no-use-before-define
class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  declare id: CreationOptional<number>;
  declare firstName: string;
  declare lastName: string;
  declare username: string;
  declare password: string;
  declare refreshToken: CreationOptional<string>;

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

      refreshToken: {
        type: STRING,
        allowNull: true,
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

  static hooks() {
    return {
      beforeCreate(user: User) {
        return user._hashPassword();
      },
    };
  }

  passwordCompare(password: string) {
    return bcrypt.compare(password, this.password);
  }

  async generateTokens() {
    const accessToken = this._generateAccessToken();
    const refreshToken = this._generateRefreshToken();

    this.refreshToken = refreshToken;
    await this.save();

    return { accessToken, refreshToken };
  }

  private async _hashPassword() {
    const saltRounds = Number(process.env.SALT_ROUNDS as string);
    const hash = await bcrypt.hash(this.password, saltRounds);
    this.password = hash;
  }

  private _generateAccessToken() {
    const secret = process.env.ACCESS_TOKEN_SECRET || '';
    const options = {
      audience: Audience.Scope.Access,
      expiresIn: process.env.ACCESS_TOKEN_DURATION,
    };

    return this._generateToken(secret, options);
  }

  private _generateRefreshToken() {
    const secret = process.env.REFRESH_TOKEN_SECRET || '';
    const options = {
      audience: Audience.Scope.Refresh,
      expiresIn: process.env.REFRESH_TOKEN_DURATION,
    };

    return this._generateToken(secret, options);
  }

  private _generateToken(secret: string, options: IJwtOptions) {
    const { id, username } = this;
    const payload = { id, username };

    return jwt.sign(payload, secret, options);
  }
}

export default User;
