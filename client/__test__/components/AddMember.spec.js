import React from 'react';
import { shallow, render } from 'enzyme';
import AddMember from '../../components/protected/AddMember.jsx';


function setup() {
  const props = {
    onClick: () => {},
    onChange: () => {},

  };
  return shallow(<AddMember />);
}

describe('AddMember components', () => {
  it('should match snapshot test', () => {
    const component = shallow(<AddMember />);
    expect(component).toMatchSnapshot();
  });
  it('should render', () => {
    const component = shallow(<AddMember />);
    expect(component).toBeDefined();
  });
  it('Should contain two div', () => {
    const component = shallow(<AddMember />);
    expect(component.find('div').length).toEqual(2);
  });
  it('should recieve props', () => {
    const component = shallow(<AddMember />);
    expect(Object.keys(component.props()).length).toBeGreaterThan(0);
  });
});

describe('AddMember  Test', () => {
  it('should take props', () => {
    const wrapper = setup();
    expect(wrapper.props().onClick).toExist;
    expect(wrapper.props().onChange).toExist;

  });
});
