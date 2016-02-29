import test from 'tape';
import ReactTestUtils from 'react-addons-test-utils';
import React from 'react';

var AddressInputForm = require('../src/js/components/Form.jsx');
import { shallow } from 'enzyme';

test('should contain one Button', t => {
  const formComponent = shallow(<AddressInputForm />)
  const button = formComponent.find("#clearStateMarkersButton");
  t.ok(button, 'button object exists');
  t.end();
});
