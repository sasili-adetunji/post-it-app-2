import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import Login from '../../components/Login.jsx';

function setup() {
  const props = {
    onClick: () => {},
    onChange: () => {},
    onClickReset: () => {},
    onClickGoogle: () => {}
  };
  return shallow(<Login {...props} />);
}

describe('Login  Test', () => {
  it('should take props', () => {
    const wrapper = setup();
    expect(wrapper.props().onChange).toExist;
    expect(wrapper.props().onClick).toExist;
    expect(wrapper.props().onClickReset).toExist;
    expect(wrapper.props().onClickGoogle).toExist;
  });
});