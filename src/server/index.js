const express = require('express');
const os = require('os');
const mongoose = require('mongoose');
const DB = require('./config/database.js');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
mongoose.connect(DB.MONGO_URL);
mongoose.set('debug', true);

app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));
app.use('/api', require('./routes/manga'));

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
