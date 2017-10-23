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
  it('renders without crashing', () => {
    shallow(<App />);
  });
  it('renders AppBar', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('AppBar').props().title).toEqual('Post It App')
  });
  it('renders AppBar', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('AppBar').props().title).toEqual('Post It App')
  });
  it('Should contain one PublicRoute', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('PublicRoute').length).toEqual(3);
  });
  it('Should contain two PrivateRoute', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('PrivateRoute').length).toEqual(2);
  });
});

describe('Register  Test', () => {
  it('should take props', () => {
    const wrapper = setup();
    expect(wrapper.props().onChange).toExist;
    expect(wrapper.props().handleClick).toExist;
    expect(wrapper.props().componentDidMount).toExist;
    expect(wrapper.props().componentWillUnmount).toExist;
  });
});

