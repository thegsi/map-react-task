import test from 'tape';
import ReactTestUtils from 'react-addons-test-utils';
import React from 'react';

let shallowRenderer = ReactTestUtils.createRenderer();

import SmartComponent from '../src/js/components/SmartComponent.jsx';

shallowRenderer.render(<SmartComponent />);

let smartComponentRender = shallowRenderer.getRenderOutput();

test('SmartComponent exists', t => {
  t.ok(smartComponentRender, 'smartComponentRender render object exists');
  t.equal(smartComponentRender.type, 'div', 'smartComponentRender type ok');
  t.end();
});
