import React from 'react';
import { mount } from 'enzyme';
import UserList from '../../components/protected/UserList.jsx';
require('../setup');


describe('UserList components', () => {
  const user = [{
    userName: 'sasil',
    userId: 'UTsUlauteS5nb34huOP6SpvcuocX9vA1',
  }];
  const component = mount(<UserList users={user} />);

  it('should render', () => {
    expect(component).toBeDefined();
  });
  it('Should contain four div', () => {
    expect(component.find('div').length).toEqual(4);
  });
  it('should recieve props', () => {
    expect(Object.keys(component.props()).length).toBeGreaterThan(0);
  });
});
