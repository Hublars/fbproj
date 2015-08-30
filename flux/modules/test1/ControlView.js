var React    = require('react'),
    FluxBone = require('fluxbone'),
    store    = require('./store'),
    actions  = require('./actions'),
    People   = require('./views/People');

var ControlView = React.createClass({
  getDefaultProps: function() {
    return {
      coll: store
    }
  },

  mixins: [
    FluxBone.Mixin('coll'),
    React.PureRenderMixin
  ],

  func1: function() {
    actions.action_1({ name: 'Ricky' });
  },

  logStore: function() {
    console.log(store.at(0).get('name'));
  },

  tryColl: function() {
    //<h2>name: {this.props.coll.at(0).get('name')}</h2>
  },

  render: function() {
    return (
      <div>
        <h1>{this.props.label}</h1>
        <button onClick={this.func1}>Change name</button>
        <button onClick={this.logStore}>Log store</button>
        <People people={store} />
      </div>
    );
  }
});

module.exports = ControlView;
