const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static HTML file (index.html)
app.use(express.static(__dirname));

// Handle form submission
app.post('/', (req, res) => {
  const formData = req.body;
  console.log("Registration Received:");
  console.log(formData);

  res.send(`<h2>Thanks for registering, ${formData.name}!</h2>`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
