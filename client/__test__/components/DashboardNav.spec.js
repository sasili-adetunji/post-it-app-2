import React from 'react';
import { shallow, render } from 'enzyme';
import DashboardNav from '../../components/protected/DashboardNav.jsx';


function setup() {
  const props = {
    onChange: () => {},
    componentDidMount: () => {},
    componentWillUnmount: () => {}

  };
  return shallow(<MessageBoard {...props} />);
}


describe(' DashboardNav Component', () => {
  it('renders without crashing', () => {
    shallow(<DashboardNav />);
  });

  it('renders Create Group', () => {
    const wrapper = shallow(<DashboardNav />);
    expect(wrapper.find('CreateGroup').length).toEqual(1)
  });
  it('renders GroupList components', () => {
    const wrapper = shallow(<DashboardNav />);
    expect(wrapper.find('GroupList').length).toEqual(1)
  });
  it('renders Add Member components', () => {
    const wrapper = shallow(<DashboardNav />);
    expect(wrapper.find('AddMember').length).toEqual(1)
  });
  it('renders UserList components', () => {
    const wrapper = shallow(<DashboardNav />);
    expect(wrapper.find('UserList').length).toEqual(1)
  });
});

