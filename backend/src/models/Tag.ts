import { DataTypes } from 'sequelize/types';
import sequelize from 'db';

const Tag = sequelize.define(
  'Tag',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    label: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  },
);
