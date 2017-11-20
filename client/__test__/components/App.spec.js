import React from 'react';
import { shallow } from 'enzyme';
import App from '../../components/index.jsx';
import PostItStore from '../../stores/PostItStore';
require('../setup');


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
  const component = shallow(<App />);
  const mock = jest.fn();
  const getAuthenticatedStateSpy = jest.spyOn(PostItStore,
  'addChangeListener');
  it('should renders without crashing', () => {
    shallow(<App />);
  });
  it('Should contain four PublicRoute', () => {
    expect(component.find('PublicRoute').length).toEqual(4);
  });
  it('Should contain two PrivateRoute', () => {
    expect(component.find('PrivateRoute').length).toEqual(2);
  });
});
