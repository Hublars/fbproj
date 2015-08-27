var React = require('react'),
    FluxBone = require('fluxbone'),
    Test1cv = require('./modules/test1/ControlView');

var Page = React.createClass({
  mixins: [
    FluxBone.Mixin('coll'),
    React.PureRenderMixin
  ],

  render: function() {
    //console.log(this.props.coll.at(0).get('name'));
    return (
      <div>
        <h1>TESTING</h1>
        <h2>People {this.props.coll.at(0).get('name')}</h2>
        <button onClick={this.props.changeFunc}>CHANGE</button>
        <Test1cv label="Testing module" />
      </div>
    );
  }
});

module.exports = Page;
