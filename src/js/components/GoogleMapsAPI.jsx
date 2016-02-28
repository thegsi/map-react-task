var React       = require('react');
var Component = require('react').Component;

var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
        Hello, world! I am a CommentForm.
      </div>
    );
  }
});

var GoogleMapsAPI = React.createClass({

  render: function(){
    return (

        <CommentForm />

      )
  }

});

module.exports = GoogleMapsAPI;
