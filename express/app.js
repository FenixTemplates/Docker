const express = require('express');
const exphbs = require('express-handlebars');
const port = 8080;

const app = express();

app.engine('.hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', '.hbs');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(port, () => {
  console.log(`Server started: http://localhost:${port}/`);
});