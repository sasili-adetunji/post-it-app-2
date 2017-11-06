import React from 'react';
import { shallow, render, mount } from 'enzyme';
import PostItActions from '../../actions/PostItActions';
import MessageBox from '../../components/protected/MessageBox.jsx';
import {JSDOM} from 'jsdom';

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');

const { window } = jsdom;
global.window = window;
global.document = window.document;



function setup() {
  const props = {
    onClick: () => {},
    onChange: () => {},
  };
  return shallow(<MessageBox {...props}/>);
}

describe('MessageBox components', () => {
    let submitSpy;

  beforeEach(() => {
    submitSpy = jest.spyOn(PostItActions, 'addMessage');
  });
  const shallowComponent = setup();
  const component = mount(<MessageBox />)

  it('should match snapshot test', () => {
    expect(shallowComponent).toMatchSnapshot();
  });
  it('should render', () => {
    expect(shallow).toBeDefined();
  });
  it('Should contain two div', () => {
    expect(shallowComponent.find('div').length).toEqual(2);
  });
  it('should recieve props', () => {
    expect(Object.keys(shallowComponent.props()).length).toBeGreaterThan(0);
  });
  it('should have an empty initial state', () => {
    expect(component.state().message).toEqual('');
    expect(component.state().priorityLevel).toEqual('');
    expect(component.state().error).toEqual('');
  });
  it('should contain defined methods', () => {
    expect(component.nodes[0].onChange).toBeDefined();
    expect(component.nodes[0].onClick).toBeDefined();
  });
   it('should not  a user on click of button', () => {
    component.find('form').simulate('submit');
    expect(component.find('form').simulate('submit')).toBeDefined();
  });
});

describe('MessageBox  Test', () => {
  it('should take props', () => {
    const component = setup();
    expect(component.props().onClick).toExist;
    expect(component.props().onChange).toExist;
  });
});
