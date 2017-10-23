import React from 'react';
import { shallow, render } from 'enzyme';
import Login from '../../components/Login.jsx';


function setup() {
  const props = {
    onClick: () => {},
    onChange: () => {},
    onClickReset: () => {},
    onClickGoogle: () => {}
  };
  return shallow(<Login {...props} />);
}
describe('Login', () => {
   it('should match snapshot test', () => {
    const component = shallow(<Login />);
    expect(component).toMatchSnapshot();
  });
  it('should render', () => {
    const component = shallow(<Login />);
    expect(component).toBeDefined();
  });
  it('Should contain two div', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('div').length).toEqual(2);
  });
  it('Should contain two p', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('p').length).toEqual(2);
  });
  it('Should contain two textfields', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('TextField').length).toEqual(2);
  });
  it('Should contain a Login Button', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('RaisedButton').props().label).toEqual('Login')
    expect(wrapper.find('RaisedButton').length).toEqual(1);
  });
  it('Should contain a Google Button', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('GoogleButton').props().onClick).toExist
    expect(wrapper.find('GoogleButton').length).toEqual(1);
  });
  it('should call function on click of login submit button', () => {
    const component = shallow(<Login />);
    const preventDefault = jest.fn();
    component.find('RaisedButton').simulate('click', { preventDefault });
    expect(preventDefault).toBeCalled();
  });
});
describe('Login  Test', () => {
  it('should take props', () => {
    const wrapper = setup();
    expect(wrapper.props().onChange).toExist;
    expect(wrapper.props().onClick).toExist;
    expect(wrapper.props().onClickReset).toExist;
    expect(wrapper.props().onClickGoogle).toExist;
  });
});
