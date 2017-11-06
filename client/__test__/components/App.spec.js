import React from 'react';
import { shallow, render, mount } from 'enzyme';
import App from '../../components/index.jsx';


function setup() {
  const props = {
    onChange: () => {},
    componentDidMount: () => {},
    componentWillUnmount: () => {},
    PublicRoute: () => {},
    PrivateRoute: () => {}
  };
  return shallow(<App {...props} />);
}


describe('App Component', () => {
  const component = setup();

  it('should renders without crashing', () => {
    shallow(<App />);
  });
  it('should renders AppBar', () => {
    expect(component.find('AppBar').props().title).toEqual('Post It App')
  });
  it('should renders AppBar', () => {
    expect(component.find('AppBar').props().title).toEqual('Post It App');
  });
  it('Should contain one PublicRoute', () => {
    expect(component.find('PublicRoute').length).toEqual(3);
  });
  it('Should contain two PrivateRoute', () => {
    expect(component.find('PrivateRoute').length).toEqual(2);
  });
});

describe('App  Component', () => {
  it('should take props', () => {
    const component = setup();
    expect(component.props().onChange).toExist;
    expect(component.props().componentDidMount).toExist;
    expect(component.props().componentWillUnmount).toExist;
  });
});

