import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Product } from './models/product.js';

dotenv.config();

const products = [
  {
    title: 'apple',
    category: 'fruit',
    calories: 52,
    weight: 100,
    groupBloodNotAllowed: [false, false, false, false],
  },
  {
    title: 'banana',
    category: 'fruit',
    calories: 89,
    weight: 100,
    groupBloodNotAllowed: [false, false, false, false],
  },
  {
    title: 'orange',
    category: 'fruit',
    calories: 47,
    weight: 100,
    groupBloodNotAllowed: [false, false, false, false],
  },
  {
    title: 'rice',
    category: 'grain',
    calories: 130,
    weight: 100,
    groupBloodNotAllowed: [false, false, false, false],
  },
  {
    title: 'chicken breast',
    category: 'meat',
    calories: 165,
    weight: 100,
    groupBloodNotAllowed: [false, false, false, false],
  },
  {
    title: 'egg',
    category: 'protein',
    calories: 155,
    weight: 100,
    groupBloodNotAllowed: [false, false, false, false],
  },
  {
    title: 'milk',
    category: 'dairy',
    calories: 42,
    weight: 100,
    groupBloodNotAllowed: [false, true, false, true],
  },
  {
    title: 'bread',
    category: 'grain',
    calories: 265,
    weight: 100,
    groupBloodNotAllowed: [true, false, false, false],
  },
  {
    title: 'potato',
    category: 'vegetable',
    calories: 77,
    weight: 100,
    groupBloodNotAllowed: [false, false, false, false],
  },
  {
    title: 'tomato',
    category: 'vegetable',
    calories: 18,
    weight: 100,
    groupBloodNotAllowed: [false, false, false, false],
  },
];

const seedProducts = async () => {
  try {
    if (!process.env.MONGODB_URL) {
      throw new Error('MONGODB_URL is missing in .env');
    }

    await mongoose.connect(process.env.MONGODB_URL);

    await Product.deleteMany({});
    await Product.insertMany(products);

    console.log(`Products seeded successfully. Count: ${products.length}`);

    await mongoose.disconnect();
    process.exit(0);
  } catch (error) {
    console.error('Product seed failed:', error.message);
    await mongoose.disconnect();
    process.exit(1);
  }
};

seedProducts();