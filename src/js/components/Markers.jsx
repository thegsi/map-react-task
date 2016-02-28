var React       = require('react');
var Component = require('react').Component;

var Markers = React.createClass({
  
  render: function() {
    return (
      <div>
        {this.props.content}
      </div>
    );
  }
});

module.exports = Markers;
