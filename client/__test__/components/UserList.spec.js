import React from 'react';
import { shallow, render } from 'enzyme';
import UserList from '../../components/protected/UserList.jsx';
import User from '../../components/protected/User.jsx'; 

describe('UserList components', () => {
  const component = shallow(<UserList />);

  it('should match snapshot test', () => {
    expect(component).toMatchSnapshot();
  });
  it('should render', () => {
    expect(component).toBeDefined();
  });
  it('Should contain three div', () => {
    expect(component.find('div').length).toEqual(3);
  });
  it('should recieve props', () => {
    expect(Object.keys(component.props()).length).toBeGreaterThan(0);
  });
});
