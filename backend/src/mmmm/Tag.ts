import { DataTypes } from 'sequelize';
import sequelize from 'models';

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
    tableName: 'tags',
    timestamps: false,
    underscored: true,
  },
);

export default Tag;
