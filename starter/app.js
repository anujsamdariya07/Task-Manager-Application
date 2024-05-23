const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();

// Middlewares
app.use(express.static('./public'));
app.use(express.json());

// Routes

app.use('/api/v1/tasks', tasks);

// REST - representational state transfer
// GUI

app.use()

const port = 3000;

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
