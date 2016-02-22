var React       = require('react');
var Board       = require('./Board.jsx');
var BoardSquare = require('./BoardSquare.jsx');
var Knight      = require('./Knight.jsx');

// var DragDropContext = require('react-dnd').DragDropContext;
// var HTML5Backend = require('react-dnd-html5-backend');


var SmartComponent = React.createClass({

  getInitialState: function () {
    return {knightPosition: [4,6]}
  },

  canMoveKnight: function(toX, toY){

    const xCurrent = this.state.knightPosition[0];
    const yCurrent = this.state.knightPosition[1];
    const xMove = Math.abs(toX - xCurrent);
    const yMove = Math.abs(toY - yCurrent);

    if ((xMove === 2 && yMove === 1) ||
    (xMove === 1 && yMove === 2)){
      return true;
    }
  },

  moveKnight: function(toX, toY){
    this.setState({
      knightPosition: [toX, toY]
    });
  },


  renderPiece: function (x, y, black) {
    if(x === this.state.knightPosition[0] && y === this.state.knightPosition[1]) {
      return <Knight color={black} /> ;
    }
  },


  renderSquare: function (i){
    const x = i % 8;
    const y = Math.floor(i / 8);
    const black = ((x + y) % 2 === 1) ? "black" : "white";

    const[knightX, knightY] = this.state.knightPosition;


    return (

    <div key ={i}>
      <BoardSquare x={x}
                   y={y}
                   knightX={knightX}
                   knightY={knightY}
                   black={black}
                   i={i}
                   moveKnight={this.moveKnight}
                   canMoveKnight={this.canMoveKnight}>
      {this.renderPiece(x,y, black)}
      </BoardSquare>
    </div>
    )
  },

  render: function(){

    var counter = 0;
    var squaresArray = [];

    while (counter < 64){
      var pushObject = this.renderSquare(counter);
      squaresArray.push(pushObject);
      counter ++;
    };

    //moveKnight={this.moveKnight(this.state.knightPosition[0], this.state.knightPosition[1])}
    return (
      <div>
        <Board knightPosition={this.state.knightPosition} squares={squaresArray} />
      </div>
    )
  }

})

module.exports = SmartComponent;
//module.exports = DragDropContext(HTML5Backend)(SmartComponent);
