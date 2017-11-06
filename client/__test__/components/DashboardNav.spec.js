import React from 'react';
import { shallow, render } from 'enzyme';
import DashboardNav from '../../components/protected/DashboardNav.jsx';


function setup() {
  const props = {
    onChange: () => {},
    componentDidMount: () => {},
    componentWillUnmount: () => {},
  };
  return shallow(<DashboardNav {...props} />);
}


describe(' DashboardNav Component', () => {
  const component = setup();
  it('renders without crashing', () => {
    shallow(<DashboardNav />);
  });
  it('renders Create Group', () => {
    expect(component.find('CreateGroup').length).toEqual(1);
  });
  it('renders GroupList components', () => {
    expect(component.find('GroupList').length).toEqual(1);
  });
  it('renders Add Member components', () => {
    expect(component.find('AddMember').length).toEqual(1);
  });
  it('renders UserList components', () => {
    expect(component.find('UserList').length).toEqual(1);
  });
});

