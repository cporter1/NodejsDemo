const express = require('express');
const people = require('./people.json');
const app = express();

app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));

const server = app.listen (7000, () => {
	console.log('Express running -> PORT ${server.address().port}')
});

app.get('/profile', (req, res) => {
  res.send(req.query.id);
});

app.get('/' , (req, res) => {
	res.render('index', {
            title: 'Homepage',
            people: people.profiles
               });
});