var React       = require('react');
var Component = require('react').Component;

var SimpleMap = require('./SimpleMapRender.jsx');
var GoogleMapsAPI = require('./GoogleMapsAPI.jsx');

var SmartComponent = React.createClass({


render: function(){

  return (
          <div>
            <SimpleMap />
            <GoogleMapsAPI />
          </div>
        )
  }

})

module.exports = SmartComponent;
