var React = require('react');
var Component = require('react').Component;
var PropTypes = require('react').PropTypes;
//import React {Component, PropTypes} from 'react'; Needs sorted  OUT!!!

var Square = React.createClass({

  render: function(){

    var squareStyle = {
      backgroundColor: this.props.black,
       color: this.props.black,
       width: '5em',
       height: '5em'
    };

    return (
      <div style={squareStyle}> {this.props.children} </div>
    );

  }

});


module.exports = Square;
// module.exports = {
//  Square,
//   Components:{
//     Square
//   }
// }
