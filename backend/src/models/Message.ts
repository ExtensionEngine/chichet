import { DataType, Model, Sequelize } from 'sequelize';
import { IModel } from './types/models';

module.exports = (sequelize: Sequelize, DataTypes: { [key: string]: DataType }) => {
  class Message extends Model {
    static associate({ User, Room }: { User: IModel; Room: IModel }) {
      User.belongsToMany(Room, { through: 'Message' });
    }
  }
  Message.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      roomId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Message',
      tableName: 'messages',
      timestamps: false,
    },
  );

  return Message;
};
