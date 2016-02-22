import test from 'tape';
import ReactTestUtils from 'react-addons-test-utils';
import React from 'react';

let shallowRenderer = ReactTestUtils.createRenderer();

import Square from '../src/js/components/Square.jsx';

shallowRenderer.render(<Square />);

let squareRender = shallowRenderer.getRenderOutput();

console.log('squareRender', squareRender.type);

test('Square exists', t => {
  t.ok(squareRender, 'squareRender render object exists');
  t.equal(Object.keys(squareRender.props)[0], 'style', 'server loads ok');
  t.equal(squareRender.type, 'div', 'server loads ok');
  t.end();
});
