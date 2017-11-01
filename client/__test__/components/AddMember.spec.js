import React from 'react';
import { shallow, mount } from 'enzyme';
import AddMember from '../../components/protected/AddMember.jsx';
import {JSDOM} from 'jsdom';

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');

const { window } = jsdom;
global.window = window;
global.document = window.document;

function setup() {
  const props = {
    onClick: () => {},
    onChange: () => {},
    changeToUserid: () => {},
  };
  return shallow(<AddMember {...props} />);
}

describe('AddMember components', () => {
  const component = setup();
  const mountComponent = mount(<AddMember />);
  it('should match snapshot test', () => {
    expect(component).toMatchSnapshot();
  });
  it('should render', () => {
    expect(component).toBeDefined();
  });
  it('Should contain two div', () => {
    expect(component.find('div').length).toEqual(2);
  });
  it('should recieve props', () => {
    expect(Object.keys(component.props()).length).toBeGreaterThan(0);
  });
  it('should contain defined methods', () => {
    expect(mountComponent.nodes[0].onChange).toBeDefined();
    expect(mountComponent.nodes[0].onClick).toBeDefined();
    expect(mountComponent.nodes[0].changeToUserid).toBeDefined();
  });
});

describe('AddMember  Test', () => {
  it('should take props', () => {
    const wrapper = setup();
    expect(wrapper.props().onClick).toExist;
    expect(wrapper.props().onChange).toExist;
    expect(wrapper.props().changeToUserid).toExist;
  });
});
