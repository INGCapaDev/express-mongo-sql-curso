import mongoose from 'mongoose';

const UserScheme = new mongoose.Schema(
  {
    name: { type: String },
    age: { type: Number },
    email: { type: String, unique: true },
    password: { type: String },
    role: { type: ['User', 'Admin'], default: 'User' },
  },
  {
    timestamps: true, //TODO createAt, updatedAt
    versionKey: false,
  }
);

export const usersModelMongo = mongoose.model('users', UserScheme);
