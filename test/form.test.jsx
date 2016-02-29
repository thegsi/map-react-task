import test from 'tape';
import ReactTestUtils from 'react-addons-test-utils';
import React from 'react';


let shallowRenderer = ReactTestUtils.createRenderer();

var Form = require('../src/js/components/Form.jsx');


shallowRenderer.render(<Form />);
let formRender = shallowRenderer.getRenderOutput();

test('Form exists', t => {
  t.ok(formRender, 'formRender render object exists');
  t.equal(Object.keys(formRender.props)[0], 'children', 'formRender.props ok');
  t.equal(formRender.type, 'div', 'formRender.type div ok');
  t.end();
});
