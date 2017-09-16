import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import Login from '../client/components/Login';

function setup() {
  const props = {
    onClick: () => {},
    onChange: () => {},
    onClickReset: () => {},
    onClickGoogle: () => {}
  };
  return mount(<Login {...props} />);
}

describe('Login  Test', () => {
  it('should take props', () => {
  });
});
