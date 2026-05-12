import mongoose from 'mongoose';
import { env } from '../utils/env.js';

export const initMongoConnection = async () => {
  try {
    const url = env('MONGODB_URL');

    await mongoose.connect(url);

    console.log('Mongo connection successfully established!');
  } catch (e) {
    console.log('Error while setting up mongo connection', e);
    throw e;
  }
};
