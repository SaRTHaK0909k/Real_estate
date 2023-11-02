// index.js
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Userrouter from './routes/user.route.js';
import Authrouter from './routes/auth.route.js'

dotenv.config();

const app = express();

// Middleware for parsing JSON
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// Use the Userrouter
app.use('/api/user',Userrouter);
app.use('/api/auth',Authrouter);
