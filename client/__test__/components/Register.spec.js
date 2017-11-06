import React from 'react';
import { shallow, render } from 'enzyme';
import PostItActions from '../../actions/PostItActions'
import Register from '../../components/Register.jsx';


function setup() {
  const props = {
    onClick: () => {},
    onChange: () => {},
    onError: () => {},
    componentDidMount: () => {},
    componentWillUnmount: () => {}
  };
  return shallow(<Register {...props} />);
}

describe('Register', () => {
  const component = setup();
  it('should match snapshot test', () => {
    expect(component).toMatchSnapshot();
  });
  it('should render', () => {
    expect(component).toBeDefined();
  });
  it('Should contain two div', () => {
    expect(component.find('div').length).toEqual(1);
  });
  it('Should contain two p', () => {
    expect(component.find('p').length).toEqual(1);
  });
  it('Should contain four textfields', () => {
    expect(component.find('TextField').length).toEqual(4);
  });
  it('Should contain a Register Button', () => {
    expect(component.find('RaisedButton').props().label).toEqual('Sign Up')
    expect(component.find('RaisedButton').length).toEqual(1);
  });
  it('should call function on click of register submit button', () => {
    const preventDefault = jest.fn();
    component.find('RaisedButton').simulate('click', { preventDefault });
    expect(preventDefault).toBeCalled();
  });
});
describe('Register  Test', () => {
  it('should take props', () => {
    const component = setup();
    expect(component.props().onChange).toExist;
    expect(component.props().onClick).toExist;
    expect(component.props().onError).toExist;
    expect(component.props().componentDidMount).toExist;
    expect(component.props().componentWillUnmount).toExist;
  });
});
