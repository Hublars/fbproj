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
  //console.log('router get people');
  var arr = [ { 'name': 'Bonny', 'age': 100 }, { 'name': 'Patty', 'age': 33 } ];
  res.send(JSON.stringify(arr));
});

router.get('/person', function(req, res) {
  //console.log('router get person');
  var obj = { 'job': 'worker' };
  res.send(JSON.stringify(obj));
});

module.exports = router;
