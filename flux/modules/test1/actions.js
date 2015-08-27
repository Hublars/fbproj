var AppDispatcher = require('../../AppDispatcher'),
    appConstants  = require('../../appConstants');

var actions = {
  action_1: function(item) {
    //console.log('actions functions');
    AppDispatcher.handleViewAction({
      actionType: appConstants.CONSTANT_1,
      data: item
    });
  }
};

module.exports = actions;
