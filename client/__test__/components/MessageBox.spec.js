import React from 'react';
import { shallow, mount } from 'enzyme';
import PostItActions from '../../actions/PostItActions';
import MessageBox from '../../components/protected/MessageBox.jsx';
require('../setup');


function setup() {
  const props = {
    onClick: () => {},
    onChange: () => {},
  };
  return shallow(<MessageBox {...props} />);
}

describe('MessageBox components', () => {
  let submitSpy;

  beforeEach(() => {
    submitSpy = jest.spyOn(PostItActions, 'addMessage');
  });
  const shallowComponent = setup();
  const component = mount(<MessageBox />);
  it('should render', () => {
    expect(shallow).toBeDefined();
  });
  it('Should contain eight div', () => {
    expect(shallowComponent.find('div').length).toEqual(8);
  });
  it('should recieve props', () => {
    expect(Object.keys(shallowComponent.props()).length).toBeGreaterThan(0);
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
  it('should not  a user on click of button', () => {
    component.find('form').simulate('submit');
    expect(component.find('form').simulate('submit')).toBeDefined();
  });
  it('should thow an error when submittinga message without select group',
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
