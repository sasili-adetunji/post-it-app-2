import React from 'react';
import { shallow, render } from 'enzyme';
import MessageList from '../../components/protected/MessageList.jsx';

describe('MessageList components', () => {
    const group = { groupId: 'TUsUaucS5nb5kuOP6SpvTUcX9v3',
    groupName: 'Test Group',};
    const readUsers= [ {K345SHRKSDFKDSDGjhe5:'Adeola'}, {K95745SHRKSDFKDSDGjhe5:'Kola'} ];
    const message = [{ messageBody: 'Test message',
    postedBy: 'testUser@gmail.com',
    postedByDisplayName: 'Test User',
    postedon: '',
    priority: 'Normal'}];

    it('should match snapshot test', () => {
    const component = shallow(<MessageList selectedGroup={group}
    readUsers={readUsers} messages={message}/> );
    expect(component).toMatchSnapshot();
  });

  it('should render', () => {
  const component = shallow(<MessageList selectedGroup={group}
 readUsers={readUsers} messages={message}/> );    
   expect(component).toBeDefined();
  });
  it('Should contain three div', () => {
    const component = shallow(<MessageList selectedGroup={group}/>);
    expect(component.find('div').length).toEqual(3);
  });
  it('should recieve props', () => {
    const component = shallow(<MessageList selectedGroup={group}/>);
    expect(Object.keys(component.props()).length).toBeGreaterThan(0);
  });
});
