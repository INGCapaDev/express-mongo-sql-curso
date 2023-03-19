import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import { dbConnect } from './config/mongo.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * Here call routes! 🤖
 */
import { router } from './routes/index.js';
// TODO localhost/api/______
app.use('/api', router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listen on port ${port}`);
});

dbConnect();
