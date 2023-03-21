import express from 'express';
import cors from 'cors';
import './utils/handleEnv.js';

// TODO Databases Connectors
import { dbConnectMongo } from './config/mongo.js';
import { dbConnectMySql } from './config/mysql.js';

const app = express();
const ENGINE_DB = process.env.ENGINE_DB;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('uploads'));

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

ENGINE_DB === 'nosql' ? dbConnectMongo() : dbConnectMySql();
