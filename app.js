const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('public'));

let tasks = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', { tasks });
});

app.post('/add', (req, res) => {
  const task = req.body.task;
  if (task) tasks.push(task);
  res.redirect('/');
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));