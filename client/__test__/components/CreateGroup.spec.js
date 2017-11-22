import React from 'react';
import { mount } from 'enzyme';
import CreateGroup from '../../components/protected/CreateGroup.jsx';


require('../setup');

describe('AddMember', () => {
  let mountedComponent;
  const createGroup = () => {
    if (!mountedComponent) {
      mountedComponent = mount(
        <CreateGroup />
      );
    }
    return mountedComponent;
  };
  it('always renders a div', () => {
    const divs = createGroup().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
  describe('the rendered div', () => {
    it('contains everything else that gets rendered', () => {
      const divs = createGroup().find('div');
      const wrappingDiv = divs.first();
      expect(wrappingDiv.children()).toEqual(createGroup().children());
    });
    it('should have an empty initial state', () => {
      expect(mountedComponent.state().groupName).toEqual('');
    });
    it('should have all the method defined', () => {
      expect(mountedComponent.node.onChange).toBeDefined();
      expect(mountedComponent.node.onClick).toBeDefined();
    });
    it('should call function on submit of form', () => {
      const preventDefault = jest.fn();
      createGroup().find('button').simulate('click', { preventDefault });
      expect(preventDefault).toBeCalled();
    });
    it('should update creategroup state on  change', () => {
      createGroup().find('input').simulate('change', { target: {
        value: 'programmer'
      } });
      expect(createGroup().state().groupName).toEqual('programmer');
    });
    it('should thow an error when signing up with empty group name', () => {
      const preventDefault = jest.fn();
      createGroup().state().groupName = '';
      createGroup().find('button').simulate('click', { preventDefault });
      expect(createGroup().state().error).toEqual('Group Name is Required');
    });
  });
});
