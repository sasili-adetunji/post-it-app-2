import React from 'react';
import { shallow, mount } from 'enzyme';
import Message from '../../components/protected/Message.jsx';
import {JSDOM} from 'jsdom';

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');

const { window } = jsdom;
global.window = window;
global.document = window.document;


describe('User components', () => {
  const props = {
    message: {
    messageText: 'sasil',
    date: '',
    status: 'Read',
    author: 'Wash',
    },
  readUser: {
    name: 'Sasili',
    name: 'Qudus'
  }
  };
const shallowComponent = () => shallow(<Message {...props} />)
const component = () => mount(<Message {...props} />)

  it('should match snapshot test', () => {
    expect(component).toMatchSnapshot();
  });
  it('should render', () => {
    expect(component).toBeDefined();
  });
  it('Should contain four div', () => {
    expect(shallowComponent().find('div').length).toEqual(4);
  });
  it('Should contain one ul', () => {
    expect(shallowComponent().find('ul').length).toEqual(1);
  });
  it('Should contain one p', () => {
    expect(shallowComponent().find('p').length).toEqual(1);
  });
  it('should recieve props', () => {
    expect(Object.keys(component().props()).length).toBeGreaterThan(0);
  });
});
