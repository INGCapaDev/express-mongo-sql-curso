import mongoose from 'mongoose';
import mongooseDelete from 'mongoose-delete';

const StorageScheme = new mongoose.Schema(
  {
    url: { type: String },
    filename: { type: String },
  },
  {
    timestamps: true, //TODO createAt, updatedAt
    versionKey: false,
  }
);

StorageScheme.plugin(mongooseDelete, { overrideMethods: 'all' });
export const storagesModelMongo = mongoose.model('storages', StorageScheme);
