import { DataTypes } from 'sequelize';
import sequelize from 'models';

const Room = sequelize.define(
  'Room',
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
    tableName: 'rooms',
    timestamps: false,
    underscored: true,
  },
);

export default Room;
