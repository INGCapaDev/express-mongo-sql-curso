import mongoose from 'mongoose';

export const dbConnectMongo = async () => {
  const DB_URI = process.env.DB_URI;
  try {
    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('SUCCESS_MONGODB_CONNECTION');
  } catch (error) {
    console.log('ERROR_MONGODB_CONNECTION');
  }
};
