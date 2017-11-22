import React from 'react';
import { mount } from 'enzyme';
import PostItActions from '../../actions/PostItActions';
import Group from '../../components/protected/Group.jsx';

require('../setup');

jest.mock('../../actions/PostItActions');


describe('Group components', () => {
  const group = {
    groupName: 'sasil',
    groupId: 'UTsUlauteS5nb34huOP6SpvcuocX9vA1',
  };
  const component = mount(<Group group={group} />);
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
    expect(component.find('li').length).toEqual(1);
  });
  it('should call function on click of a group', () => {
    const groupSpy = jest.spyOn(PostItActions, 'groupOpened');
    component.find('li').simulate('click');
    expect(groupSpy).toBeCalledWith(group);
  });
});
