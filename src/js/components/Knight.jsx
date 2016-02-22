var React = require('react');
var PropTypes = React.PropTypes;
var ItemTypes = require('./Constants.jsx');

var DragSource = require('react-dnd').DragSource;

var knightSource = {
  beginDrag: function(props){

    return {};
  }
};

function collect (connect, monitor){
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
};

var Knight = React.createClass({
  // propTypes: {
  //   connectDragSource: PropTypes.func.isRequired,
  //   isDragging: PropTypes.bool.isRequired
  // },

  render: function() {
    var connectDragSource = this.props.connectDragSource;
    var isDragging = this.props.isDragging;

    var knightColour = (this.props.color === "black") ? "white" : "black";
    var knightStyle = {
          opacity: isDragging ? 0.5 : 1,
          backgroundColor: "#433",
          fontSize: "3em",
          cursor: 'move'
        };
    return connectDragSource( <span style={knightStyle}>♘</span> );
  }
});

//module.exports = Knight;
module.exports = DragSource(ItemTypes.KNIGHT, knightSource, collect)(Knight)
