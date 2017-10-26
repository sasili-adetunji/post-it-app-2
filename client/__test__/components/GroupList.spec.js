import React from 'react';
import { shallow, render } from 'enzyme';
import GroupList from '../../components/protected/GroupList.jsx';

describe('GroupList components', () => {
  const component = shallow(<GroupList />);

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
