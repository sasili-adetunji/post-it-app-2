import React from 'react';
import { mount } from 'enzyme';
import GroupList from '../../components/protected/GroupList.jsx';

require('../setup');


describe('GroupList components', () => {
  let mountedComponent;
  const groupList = () => {
    if (!mountedComponent) {
      mountedComponent = mount(
        <GroupList />
      );
    }
    return mountedComponent;
  };
  it('should render', () => {
    expect(groupList()).toBeDefined();
  });
  it('Should contain five div', () => {
    expect(groupList().find('div').length).toEqual(5);
  });
  it('should not recieve props', () => {
    expect(Object.keys(groupList().props()).length).toBe(0);
  });
  it('expects the following functions defined', () => {
    const preventDefault = jest.fn();
    groupList().instance().closeModal({ preventDefault });
    groupList().instance().openModal({ preventDefault });
    groupList().instance().handleSubmit({ preventDefault });
  });
  it('should render the button to create a new group', () => {
    expect(groupList().find('#createNewGroup').text()).toBe('Create a Group');
  });
});
