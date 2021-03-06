import test from 'tape';
import ReactTestUtils from 'react-addons-test-utils';
import React from 'react';

let shallowRenderer = ReactTestUtils.createRenderer();

var SmartComponent = require('../src/js/components/SmartComponent.jsx');


shallowRenderer.render(<SmartComponent />);
let smartComponentRender = shallowRenderer.getRenderOutput();

test('Form exists', t => {
  t.ok(smartComponentRender, 'smartComponentRender render object exists');
  t.equal(smartComponentRender.type, 'div', 'smartComponentRender.type div ok');
  t.end();
});
