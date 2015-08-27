var Backbone      = require('backbone'),
    AppDispatcher = require('../../AppDispatcher'),
    appConstants  = require('../../appConstants');

var Person = Backbone.Model.extend({
  defaults: {
    name: 'Bubba',
    age: 0
  }
});

var People = Backbone.Collection.extend({
  model: Person,
  //url: './people.json',
  initialize: function() {
    AppDispatcher.register(function(payload) {
      var action = payload.action;
      switch(action.actionType) {
        case appConstants.CONSTANT_1:
          p1.set({ name: action.data.name });
          break;
        default:
          return true;
      }
    });
  }
});

var p1 = new Person();
var p2 = new Person();
p2.set({ name: 'Conny' });

var Store = new People(
  //p1,
  //p2
);
Store.add(p1);
Store.add(p2);

module.exports = Store;
