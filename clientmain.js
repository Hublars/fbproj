var React = require('react'),
    Page  = require('./flux/Page.js'),
    Backbone = require('backbone');

function changeName() {
  //console.log('CHANGE NAME');
  Billy.set({ name: 'Bobo' });
}

//console.log('hej');

var Human = Backbone.Model.extend({
  initialize: function() {
    //console.log('initializing');
  },
  name: 'Billy',
  age: 35
});

var Billy = new Human();
//console.log(Billy);

var Billy2 = new Human();
Billy2.listenTo(Billy, 'change', function() { /*console.log('changing 1');*/ });
Billy.set({ name: 'Brutus' });

var Humans = Backbone.Collection.extend({
  model: Human
});

var people = new Humans([
  Billy,
  Billy2
]);

var Billy3 = new Human();
Billy3.listenTo(people, 'change', function() { /*console.log('changing 2');*/ });
Billy.set({ name: 'Freddy' });

//console.log(people);
//console.log(people.at(0).get('name'));

//console.log('hej då');

function render() {
  var container = document.getElementById('mainSection');
  var component = React.createElement(Page, { coll: people, changeFunc: changeName });
  React.render(component, container);
}

render();
