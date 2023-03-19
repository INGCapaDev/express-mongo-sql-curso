import mongoose from 'mongoose';

export const dbConnect = async () => {
  const DB_URI = process.env.DB_URI;
  try {
    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('**** Connection succesfully ****');
  } catch (error) {
    console.log('**** Connection error ****');
  }
};
