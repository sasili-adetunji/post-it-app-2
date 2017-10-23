import React from 'react';
import { shallow, render } from 'enzyme';
import UserList from '../../components/protected/UserList.jsx';

describe('UserList components', () => {
  it('should match snapshot test', () => {
    const component = shallow(<UserList />);
    expect(component).toMatchSnapshot();
  });
  it('should render', () => {
    const component = shallow(<UserList />);
    expect(component).toBeDefined();
  });
  it('Should contain three div', () => {
    const wrapper = shallow(<UserList />);
    expect(wrapper.find('div').length).toEqual(3);
  });
  it('should recieve props', () => {
    const wrapper = shallow(<UserList />);
    expect(Object.keys(wrapper.props()).length).toBeGreaterThan(0);
  });
});
