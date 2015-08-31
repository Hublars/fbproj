var Backbone      = require('backbone'),
    AppDispatcher = require('../../AppDispatcher'),
    appConstants  = require('../../appConstants');

var Person = Backbone.Model.extend({
  url: '/person',
  defaults: {
    name: 'Bubba',
    age: 0,
    job: 'none'
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
        case appConstants.FETCH_COLLECTION:
          fetchCollection();
          //p1.set({ name: action.data.name });
          break;
        case appConstants.FETCH_MODEL:
          fetchModel();
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

var fetchModel = function() {
  Store.at(0).fetch({
    success: fetchSuccess,
    error: fetchFail
  });
}

var fetchCollection = function() {
  //console.log('Store.models');
  //console.log(Store.models);
  Store.fetch({
    success: fetchSuccess,
    error: fetchFail
  });
  //console.log('Store.models');
  //console.log(Store.models);
}
var fetchSuccess = function(collection, response) {
  console.log('success');
  console.log(collection);
  console.log(response);
}
var fetchFail = function(collection, response) {
  console.log('fail');
  console.log(collection);
  console.log(response);
}

module.exports = Store;
