import { sequelize } from '../../config/mysql.js';
import { DataTypes } from 'sequelize';

export const usersModelMySql = sequelize.define(
  'users',
  {
    name: { type: DataTypes.STRING, allowNull: false },
    age: { type: DataTypes.NUMBER },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    role: { type: DataTypes.ENUM(['User', 'Admin']) },
  },
  {
    timestamps: true, //TODO createAt, updatedAt
  }
);
