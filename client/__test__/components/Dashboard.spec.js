import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from '../../components/protected/Dashboard.jsx';
import GroupList from '../../components/protected/GroupList.jsx';
import MessageList from '../../components/protected/MessageList.jsx';

require('../setup');


describe('MessageBoard', () => {
  const data = {
    userName: 'sasil',
    userId: 'UTsUlauteS5nb34huOP6SpvcuocX9vA1',
    email: 'sas@email.com'
  };
  const messageBoard = shallow(<Dashboard userName={data} />);
  it('always renders a div', () => {
    const divs = messageBoard.find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
  describe('the rendered div', () => {
    it('contains everything else that gets rendered', () => {
      const divs = messageBoard.find('div');
      const wrappingDiv = divs.first();
      expect(wrappingDiv.children()).toEqual(messageBoard.children());
    });
    it('always renders a `GroupList`', () => {
      expect(messageBoard.find(GroupList).length).toBe(1);
    });
    it('always renders a `MessageList`', () => {
      expect(messageBoard.find(MessageList).length).toBe(1);
    });
  });
  describe('rendered `MessageList`', () => {
    const messageListDisplay = messageBoard.find(MessageList);
    it('should receive one props', () => {
      expect(Object.keys(messageListDisplay.props()).length).toBe(1);
    });
  });
});
