import { sequelize } from '../../config/mysql.js';
import { DataTypes } from 'sequelize';

export const storagesModelMySql = sequelize.define(
  'storages',
  {
    url: { type: DataTypes.STRING, allowNull: false },
    filename: { type: DataTypes.STRING },
  },
  {
    timestamps: true, //TODO createAt, updatedAt
  }
);
