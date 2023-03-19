import mongoose from 'mongoose';

const StorageScheme = new mongoose.Schema(
  {
    url: { type: String },
    filename: { type: Number },
  },
  {
    timestamps: true, //TODO createAt, updatedAt
    versionKey: false,
  }
);

export const storagesModel = mongoose.model('storages', StorageScheme);
