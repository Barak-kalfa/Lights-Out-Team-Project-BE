require('dotenv').config(); // loads environment variables from .env (process.env.VAR_NAME)
const express = require('express');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const { userRouter } = require('./routers/user-router');
const { scoreRouter } = require('./routers/score-router');
const { gridRouter } = require('./routers/grid-router');

const app = express();

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json()); // handle requests that have Content-Type: application/json
app.use(express.urlencoded({ extended: true })); // handles parsing of forms
app.use(cookieParser());

app.use(express.static(path.join(__dirname)));

// ROUTERS
app.use('/users', userRouter);
app.use('/scores', scoreRouter);
app.use('/grids', gridRouter);

mongoose.set('strictQuery', true);
mongoose.connection.on('error', (err) => console.error(err));
mongoose.connection.once('open', () => console.log('Connected to MongoDB'));
mongoose.connect(process.env.MONGO_URI);

const PORT = process.env.MODE === 'production' ? process.env.PROD_PORT : process.env.DEV_PORT;

app.listen(PORT, () => {
  console.log(`Server in ${process.env.MODE} mode, listening on port: ${PORT}`);
});
