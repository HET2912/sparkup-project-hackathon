const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ "users":["userOne", "userTwo", "userThree"] });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});