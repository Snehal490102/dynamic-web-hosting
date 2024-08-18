// index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello Snehal,this is dynamic hosting !');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
