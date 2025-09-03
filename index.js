const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/visited-countries', (req, res) => {
  const traveler = req.body['name'];
  const countries = req.body['countries'];

  if (!traveler || !countries) {
    return res
      .status(400)
      .json({ error: 'Missing traveler name or countries list' });
  }
  res.send(
    `Your name is ${traveler} and you have visited ${countries.length} countries.`
  );
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
