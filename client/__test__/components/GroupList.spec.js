import React from 'react';
import { shallow, mount } from 'enzyme';
import GroupList from '../../components/protected/GroupList.jsx';
import PostItStore from '../../stores/PostItStore';     // eslint-disable-line


require('../setup');


describe('GroupList components', () => {
  let props;
  let mountedComponent;
  const groupList = () => {
    if (!mountedComponent) {
      mountedComponent = mount(
        <GroupList {...props} />
      );
    }
    return mountedComponent;
  };

  beforeEach(() => {
    props = {
      selected: [{ groupId: '-Kxmsgit2a21Qf7y25hF', groupName: 'creatGro' }],
      onChange: () => {},
    };
    mountedComponent = mount(
      <GroupList {...props} />
      );
  });
  it('should render', () => {
    expect(groupList()).toBeDefined();
  });
  it('Should contain five div', () => {
    expect(groupList().find('div').length).toEqual(5);
  });
  it('should recieve props', () => {
    expect(Object.keys(groupList().props()).length).toBeGreaterThan(0);
  });
});
