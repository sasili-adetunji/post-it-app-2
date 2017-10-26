import React from 'react';
import { shallow, render, mount } from 'enzyme';
import App from '../../components/index.jsx';


function setup() {
  const props = {
    handleClick: () => {},
    onChange: () => {},
    componentDidMount: () => {},
    componentWillUnmount: () => {}
  };
  return shallow(<App {...props} />);
}


describe(' Test for App Component', () => {
  const component = setup();

  it('renders without crashing', () => {
    shallow(<App />);
  });
  it('renders AppBar', () => {
    expect(component.find('AppBar').props().title).toEqual('Post It App')
  });
  it('renders AppBar', () => {
    expect(component.find('AppBar').props().title).toEqual('Post It App');
  });
  it('Should contain one PublicRoute', () => {
    expect(component.find('PublicRoute').length).toEqual(3);
  });
  it('Should contain two PrivateRoute', () => {
    expect(component.find('PrivateRoute').length).toEqual(2);
  });
});

describe('Register  Test', () => {
  it('should take props', () => {
    const component = setup();
    expect(component.props().onChange).toExist;
    expect(component.props().handleClick).toExist;
    expect(component.props().componentDidMount).toExist;
    expect(component.props().componentWillUnmount).toExist;
  });
});

