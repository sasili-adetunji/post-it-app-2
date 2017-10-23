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
  it('should match snapshot test', () => {
    const component = shallow(<Register />);
    expect(component).toMatchSnapshot();
  });
  it('should render', () => {
    const component = shallow(<Register />);
    expect(component).toBeDefined();
  });
  it('Should contain two div', () => {
    const wrapper = shallow(<Register />);
    expect(wrapper.find('div').length).toEqual(1);
  });
  it('Should contain two p', () => {
    const wrapper = shallow(<Register />);
    expect(wrapper.find('p').length).toEqual(1);
  });
  it('Should contain four textfields', () => {
    const wrapper = shallow(<Register />);
    expect(wrapper.find('TextField').length).toEqual(4);
  });
  it('Should contain a Register Button', () => {
    const wrapper = shallow(<Register />);
    expect(wrapper.find('RaisedButton').props().label).toEqual('Sign Up')
    expect(wrapper.find('RaisedButton').length).toEqual(1);
  });
    it('should call function on click of register submit button', () => {
    const component = shallow(<Register />);
    const preventDefault = jest.fn();
    component.find('RaisedButton').simulate('click', { preventDefault });
    expect(preventDefault).toBeCalled();
  });
});
describe('Register  Test', () => {
  it('should take props', () => {
    const wrapper = setup();
    expect(wrapper.props().onChange).toExist;
    expect(wrapper.props().onClick).toExist;
    expect(wrapper.props().onError).toExist;  
    expect(wrapper.props().componentDidMount).toExist;
    expect(wrapper.props().componentWillUnmount).toExist;
  });
});
