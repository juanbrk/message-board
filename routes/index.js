var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  },
  {
    text: "What up!",
    user: "Ricardo",
    added: new Date()
  },
  {
    text: "Lil PIMP!",
    user: "Donald",
    added: new Date()
  },
  {
    text: "Sweet Lord!",
    user: "Charlie",
    added: new Date()
  },
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Message board', messages });
});

router.get('/new', function(req, res, next) {
  res.render('form', { title: 'Add a new message' });
});

router.post('/new', function(req, res, next) {
  let newMessage = {
    text: req.body.message,
    user: req.body.author,
    added: new Date()
  }
  messages.push(newMessage);
  res.redirect('/');
});
module.exports = router;
