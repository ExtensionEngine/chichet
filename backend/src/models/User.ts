import { DataTypes } from 'sequelize/types';
import sequelize from 'db';

const User = sequelize.define(
  'User',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    firstName: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    lastName: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    nickame: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  },
);
