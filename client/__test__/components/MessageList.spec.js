import React from 'react';
import { mount } from 'enzyme';
import MessageList from '../../components/protected/MessageList.jsx';

require('../setup');

describe('MessageList components', () => {
  const group = { groupId: 'TUsUaucS5nb5kuOP6SpvTUcX9v3',
    groupName: 'Test Group' };
  const message = [{ messageBody: 'Test message',
    postedBy: 'testUser@gmail.com',
    postedByDisplayName: 'Test User',
    postedon: '',
    priority: 'Normal' }];
  const component = mount(<MessageList
    selectedGroup={group}
    messages={message}
  />);

  it('should render', () => {
    expect(component).toBeDefined();
  });
  it('always renders a div', () => {
    const divs = component.find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
  it('should recieve props', () => {
    expect(Object.keys(component.props()).length).toBeGreaterThan(0);
  });
});
