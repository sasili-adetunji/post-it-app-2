import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import MessageBoard from '../components/protected/MessageBoard';

function setup() {
  const props = {
    onlick: () => {},
  };

  return shallow(<MessageBoard {...props} />);
}

describe('MessageBoard  Test', () => {
  it('should take props', () => {
    const wrapper = setup();
    expect(wrapper.props().onChange).toExist;
  });
  it('contains a render method', () => {
    const wrapper = setup();
    // console.log(wrapper.instance().render());
    // expect(wrapper.instance().render()).to.be.defined;
  });
  it('contains a render method', () => {
    const components = shallow(<MessageBoard />);
    const route = components.find('GroupList');
    // console.log(route);
    // expect(wrapper.instance().render()).to.be.defined;
  });
});

