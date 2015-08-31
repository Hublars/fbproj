var AppDispatcher = require('../../AppDispatcher'),
    appConstants  = require('../../appConstants');

var actions = {
  action_collection: function(item) {
    AppDispatcher.handleViewAction({
      actionType: appConstants.FETCH_COLLECTION,
      data: item
    });
  },
  action_model: function(item) {
    AppDispatcher.handleViewAction({
      actionType: appConstants.FETCH_MODEL,
      data: item
    });
  }
};

module.exports = actions;
