import React from 'react';
import { shallow, render } from 'enzyme';
import Group from '../../components/protected/Group.jsx';
import mockApiCall from '../../__mocks__/axios';


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
  const component = setup();
  beforeEach(() => {
    jest.mock('axios', () => mockApiCall);
  });

  it('should match snapshot test', () => {
    expect(component).toMatchSnapshot();
  });
  it('should render', () => {
    expect(component).toBeDefined();
  });
  it('Should contain one div', () => {
    expect(component.find('div').length).toEqual(1);
  });
  it('should recieve props', () => {
    expect(Object.keys(component.props()).length).toBeGreaterThan(0);
  });
  it('should render without throwing an error', () => {
    expect(component.contains(group.groupName)).toBe(true);
  });
  it('should render without throwing an error', () => {
    expect(component.find('li').length).toEqual(1);
    expect(component.find('li').simulate('click')).toBeDefined();
  });
});

describe('Group  Test', () => {
  it('should take props', () => {
    const component = setup();
    expect(component.props().onClick).toExist;
  });
});
