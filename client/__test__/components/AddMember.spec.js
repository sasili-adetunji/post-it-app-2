import React from 'react';
import { mount } from 'enzyme';
import AddMember from '../../components/protected/AddMember.jsx';

require('../setup');

describe('AddMember', () => {
  let mountedComponent;
  const addMember = () => {
    if (!mountedComponent) {
      mountedComponent = mount(
        <AddMember />
      );
    }
    return mountedComponent;
  };
  it('always renders a div', () => {
    const divs = addMember().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
  describe('the rendered div', () => {
    it('contains everything else that gets rendered', () => {
      const divs = addMember().find('div');
      const wrappingDiv = divs.first();
      expect(wrappingDiv.children()).toEqual(addMember().children());
    });
    it('should have an empty initial state', () => {
      expect(mountedComponent.state().userName).toEqual('');
      expect(mountedComponent.state().userId).toEqual('');
      expect(mountedComponent.state().error).toEqual('');
    });
    it('should call function on submit of form', () => {
      const preventDefault = jest.fn();
      addMember().find('button').simulate('click', { preventDefault });
      expect(preventDefault).toBeCalled();
    });
    it('should update addmember state on  change', () => {
      addMember().find('input').simulate('change', { target: {
        value: 'programmer'
      } });
      expect(addMember().state().userName).toEqual('programmer');
    });
    it('should update state on when onchange method is called', () => {
      const event = {
        target: { name: 'name', value: 'value' }
      };
      addMember().instance().onChange(event);
      expect(addMember().state().userName).toEqual('value');
    });
  });
});
