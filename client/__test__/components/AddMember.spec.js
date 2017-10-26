import React from 'react';
import { shallow } from 'enzyme';
import AddMember from '../../components/protected/AddMember.jsx';


function setup() {
  const props = {
    onClick: () => {},
    onChange: () => {},
    changeToUserid: () => {},
  };
  return shallow(<AddMember {...props} />);
}

describe('AddMember components', () => {
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
  it('should recieve props', () => {
    expect(Object.keys(component.props()).length).toBeGreaterThan(0);
  });
});

describe('AddMember  Test', () => {
  it('should take props', () => {
    const wrapper = setup();
    expect(wrapper.props().onClick).toExist;
    expect(wrapper.props().onChange).toExist;
    expect(wrapper.props().changeToUserid).toExist;
  });
});
