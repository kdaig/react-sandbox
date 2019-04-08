import React from 'react';
import ReactDOM from 'react-dom';
var hw1 = React.createElement('h3', null, 'Hello World');
var hw2 = React.createElement('h3', null, 'Pleasure to meet you');
var div1 = React.createElement('div', null, hw1, hw2);
ReactDOM.render(div1, document.getElementById('app'));
