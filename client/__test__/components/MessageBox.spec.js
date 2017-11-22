import React from 'react';
import { mount } from 'enzyme';
import MessageBox from '../../components/protected/MessageBox.jsx';
require('../setup');


describe('MessageBox components', () => {
  const component = mount(<MessageBox />);
  it('should render', () => {
    expect(component).toBeDefined();
  });
  it('Should contain eight div', () => {
    expect(component.find('div').length).toEqual(8);
  });
  it('should have an empty initial state', () => {
    expect(component.state().message).toEqual('');
    expect(component.state().priorityLevel).toEqual('');
    expect(component.state().error).toEqual({});
  });
  it('should contain defined methods', () => {
    expect(component.nodes[0].onChange).toBeDefined();
    expect(component.nodes[0].onClick).toBeDefined();
  });
  it('should thow an error when submitting a message without select group',
  () => {
    const preventDefault = jest.fn();
    component.state().message = 'Hello there';
    component.find('button').simulate('click', { preventDefault });
    const errors = {
      message: 'Please kindly select a group first'
    };
    expect(component.state().error.group).toEqual(errors.message);
  });
  it('should update state on when onchange method is called', () => {
    const event = {
      target: { name: 'name', value: 'value' }
    };
    component.instance().onChange(event);
    expect(component.state().name).toEqual('value');
  });
});
