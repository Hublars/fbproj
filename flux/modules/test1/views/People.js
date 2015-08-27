var React  = require('react'),
    Person = require('./Person');

var People = React.createClass({
  render: function() {
    return React.createElement('ul', {},
      this.props.people.models.map(function(person) {
        return li = React.createElement(Person, {
          key: person.cid,
          person: person
        });
      }))
  }
});

module.exports = People;
