import React from 'react';
import { shallow, mount } from 'enzyme';
import GroupList from '../../components/protected/GroupList.jsx';
import PostItStore from '../../stores/PostItStore';     // eslint-disable-line

import {JSDOM} from 'jsdom';

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');

const { window } = jsdom;
global.window = window;
global.document = window.document;

describe('GroupList components', () => {
  let props;
  let mountedComponent;
  const groupList = () => {
    if (!mountedComponent) {
      mountedGroupList = mount(
        <GroupList {...props} />
      );
    }
    return mountedComponent;
  }

  beforeEach(() => {
    props = {
      selected: [{groupId: "-Kxmsgit2a21Qf7y25hF", groupName: "creatGro"}],
      onChange: () => {},
    };
    mountedComponent = mount(
        <GroupList {...props} />
      );
  });
  it('should render', () => {
    expect(groupList()).toBeDefined();
  });
  it('Should contain three div', () => {
    expect(groupList().find('div').length).toEqual(3);
  });
  it('should recieve props', () => {
    expect(Object.keys(groupList().props()).length).toBeGreaterThan(0);
  });
   it('should have an empty initial state', () => {
    expect(mountedComponent.state().showAddUser).toEqual(false);
  });
});
