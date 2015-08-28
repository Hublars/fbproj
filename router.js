var express    = require('express'),
    React      = require('react'),
    jsx        = require('node-jsx').install(),
    //Page     = React.createFactory(require('./public/classes/Page')),
    Page       = require('./flux/Page.js'),
    component  = React.createElement(Page),
    router     = express.Router();

router.get('/', function(req, res) {

  //var markup = React.renderToString(component);

  res.render('bodyView', {
    //markup: markup
  });
});

router.get('/people', function(req, res) {
  console.log('router get people');
  res.send("[{'name': 'Bonny','age': 100},{'name': 'Patty','age': 33}]");
});

module.exports = router;
