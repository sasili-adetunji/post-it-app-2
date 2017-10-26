import React from 'react';
import { shallow, render } from 'enzyme';
import Login from '../../components/Login.jsx';


function setup() {
  const props = {
    onClick: () => {},
    onChange: () => {},
    onClickReset: () => {},
    onClickGoogle: () => {},
  };
  return shallow(<Login {...props} />);
}
describe('Login', () => {
  const component = setup();

  it('should match snapshot test', () => {
     expect(component).toMatchSnapshot();
   });
  it('should render', () => {
    expect(component).toBeDefined();
  });
  it('Should contain two div', () => {
    expect(component.find('div').length).toEqual(2);
  });
  it('Should contain two p', () => {
    expect(component.find('p').length).toEqual(2);
  });
  it('Should contain two textfields', () => {
    expect(component.find('TextField').length).toEqual(2);
  });
  it('Should contain a Login Button', () => {
    expect(component.find('RaisedButton').props().label).toEqual('Login');
    expect(component.find('RaisedButton').length).toEqual(1);
  });
  it('Should contain a Google Button', () => {
    expect(component.find('GoogleButton').props().onClick).toExist;
    expect(component.find('GoogleButton').length).toEqual(1);
  });
  it('should call function on click of login submit button', () => {
    const preventDefault = jest.fn();
    component.find('RaisedButton').simulate('click', { preventDefault });
    expect(preventDefault).toBeCalled();
  });
});
describe('Login  Test', () => {
  it('should take props', () => {
    const component = setup();
    expect(component.props().onChange).toExist;
    expect(component.props().onClick).toExist;
    expect(component.props().onClickReset).toExist;
    expect(component.props().onClickGoogle).toExist;
  });
});
