const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();
const notFound = require('./middlewares/notFound');
const errorHandlerMiddleware = require('./middlewares/errorHandler');

// Middlewares
app.use(express.static('./public'));
app.use(express.json());

// Routes

app.use('/api/v1/tasks', tasks);

// REST - representational state transfer
// GUI

app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server listening at port: ${port}...`);
    });
  } catch (error) {
    console.log(`ERROR: ${error}`);
  }
};

start();
