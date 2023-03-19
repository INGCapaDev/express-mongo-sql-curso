import mongoose from 'mongoose';

const TrackScheme = new mongoose.Schema(
  {
    name: { type: String },
    album: { type: String },
    cover: {
      type: String,
      validate: { validator: (req) => true, message: 'ERROR_URL' },
    },
    artist: {
      name: { type: String },
      nickname: { type: String },
      nationality: { type: String },
    },
    duration: {
      start: { type: Number },
      end: { type: Number },
    },
    mediaId: { type: mongoose.Types.ObjectId },
  },
  {
    timestamps: true, //TODO createAt, updatedAt
    versionKey: false,
  }
);

export const tracksModelMongo = mongoose.model('tracks', TrackScheme);
