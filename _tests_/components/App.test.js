import React from 'react';
import { mount, shallow } from 'enzyme';
import expect from 'expect';
import App from '../../client/components';

describe(' Test for App Component', () => {
  it('renders the app components', () => {
    const components = shallow(<App name="app" />);
    expect(components.instance().props.name).toBe('app');
  });
  it('renders the appbar components of the app', () => {
    const components = shallow(<App />);
    const appbar = components.find('AppBar');
    expect(appbar.props().title).toBe('Post It App');
  });
  it('renders the publicroute components of the app', () => {
    const components = shallow(<App />);
    const route = components.find('PublicRoute');
    expect(route.length).toEqual(3);
  });
  it('renders the privateroute components of the app', () => {
    const components = shallow(<App />);
    const route = components.find('PrivateRoute');
    expect(route.props().isAuthenticated).toBe(false);
    console.log(route.props().isAuthenticated);
  });
});
