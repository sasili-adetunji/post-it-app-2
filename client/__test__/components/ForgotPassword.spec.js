import React from 'react';
import { mount } from 'enzyme';
import PostItActions from '../../actions/PostItActions';
import ForgotPassword from '../../components/ForgotPassword.jsx';

require('../setup');


jest.mock('../../actions/PostItActions');

describe('Register', () => {
  const wrapper = mount(<ForgotPassword />);
  let props;
  let mountedComponent;
  const forgotPassword = () => {
    if (!mountedComponent) {
      mountedComponent = mount(
        <ForgotPassword {...props} />
      );
    }
    return mountedComponent;
  };
  it('should always render', () => {
    expect(forgotPassword()).toBeDefined();
  });
  it('always renders a div', () => {
    const divs = forgotPassword().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
  it('should have an empty initial state', () => {
    expect(mountedComponent.state().email).toEqual('');
  });
  it('should update state on when onchange method is called', () => {
    const event = {
      target: { name: 'name', value: 'value' }
    };
    wrapper.instance().onChange(event);
    expect(wrapper.state().name).toEqual('value');
  });
  it('should fire register actions when all fields are set', () => {
    const registerUserSpy = jest.spyOn(PostItActions, 'resetPassword');
    const preventDefault = jest.fn();
    wrapper.state().email = 'sas@gmail.com';
    wrapper.find('button').simulate('click', { preventDefault });
    expect(registerUserSpy).toHaveBeenCalled();
  });
  it('Should contain one input fields', () => {
    expect(wrapper.find('input').length).toEqual(1);
  });
  it('Should contain a Register Button', () => {
    expect(wrapper.find('button').length).toEqual(1);
  });
});
