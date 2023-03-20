import mongoose from 'mongoose';
import mongooseDelete from 'mongoose-delete';

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

UserScheme.plugin(mongooseDelete, { overrideMethods: 'all' });
export const usersModelMongo = mongoose.model('users', UserScheme);
