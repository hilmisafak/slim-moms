import { initMongoConnection } from './db/initMongoConnection.js';
import { startServer } from './server.js';
import dotenv from 'dotenv';

const bootstrap = async () => {
  await initMongoConnection();
  startServer();
};

void bootstrap();
dotenv.config();
