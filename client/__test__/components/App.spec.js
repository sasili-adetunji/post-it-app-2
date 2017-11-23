import React from 'react';
import { shallow } from 'enzyme';
import App from '../../components/App.jsx';
import NavBar from '../../components/NavBar.jsx';

require('../setup');


describe('App Component', () => {
  const component = shallow(<App />);
  it('should renders without crashing', () => {
    shallow(<App />);
  });
  it('Should contain four PublicRoute', () => {
    expect(component.find('PublicRoute').length).toEqual(4);
  });
  it('Should contain two PrivateRoute', () => {
    expect(component.find('PrivateRoute').length).toEqual(2);
  });
  it('should contain a <NavBar /> component', () => {
    expect(component.find(NavBar)).toHaveLength(1);
  });
});
