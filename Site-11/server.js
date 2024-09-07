const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'site-11.html'));
});

// Example route for other static files
app.get('/css/:file', (req, res) => {
  res.sendFile(path.join(__dirname, 'css', req.params.file));
});

app.get('/js/:file', (req, res) => {
  res.sendFile(path.join(__dirname, 'js', req.params.file));
});

app.get('/images/:file', (req, res) => {
  res.sendFile(path.join(__dirname, 'images', req.params.file));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
