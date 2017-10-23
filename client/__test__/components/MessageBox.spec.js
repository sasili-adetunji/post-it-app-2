import React from 'react';
import { shallow, render } from 'enzyme';
import MessageBox from '../../components/protected/MessageBox.jsx';


function setup() {
  const props = {
    onClick: () => {},
    onChange: () => {},

  };
  return shallow(<MessageBox />);
}

describe('AddMember components', () => {
  it('should match snapshot test', () => {
    const component = shallow(<MessageBox />);
    expect(component).toMatchSnapshot();
  });
  it('should render', () => {
    const component = shallow(<MessageBox />);
    expect(component).toBeDefined();
  });
  it('Should contain two div', () => {
    const component = shallow(<MessageBox />);
    expect(component.find('div').length).toEqual(2);
  });
  it('should recieve props', () => {
    const component = shallow(<MessageBox />);
    expect(Object.keys(component.props()).length).toBeGreaterThan(0);
  });
});

describe('MessageBox  Test', () => {
  it('should take props', () => {
    const wrapper = setup();
    expect(wrapper.props().onClick).toExist;
    expect(wrapper.props().onChange).toExist;

  });
});
