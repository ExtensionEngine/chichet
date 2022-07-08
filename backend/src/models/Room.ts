import { DataType, Model, Sequelize } from 'sequelize';

module.exports = (sequelize: Sequelize, DataTypes: { [key: string]: DataType }) => {
  class Room extends Model {}
  Room.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Room',
      tableName: 'rooms',
      timestamps: false,
    },
  );

  return Room;
};
