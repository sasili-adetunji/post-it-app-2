import React from 'react';
import { shallow, render } from 'enzyme';
import MessageBox from '../../components/protected/MessageBox.jsx';


function setup() {
  const props = {
    onClick: () => {},
    onChange: () => {},
  };
  return shallow(<MessageBox {...props}/>);
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

describe('MessageBox  Test', () => {
  it('should take props', () => {
    const component = setup();
    expect(component.props().onClick).toExist;
    expect(component.props().onChange).toExist;

  });
});
