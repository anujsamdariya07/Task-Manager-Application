const express = require('express');
const app = express();
const tasks = require('./routes/tasks')

app.get('/hello', (req, res) => {
  res.send('Task Manager App');
});

// Middleware
app.use(express.json())

// Routes
app.use('/api/v1/tasks', tasks)

const port = 3000;

app.listen(port, () => {
  console.log(`Server listening at port: ${port}...`);
});
