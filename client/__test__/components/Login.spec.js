import React from 'react';
import { mount } from 'enzyme';
import AppActions from '../../actions/AppActions';
import Login from '../../components/Login.jsx';

require('../setup');


jest.mock('../../actions/AppActions');

describe('Login', () => {
  const wrapper = mount(<Login />);
  it('should always render', () => {
    expect(wrapper).toBeDefined();
  });
  it('always renders a div', () => {
    const divs = wrapper.find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
  it('should have an empty initial state', () => {
    expect(wrapper.state().email).toEqual('');
    expect(wrapper.state().password).toEqual('');
  });
  it('should have all the method defined', () => {
    expect(wrapper.node.onChange).toBeDefined();
    expect(wrapper.node.onClick).toBeDefined();
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
    wrapper.find('#login').simulate('click', { preventDefault });
    expect(preventDefault).toHaveBeenCalledTimes(1);
  });
  it('should thow an error when signing up with empty email', () => {
    const preventDefault = jest.fn();
    wrapper.state().email = '';
    wrapper.find('#login').simulate('click', { preventDefault });
    const errors = {
      email: 'Email is required'
    };
    expect(wrapper.state().errors).toEqual(errors);
  });
  it('should thow an error when signing up with empty passwrod', () => {
    const preventDefault = jest.fn();
    wrapper.state().email = 'sas@gmail.com';
    wrapper.state().password = '';
    wrapper.find('#login').simulate('click', { preventDefault });
    const errors = {
      password: 'Password is required'
    };
    expect(wrapper.state().errors).toEqual(errors);
  });
  it('should fire register actions when all fields are set', () => {
    const registerUserSpy = jest.spyOn(AppActions, 'login');
    const preventDefault = jest.fn();
    wrapper.state().email = 'sas@gmail.com';
    wrapper.state().password = 'sas';
    wrapper.find('#login').simulate('click', { preventDefault });
    expect(registerUserSpy).toHaveBeenCalled();
  });
  it('should fire google logn actions', () => {
    const preventDefault = jest.fn();
    wrapper.find('#google-sign-in').simulate('click', { preventDefault });
    expect(preventDefault).toHaveBeenCalled();
  });
  it('Should contain two input fields', () => {
    expect(wrapper.find('input').length).toEqual(2);
  });
  it('Should contain a Login Button', () => {
    expect(wrapper.find('#login').length).toEqual(1);
  });
});
