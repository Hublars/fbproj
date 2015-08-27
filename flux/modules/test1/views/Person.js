var React    = require('react');

var Person = React.createClass({
  render: function() {
    return React.createElement('li', {},
      'This is persons name is ' + this.props.person.get('name')
    );
  }
});

module.exports = Person;
