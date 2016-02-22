var React       = require('react');
var Knight      = require('./Knight.jsx');
var Square      = require('./Square.jsx');

var DragDropContext = require('react-dnd').DragDropContext;
var HTML5Backend = require('react-dnd-html5-backend');

var Board = React.createClass({

    render: function(){
       
       return (
          <div style={{
            width:'40em',
            height:'40em',
            display: 'flex',
            flexWrap: 'wrap'
          }}>
            {this.props.squares}
          </div>
       );

  }

})


//module.exports = Board;
module.exports = DragDropContext(HTML5Backend)(Board);
