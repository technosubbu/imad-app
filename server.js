var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/in', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'contact.html'));
});

app.get('/con', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'contact.html'));
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'about.html'));
});

app.get('/ab', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'about.html'));
});

app.get('/ui/css/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/css', 'style.css'));
});

app.get('/ui/css/plugin.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/css', 'plugin.css'));
});

app.get('/ui/images/bg/pattern-bg.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/images/bg', 'pattern-bg.png'));
});

app.get('/ui/images/favicon/appli-touch-icon.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/images/favicon', 'apple-touch-icon.png'));
});

app.get('/ui/images/favicon/favicon1.ico', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/images/favicon', 'favicon1.ico'));
});

app.get('/ui/images/pic/SubramaniyaSiva.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/images/pic', 'SubramaniyaSiva.jpg'));
});

app.get('/ui/js/jquery.min.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/js', 'jquery.min.js'));
});

app.get('/ui/js/plugin.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/js', 'plugin.js'));
});

app.get('/ui/js/scripts.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/js', 'scripts.js'));
});

app.get('/ui/fonts/FontAwesome.otf', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/fonts', 'FontAwesome.otf'));
});

app.get('/ui/fonts/fontawesome-webfont.eot', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/fonts', 'fontawesome-webfont.eot'));
});

app.get('/ui/fonts/fontawesome-webfont.svg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/fonts', 'fontawesome-webfont.svg'));
});

app.get('/ui/fonts/fontawesome-webfont.ttf', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/fonts', 'fontawesome-webfont.ttf'));
});

app.get('/ui/fonts/fontawesome-webfont.woff', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/fonts', 'fontawesome-webfont.woff'));
});

app.get('/ui/fonts/fontawesome-webfont.woff2', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/fonts', 'fontawesome-webfont.woff2'));
});

app.get('/ui/fonts/Simple-Line-Icons.eot', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/fonts', 'Simple-Line-Icons.eot'));
});

app.get('/ui/fonts/Simple-Line-Icons.svg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/fonts', 'Simple-Line-Icons.svg'));
});


app.get('/ui/fonts/Simple-Line-Icons.ttf', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/fonts', 'Simple-Line-Icons.ttf'));
});

app.get('/ui/fonts/Simple-Line-Icons.woff', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/fonts', 'Simple-Line-Icons.woff'));
});


app.get('/ui/fonts/Simple-Line-Icons.woff2', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/fonts', 'Simple-Line-Icons.woff2'));
});
// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
