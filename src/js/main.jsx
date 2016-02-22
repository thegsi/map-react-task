'use strict';

var React       = require('react');
var ReactDOM    = require('react-dom');
var rootElement = document.getElementById('react-content');
var SmartComponent = require('./components/SmartComponent.jsx');


  ReactDOM.render(

  <SmartComponent />,
    rootElement
  )
