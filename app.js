require('dotenv').config(); // loads environment variables from .env (process.env.VAR_NAME)
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { userRouter } = require('./routers/user-router');

const app = express();

app.use(cors());
app.use(express.json()); // handle requests that have Content-Type: application/json
app.use(express.urlencoded({ extended: true })); // handles parsing of forms

// ROUTERS
app.use('/user', userRouter);

mongoose.set('strictQuery', true);
mongoose.connection.on('error', (err) => console.error(err));
mongoose.connection.once('open', () => console.log('Connected to MongoDB'));
mongoose.connect(process.env.MONGO_URI);

const PORT = process.env.MODE === 'production' ? process.env.PROD_PORT : process.env.DEV_PORT;

app.listen(PORT, () => {
  console.log(`Server in ${process.env.MODE} mode, listening on port: ${PORT}`);
});
