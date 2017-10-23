import React from 'react';
import { shallow, render } from 'enzyme';
import GroupList from '../../components/protected/GroupList.jsx';

describe('GroupList components', () => {
  it('should match snapshot test', () => {
    const component = shallow(<GroupList />);
    expect(component).toMatchSnapshot();
  });
  it('should render', () => {
    const component = shallow(<GroupList />);
    expect(component).toBeDefined();
  });
  it('Should contain three div', () => {
    const wrapper = shallow(<GroupList />);
    expect(wrapper.find('div').length).toEqual(3);
  });
  it('should recieve props', () => {
    const wrapper = shallow(<GroupList />);
    expect(Object.keys(wrapper.props()).length).toBeGreaterThan(0);
  });
});
