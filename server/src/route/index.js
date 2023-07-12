const express = require('express');
const router = express.Router();
const app = express();

const hello = (req, res) => {
  res.send({ data: 'hello' });
};

module.exports = hello;
