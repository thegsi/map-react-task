import test from 'tape';
import ReactTestUtils from 'react-addons-test-utils';
import React from 'react';


let shallowRenderer = ReactTestUtils.createRenderer();

var Form = require('../src/js/components/Form.jsx');


shallowRenderer.render(<Form />);
let formRender = shallowRenderer.getRenderOutput();

console.log('formRender.props', formRender.props);

test('Form exists', t => {
  t.ok(formRender, 'formRender render object exists');
  //style is not the correct prop, use enzyme to rewrite test
  t.equal(Object.keys(formRender.props)[0], 'style', 'formRender.props ok');
  t.equal(formRender.type, 'div', 'formRender.type div ok');
  t.end();
});
