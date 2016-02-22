import test from 'tape';
import ReactTestUtils from 'react-addons-test-utils';
import React from 'react';

let shallowRenderer = ReactTestUtils.createRenderer();

import Knight from '../src/js/components/Knight.jsx';

var KnightDecorated = Knight.DecoratedComponent;

var identity = function (el) { return el; };


shallowRenderer.render(<Knight />);
let knightRender = shallowRenderer.getRenderOutput();


// test('Square exists', t => {
//   t.ok(knightRender, 'knightRender render object exists');
//   // t.equal(Object.keys(squareRender.props)[0], 'style', 'server loads ok');
//   // t.equal(squareRender.type, 'div', 'server loads ok');
//   t.end();
// });
