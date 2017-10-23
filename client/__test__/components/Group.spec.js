import React from 'react';
import { shallow, render } from 'enzyme';
import Group from '../../components/protected/Group.jsx';


function setup() {
  const props = {
    onClick: () => {},
  };
 const group = {
    groupName: 'sasil',
    groupId: 'UTsUlauteS5nb34huOP6SpvcuocX9vA1',
  };
  return shallow(<Group {...props} group={group} />);
}

describe('User components', () => {
   
 const group = {
    groupName: 'sasil',
    groupId: 'UTsUlauteS5nb34huOP6SpvcuocX9vA1',
  };

  it('should match snapshot test', () => {
    const component = shallow(<Group group={group} />);
    expect(component).toMatchSnapshot();
  });
  it('should render', () => {
    const component = shallow(<Group group={group} />);
    expect(component).toBeDefined();
  });
  it('Should contain one div', () => {
    const component = shallow(<Group group={group} />);
    expect(component.find('div').length).toEqual(1);
  });
  it('should recieve props', () => {
    const component = shallow(<Group group={group} />);
    expect(Object.keys(component.props()).length).toBeGreaterThan(0);
  });
  it('should render without throwing an error', () => {
    const component = shallow(<Group group={group} />);
    expect(component.contains(group.groupName)).toBe(true);
  });
});

describe('Group  Test', () => {
  it('should take props', () => {
    const wrapper = setup();
    expect(wrapper.props().onClick).toExist;
  });
});
