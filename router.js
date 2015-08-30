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
  /*res.writeHead(200, {
    'Content-Type': 'text/json'
  });*/
  var arr = [ { 'name': 'Bonny', 'age': 100 }, { 'name': 'Patty', 'age': 33 } ];
  //res.write(JSON.stringify(arr));
  //res.write("[{'name': 'Bonny','age': 100},{'name': 'Patty','age': 33}]");
  //res.end();
  //res.send("[{'name': 'Bonny','age': 100},{'name': 'Patty','age': 33}]");
  //var obj = [{ 'name': 'Shazzy','age': 99 }];
  res.send(JSON.stringify(arr));
});

module.exports = router;
