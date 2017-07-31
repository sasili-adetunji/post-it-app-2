import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import Register from '../../client/components/Register';

function setup() {
  const props = {
    onlick: () => {},
    onChange: () => {}
  };

  return mount(<Register {...props} />);
}

describe('Signup  Test', () => {
  it('should take props', () => {
    const wrapper = setup();
    expect(wrapper.props().onChange).toExist;
    expect(wrapper.props().onlick).toExist;
  });
});
