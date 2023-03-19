import mongoose from 'mongoose';

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

export const storagesModelMongo = mongoose.model('storages', StorageScheme);
