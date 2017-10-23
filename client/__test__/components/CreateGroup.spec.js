import React from 'react';
import { shallow, render } from 'enzyme';
import CreateGroup from '../../components/protected/CreateGroup.jsx';


function setup() {
  const props = {
    onClick: () => {},
    onChange: () => {},

  };
  return shallow(<CreateGroup />);
}

describe('CreateGroup components', () => {
  it('should match snapshot test', () => {
    const component = shallow(<CreateGroup />);
    expect(component).toMatchSnapshot();
  });
  it('should render', () => {
    const component = shallow(<CreateGroup />);
    expect(component).toBeDefined();
  });
  it('Should contain two div', () => {
    const component = shallow(<CreateGroup />);
    expect(component.find('div').length).toEqual(2);
  });
  it('should recieve props', () => {
    const component = shallow(<CreateGroup />);
    expect(Object.keys(component.props()).length).toBeGreaterThan(0);
  });
});

describe('CreateGroup  Test', () => {
  it('should take props', () => {
    const wrapper = setup();
    expect(wrapper.props().onClick).toExist;
    expect(wrapper.props().onChange).toExist;

  });
});
