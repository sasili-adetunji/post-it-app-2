import React from 'react';
import { mount } from 'enzyme';
import AppActions from '../../actions/AppActions';
import Register from '../../components/Register.jsx';
require('../setup');


jest.mock('../../actions/AppActions');

describe('Register', () => {
  const wrapper = mount(<Register />);
  let props;
  let mountedComponent;
  const register = () => {
    if (!mountedComponent) {
      mountedComponent = mount(
        <Register {...props} />
      );
    }
    return mountedComponent;
  };

  beforeEach(() => {
    props = {
      onChange: () => {},
    };
    mountedComponent = mount(
      <Register {...props} />
      );
  });
  it('should always render', () => {
    expect(register()).toBeDefined();
  });
  it('always renders a div', () => {
    const divs = register().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
  it('should have an empty initial state', () => {
    expect(mountedComponent.state().userName).toEqual('');
    expect(mountedComponent.state().email).toEqual('');
    expect(mountedComponent.state().password).toEqual('');
    expect(mountedComponent.state().phoneNumber).toEqual('');
  });
  it('should have all the method defined', () => {
    expect(mountedComponent.node.onChange).toBeDefined();
    expect(mountedComponent.node.handleSubmit).toBeDefined();
  });
  it('should update state on when onchange method is called', () => {
    const event = {
      target: { name: 'name', value: 'value' }
    };
    wrapper.instance().onChange(event);
    expect(wrapper.state().name).toEqual('value');
  });
  it('should sign up a user', () => {
    const preventDefault = jest.fn();
    wrapper.find('form').simulate('submit', { preventDefault });
    expect(preventDefault).toHaveBeenCalledTimes(1);
  });
  it('should thow an error when signing up with empty passwrod', () => {
    const preventDefault = jest.fn();
    wrapper.state().email = 'sas@gmail.com';
    wrapper.state().password = '';
    wrapper.find('form').simulate('submit', { preventDefault });
    const errors = {
      password: 'Password is required'
    };
    expect(wrapper.state().errors).toEqual(errors);
  });
  it('should thow an error when signing up with empty phone number', () => {
    const preventDefault = jest.fn();
    wrapper.state().email = 'sas@gmail.com';
    wrapper.state().password = 'sas';
    wrapper.state().phoneNumber = '';

    wrapper.find('form').simulate('submit', { preventDefault });
    const errors = {
      phoneNumber: 'Phone Number is required'
    };
    expect(wrapper.state().errors).toEqual(errors);
  });
  it('should thow an error when signing up with empty user name', () => {
    const preventDefault = jest.fn();
    wrapper.state().email = 'sas@gmail.com';
    wrapper.state().password = 'sas';
    wrapper.state().phoneNumber = '2348037817325';
    wrapper.state().userName = '';
    wrapper.find('form').simulate('submit', { preventDefault });
    const errors = {
      userName: 'userName is required'
    };
    expect(wrapper.state().errors).toEqual(errors);
  });
  it('should fire register actions when all fields are set', () => {
    const registerUserSpy = jest.spyOn(AppActions, 'registerUser');
    const preventDefault = jest.fn();
    wrapper.state().email = 'sas@gmail.com';
    wrapper.state().password = 'sas';
    wrapper.state().phoneNumber = '2348037817325';
    wrapper.state().userName = 'sas';
    wrapper.find('form').simulate('submit', { preventDefault });
    expect(registerUserSpy).toHaveBeenCalled();
  });
  it('Should contain four input fields', () => {
    expect(wrapper.find('input').length).toEqual(4);
  });
  it('Should contain a Register Button', () => {
    expect(wrapper.find('button').length).toEqual(1);
  });
});
