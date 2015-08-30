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
  url: '/people',
  parse: function(response) {
    console.log('parse');
    console.log(response);
    //return JSON.parse(response.responseText);
    return response;
  },
  initialize: function() {
    AppDispatcher.register(function(payload) {
      var action = payload.action;
      switch(action.actionType) {
        case appConstants.CONSTANT_1:
          doFetch();
          //p1.set({ name: action.data.name });
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

var Store = new People();
Store.add(p1);
Store.add(p2);

var doFetch = function() {
  console.log('Store.models');
  console.log(Store.models);
  Store.fetch({
    success: fetchSuccess,
    error: fetchFail
  });
  //console.log('Store.models');
  //console.log(Store.models);
}
var fetchSuccess = function(collection, response) {
  console.log('success');
  //console.log('collection');
  console.log(collection);
  //console.log('response');
  console.log(response);
  //console.log(JSON.parse(response.responeText));
}
var fetchFail = function(collection, response) {
  console.log('fail');
  //console.log('collection');
  console.log(collection);
  //console.log('response');
  console.log(response);
  //console.log(JSON.parse(response.responeText));
}

module.exports = Store;
