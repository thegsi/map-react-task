var React = require('react');
var PropTypes = React.PropTypes;
var Square = require('./Square.jsx');
var Knight      = require('./Knight.jsx');
var ItemTypes = require('./Constants.jsx');
var DropTarget = require('react-dnd').DropTarget;


var squareTarget = {
  canDrop: function (props) {
    var x = props.x;
    var y = props.y;
    return props.canMoveKnight(x, y);
  },
  drop: function (props, monitor) {
    var x = props.x;
    var y = props.y;
    props.moveKnight(x, y);
    return {};
  }
};

function collect (connect, monitor){

  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

var BoardSquare = React.createClass ({
  // propTypes:{
  //   x: PropTypes.number.isRequired,
  //   y: PropTypes.number.isRequired
  // },


  render: function () {

    var x = this.props.x;
    var y = this.props.y;
    var i = this.props.i;
    var black = this.props.black;
    var connectDropTarget = this.props.connectDropTarget;
    var isOver = this.props.isOver;

    return connectDropTarget (
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%'
      }} >
          <Square key ={i}
                  x={x}
                  y={y}
                  black={black} >
            {this.props.children}
          </Square>
        {isOver &&
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            zIndex: 1,
            opacity: 0.5,
            backgroundColor: 'yellow',
          }} />
        }
      </div>
    );
  }
});

module.exports = DropTarget(ItemTypes.KNIGHT, squareTarget, collect)(BoardSquare);
