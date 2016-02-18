'use strict';

var React       = require('react');
var ReactDOM    = require('react-dom');
var Chess       = require('./components/Chess.jsx');
var Knight       = require('./components/Knight.jsx');
var rootElement = document.getElementById('react-content');

ReactDOM.render(
  <Chess />,
  <Knight />,
  rootElement
);
