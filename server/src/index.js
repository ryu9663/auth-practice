const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');
const hello = require('./route');
const auth = require('./route/api/auth');
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  cors({
    origin: ['http://localhost:3000'],
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS', 'DELETE', 'PUT', 'PATCH'],
  })
);

app.get('/', (req, res) => {
  console.log(process.env.REST_API_KEY);
  res.send('Hello World!');
});

app.get('/hello', hello);

app.post('/auth', auth);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
