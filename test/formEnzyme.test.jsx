import test from 'tape';
import ReactTestUtils from 'react-addons-test-utils';
import React from 'react';

var expect = require('chai').expect;

var Form = require('../src/js/components/Form.jsx');
import { shallow } from 'enzyme';

test('should contain one Button', t => {
  const formComponent = shallow(<Form />)
  const button = formComponent.find("#inputButtonGeocode");
  expect(button).to.have.length.of(1);
});
