import { DataType, Model, Sequelize } from 'sequelize';

module.exports = (sequelize: Sequelize, DataTypes: { [key: string]: DataType }) => {
  class UserRoomInteraction extends Model {}
  UserRoomInteraction.init(
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

      joinedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },

      leftAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'UserRoomInteraction',
      tableName: 'userRoomInteractions',
      timestamps: false,
    },
  );

  return UserRoomInteraction;
};
